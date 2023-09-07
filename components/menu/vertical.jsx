import React from 'react';
import Categorias from './categorias';

import Link from 'next/link';

import Planta3 from '../plantas/planta3';
import Planta1 from '../plantas/planta1';
import Planta2 from '../plantas/planta2';

const Vertical = ({ datos }) => {
    return (
        <div className=" hidden rounded-xl lg:flex flex-col justify-between items-center bg-[--Secciones-Color] relative">
            <Categorias datos={datos} />

            <Planta2 width={15} top={0} left={10} hover={true} />

            <Planta1 width={15} top={0} left={50} hover={true} />

            <Planta3 width={20} top={0} right={0} hover={true} />

            {/* Iconos Redes */}
            <section className="mt-2 p-1 w-full rounded-xl flex flex-row justify-evenly items-center">
                <Link
                    className="lg:w-[12%] min-w-[35px] saltar opacity-[0.7]"
                    href={'/facebook'}
                >
                    <img src="/assets/facebook.png" alt="Logo de Faceboock" />
                </Link>

                <Link
                    className="lg:w-[12%] min-w-[35px] saltar opacity-[0.7]"
                    href={'/facebook'}
                >
                    <img src="/assets/instagram.png" alt="Logo de Faceboock" />
                </Link>

                <Link
                    className="lg:w-[12%] min-w-[35px] saltar opacity-[0.7]"
                    href={'/facebook'}
                >
                    <img src="/assets/whatsapp.png" alt="Logo de Faceboock" />
                </Link>
            </section>
        </div>
    );
};

export default Vertical;
