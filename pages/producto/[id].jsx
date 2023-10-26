import React, { useEffect, useState } from "react";
import ProductoImg from "@/components/swiperjs/ProdutoVista";
import Menu from "@/components/menu";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";
import { supabase } from "@/supabase/cliente";

// import { Productos } from '@/components/DataBaseEjemplo';

const Producto = () => {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});

    useEffect(() => {
        setLoading(true);

        async function Api_Imagenes_Articulo(id) {
            try {
                let { data: Articulos, error } = await supabase
                    .from("Articulos")
                    .select(
                        `
                *,
                Imagenes (
                    *
                )`
                    )
                    .eq("id", id);

                if (error) {
                    console.log(error);
                    return;
                }
                console.log(Articulos);

                setProducto(Articulos);
            } catch (error) {
                console.log(error);
            }
        }

        Api_Imagenes_Articulo(id);

        setLoading(false);
    }, [id]);

    return (
        <Menu title="Del Interior - Producto">
            <div className="pt-24 h-full sm:w-[85%] w-[100%]">
                {loading ? (
                    <Spinner />
                ) : (
                    <div className=" min-h-screen h-full bg-[--Secciones-Color]">
                        <ProductoImg producto={producto[0]} />
                    </div>
                )}
            </div>
        </Menu>
    );
};

export default Producto;
