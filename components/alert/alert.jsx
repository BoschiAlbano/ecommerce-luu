import React from 'react';
import { Alert, Snackbar, Slide } from '@mui/material';

const AlertComp = ({ state, setState }) => {
    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
            TransitionComponent={TransitionLeft}
            autoHideDuration={3000}
        >
            <Alert
                onClose={handleClose}
                severity={state.severity}
                sx={{ width: '100%' }}
            >
                {state.msj}
            </Alert>
        </Snackbar>
    );
};

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

export default AlertComp;

/*
        <div className="absolute top-0 right-0 w-full flex justify-center items-center z-[200]">
            <Alert
                className={`w-full mx-5 mt-1 animacion-alerta-Open`}
                severity="error"
            >
                {msj}{' '}
            </Alert>
        </div>
*/
