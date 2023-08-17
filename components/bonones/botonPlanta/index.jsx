import React from 'react';
import { Button } from '@mui/material';

const BotonPlantas = ({Texto}) => {

    return (
        <>
            <Button className="p-3 bg-[#1976D2]" variant="contained" type="submit">
                {Texto}
            </Button>
        </>
    );
}

export default BotonPlantas;


/*
            <button className="bg-rose-100 rounded-lg p-3 text-lg font-[Roboto]">{Texto}
                </button>
*/