import React, { useEffect } from 'react';
import { supabase } from '@/supabase/cliente';
import { useRouter } from 'next/router';
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


        <div className="h-screen w-screen grid justify-items-center items-center">

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
