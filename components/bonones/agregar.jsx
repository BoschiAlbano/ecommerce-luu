import React from 'react';
import IconCarrito from '@mui/icons-material/ShoppingCart';

const Agregar = () => {
    return (
        <button
            type="button"
            className={`Degradado w-full h-[3rem] p-4 mb-4 flex items-center group overflow-hidden rounded text-white justify-center`}
        >
            <div className="text-sm ml-4 font-medium font-[roboto] transition-all sm:group-hover:mr-2 mr-2 sm:mr-0">
                Agregar
            </div>

            <div className=" sm:translate-x-[8rem]  transition-transform duration-300 sm:group-hover:-translate-x-0 -translate-x-0 sm:group-hover:mr-2 mr-2 ">
                <IconCarrito className="h-5 w-5" />
            </div>
        </button>
    );
};

export default Agregar;
