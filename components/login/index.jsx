import React, {useState, useEffect} from 'react';
import { supabase } from '@/supabase/cliente';

import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';

import BotonPlantas from '../bonones/botonPlanta';

import Planta1 from '../plantas/planta1';
import Planta2 from '../plantas/planta2';
import Planta3 from '../plantas/planta3';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Alert from '@mui/material/Alert';

const Login = () => {

    //Datos Formilario Login
    const [datos, setDatos] = useState({email: "", password: "", password2: ""});

    // Errores Mensajes
    const [error, setError] = useState({mostrar: false, msj: ""});

    // voltiar tarjeta
    const [register, setRegister] = useState(false);
    
    // Contraseña
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    // Contraseña2
    const [showPassword2, setShowPassword2] = useState(false);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword2 = (event) => {
      event.preventDefault();
    };


    useEffect(() => {
        setDatos({email: "", password: "", password2: "" })
    }, [register]);

    const Onchange = (e) => {
        setDatos({...datos, [e.target.name]: e.target.value })
    }
    const OnSubmitLogin = async (e) => {
        e.preventDefault()

        // verificar campos Vacios
        if (VerificarCampos()) {return}

        try {

            const { data, error } = await supabase.auth.signInWithPassword({
                email: datos.email,
                password: datos.password
            })

            if(error){
                console.log(error)
                return;
            }

            console.log(data.user)

        } catch (error) {
            // Manejar errores generales
            console.log(error)
        }

    }
    const OnSubmitRegister = async (e) => {
        e.preventDefault()

        // verificar campos Vacios
        if (VerificarCampos()) {return}
        // comprobar si las contraseñas son iguales
        if (datos.password != datos.password2) {

            setError({mostrar: true, msj: "Las Contraseñas no son iguales"})

            setTimeout(() => {
                setError({mostrar: false, msj: ""})
            }, 3000);

            return;
        }

        try {
            
            const { data, error } = await supabase.auth.signUp(
                {
                email: datos.email,
                password: datos.password,
                }
            )

            if(error){
                console.log(error)
                return;
            }


            // Todo OK, limpiar Campos
            console.log(data.user)

            setError({mostrar: true, msj: "Registrado con Exito, Verifica tú Email"})

            setTimeout(() => {
                setError({mostrar: false, msj: ""})
                setRegister(!register)
            }, 3000);


        } catch (error) {
            // Manejar errores generales
            console.log(error)
        }

    }
    const Github = async () => {
        
        try {

            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'github'
            })

            if(error){
                console.log(error)
                return;
            }

            console.log(data.user)

        } catch (error) {
            // Manejar errores generales
            console.log(error)
        }

    }
    const Google = async () => {
        
        try {

            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'Google'
            })

            if(error){
                console.log(error)
                return;
            }

            console.log(data.user)

        } catch (error) {
            // Manejar errores generales
            console.log(error)
        }

    }


    const VerificarCampos = () => {
        if (datos.password.length === 0 || datos.email.length === 0) {
            setError({mostrar: true, msj: "Hay campos vacios"})

            setTimeout(() => {
                setError({mostrar: false, msj: ""})
            }, 3000);

            return true;
        }

        return false
    }

    return (
        <Card className="py-5 px-10 sm:overflow-visible overflow-hidden sm:h-auto sm:w-auto h-full w-full"
        style={{
            background: "rgba(255,255,255,0.3)",
            position: "relative",
        }}>

            <div className="absolute top-0 right-0 w-full flex justify-center items-center"> 
                {error.mostrar 
                ? <Alert className="w-full mx-5 mt-1 animacion-alerta" severity="error">{error.msj} </Alert> 
                : null}
            </div>


            <Planta1 top={0} right={0} width={50}/>
            <Planta2 top={0} right={60} width={30}/>
            <Planta3 top={0} left={0} width={60}/>


            <CardContent className='flex flex-col justify-center items-center relative '>

                <div className=" py-5 sm:w-[20rem]">
                    <img src="/assets/Logo.png" alt="Descripcion del logo" />
                </div>

                <div className={`${register ? "card-inner" : "card-inner2"} relative w-full px-5`}>

                    {/* Login */}
                    <form className={`${register ? "hidden" : "flex"} flex-col gap-4 card-front`} onSubmit={(e) => {OnSubmitLogin(e)}}>

                        <TextField id="input-with-sx" label="Email" variant="standard" type="text" name='email' placeholder='email' value={datos.email} onChange={(e) => Onchange(e)}/>
                        
                        <FormControl variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={datos.password}
                                onChange={(e) => Onchange(e)}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>

                        <BotonPlantas Texto={"Ingresar"}></BotonPlantas>

                        <Stack direction="column" spacing={2}>

                            <Button variant="outlined" startIcon={<GoogleIcon />} onClick={() => Google()}>
                                Google
                            </Button>
                            <Button variant="outlined" startIcon={<GitHubIcon />} onClick={() => Github()}>
                                GitHub
                            </Button>

                        </Stack>
                    
                        <p className="cursor-pointer hover:text-[#1976D2] text-center" onClick={() => setRegister(true)}>Aún no estás Registrado? Hacelo ahora!!</p>

                    </form>
                    
                    {/* Register */}
                    <form className={`${register ? "flex": "hidden"} flex-col gap-4 card-back`} onSubmit={(e) => {OnSubmitRegister(e)}}>
                        <TextField id="input-with-sx" label="Email" variant="standard" type="text" name='email' placeholder='email' value={datos.email} onChange={(e) => Onchange(e)}/>

                        <FormControl variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={datos.password}
                                onChange={(e) => Onchange(e)}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormControl variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Repetir Contraseña</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword2 ? 'text' : 'password'}
                                name='password2'
                                value={datos.password2}
                                onChange={(e) => Onchange(e)}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword2}
                                    onMouseDown={handleMouseDownPassword2}
                                    >
                                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>

                        <BotonPlantas Texto={"Registrarse"}></BotonPlantas>


                        <p className="cursor-pointer hover:text-[#1976D2] text-center" onClick={() => setRegister(false)}>Volver a Login</p>

                    </form>

                </div>

            </CardContent>
        </Card>
    );
}

export default Login;