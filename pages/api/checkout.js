import mercadopago from "mercadopago";
import { supabaseAdmin } from "@/supabase/servidor";

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN,
});

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            // ✔✔✔ usar supabase para verificar el stock y precio del producto.

            // 1 - traer todos los productos de la base de datos
            const productos = req.body.Productos;
            console.log(["Productos: ", productos]);

            const IDs = productos.map((items) => items.id);

            // 2 - hacer la consulta a supabase
            let { data: articulos, error } = await supabaseAdmin
                .from("Articulos")
                .select("*")
                .in("id", IDs);

            if (error) {
                return res.status(400).json({ message: error.message });
            }

            console.log(["Articulos: ", articulos]);

            // 3 - Comprobar si hay stock
            let items = [];
            productos.forEach((produc) => {
                let art = articulos.find((item) => item.id == produc.id);

                if (art == undefined) {
                    return res.status(400).json({
                        message: `Error, el prducto: ${produc.titulo} no existe.`,
                    });
                }

                if (produc.cantidad > art.cantidad) {
                    return res.status(400).json({
                        message: `Error, No hay stock para el articulo: ${art.titulo}`,
                    });
                }

                let limitedDescription = art.descripcion.substring(0, 256); // Limita la descripción a 256 caracteres
                items.push({
                    id: art.id,
                    title: art.titulo,
                    description: limitedDescription,
                    picture_url: art.imagen,
                    category_id: art.categoriaId,
                    quantity: produc.cantidad, // productos del carrito
                    currency_id: "ARG",
                    unit_price: art.precio,
                });
            });
            console.log(["Items preference: ", items]);

            // Esta url debe ser con SSL xq mercado tira errror
            const URL = `${process.env.NEXT_PUBLIC_HOST_SSL}/home`;
            const URL_Notify = `${process.env.NEXT_PUBLIC_HOST_SSL}/api/notify`;

            const preference = {
                items: items,
                auto_return: "approved",
                back_urls: {
                    success: `${URL}`,
                    failure: `${URL}`,
                },
                notification_url: `${URL_Notify}`,
            };

            const response = await mercadopago.preferences.create(preference);

            console.log(response.body.init_point);
            res.status(200).send({ url: response.body.init_point });
        } catch (error) {
            console.log("Servidor Error");
            console.log(error);
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(400).json({ message: "Metodo no soportado" });
    }
}
