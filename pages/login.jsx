import React, { useState, useEffect } from 'react';
import { supabase } from '@/supabase/cliente';
import { Auth } from '@supabase/auth-ui-react';
import { useRouter } from 'next/router';
import { ThemeSupa } from '@supabase/auth-ui-shared';


import { Container } from '@mui/material';
import Componente_Login from '@/components/login';

const Login = () => {

    const navigation = useRouter();

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (session) {
                navigation.push("/")
            }
        })
    }, []);

    return (


        <div className="w-full h-screen grid justify-center items-center ">
            
            {/* <section className="w-[300px]">
                <Auth
                    supabaseClient={supabase}
                    appearance={{theme: ThemeSupa}}
                    theme={"light"}
                    providers={['google','github']}
                />
            </section> */}

            <Componente_Login/>


        </div>
    );
}

export default Login;
