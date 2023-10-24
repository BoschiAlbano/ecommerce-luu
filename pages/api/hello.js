// Opciones
// 1 - usar transacciones, funciones de supabase ✔✔✔
// 2 - usar transacciones, prisma y conectarme a supabase postgres sql 🤔🤔🤔

import { supabaseAdmin } from "@/supabase/servidor";

export default async function handler(req, res) {
    console.log("Entra...");

    return res.send("Api de pruebas");

    if (req.method === "GET") {
        try {
            const articulosarray = [
                { id: "dd8e4724-1988-4c48-882f-e02ccdaf5689", quantity: 1 },
                { id: "46d099b7-e22b-487f-85e2-0f965bbac298", quantity: 1 },
            ];

            const { data, error } = await supabaseAdmin.rpc(
                "actualizararticuloscontransydiferencia",
                { articulosarray }
            );

            if (error) {
                console.log("mensaje de error de supabase funcion");
                console.log(error);
                res.send(error);
            } else {
                console.log(data);
                res.send("Todo Ok");
            }
        } catch (error) {
            console.log("algo salio mal");
            console.log(error);
            res.send(error);
        }
    }
}
