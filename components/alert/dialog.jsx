import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { supabase } from "@/supabase/cliente";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen }) {
    async function sigOutUser() {
        const { error } = await supabase.auth.signOut();
        //navigation.push("/login")
    }

    const aceptar = () => {
        // alert("Cerrar sesion");
        sigOutUser();
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpen(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className="p-8 h-full w-full bg-[--Carrito-Color] gap-5 flex flex-col justify-center items-center">
                    <h1 className=" text-2xl font-semibold text-[--Texto-Color]">
                        {"Quieres Cerrar Sesion?"}
                    </h1>
                    <div className="gap-5 flex flex-row justify-center items-center">
                        <Button
                            className=" text-red-400"
                            onClick={() => setOpen(false)}
                        >
                            Cancelar
                        </Button>
                        <Button onClick={() => aceptar()}>Aceptar</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
