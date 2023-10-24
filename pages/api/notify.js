import mercadopago from "mercadopago";
// import { createClient } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/supabase/servidor";
mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN,
});

export default async function notify(req, res) {
    const { query } = req;

    // const topic = query.topic || query.type;

    // console.log({ query, topic });

    // ✔✔✔ Topic es payment dos veces ❌

    //     ----------------- Query y topic ----------------
    // {query: { id: '12759430991', topic: 'merchant_order' }, topic: 'merchant_order'}

    // ----------------- Query y topic ----------------
    // { query: { id: '65649226477', topic: 'payment' }, topic: 'payment' }

    // ----------------- Query y topic ----------------
    // {query: { 'data.id': '65649226477', type: 'payment' }, topic: 'payment'}

    try {
        if (query.type === "payment") {
            const paymentId = query.id || query["data.id"];
            let payment = await mercadopago.payment.findById(Number(paymentId));
            let paymentStatus = payment.body.status;

            // console.log([payment, paymentStatus]);

            if (paymentStatus === "approved") {
                // 1 - Buscar los datos de el producto vendido
                const articulosarray = payment.body.additional_info.items;
                // console.log(articulosarray);

                // 2 - Usar supabaseAdmin para descontar el stock de los productos - SERVICE_ROLE_API_KEY
                // Supabase Funtions
                const { data, error } = await supabaseAdmin.rpc(
                    "actualizararticuloscontransydiferencia",
                    { articulosarray }
                );

                if (error) {
                    console.log(error);
                    res.send(error);
                } else {
                    console.log(data);
                    res.send("Todo Ok");
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
