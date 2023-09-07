import React from 'react';
import Lupa from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Header = ({ setOpenMenu, sigOutUser }) => {
    return (
        <header className=" bg-[--Secciones-Color] relative overflow-hidden h-full w-full">
            <div className="flex justify-center items-center h-full w-full">
                <div className="lg:hidden sm:absolute lg:relative flex left-0 px-2">
                    <button
                        className="text-[#000000b4]"
                        onClick={() => setOpenMenu((openMenu) => !openMenu)}
                    >
                        <MenuIcon sx={{ fontSize: 35 }} />
                    </button>
                </div>

                <h1 className="sm:flex hidden px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]">
                    Buscar
                </h1>

                <div className="flex flex-row justify-center items-center border-2 rounded-xl border-[#E8DEF8] p-1">
                    <input
                        className="bg-transparent w-full outline-none text-center font-extrabold text-[000000b4]"
                        type="text"
                    />
                    <Lupa className="cursor-pointer saltar"></Lupa>
                </div>

                <button
                    data-quantity="0"
                    className="btn-cart flex justify-center items-center "
                >
                    <svg
                        className="icon-cart"
                        viewBox="0 0 24.38 30.52"
                        height="30.52"
                        width="24.38"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Carrito</title>
                        <path
                            transform="translate(-3.62 -0.85)"
                            d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                        ></path>
                    </svg>
                    <span className="quantity"></span>
                </button>

                <div className="lg:flex hidden absolute right-0">
                    <Link
                        href={'/'}
                        className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]"
                    >
                        Home
                    </Link>

                    <button
                        className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]"
                        onClick={() => sigOutUser()}
                    >
                        Cerrar Sesion
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
