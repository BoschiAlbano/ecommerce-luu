import React, {useState} from 'react';
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
    const [datos, setDatos] = useState({email: "", password: "" });

    // voltiar tarjeta
    const [register, setRegister] = useState(false);
    
    // Contraseña
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const Onchange = (e) => {
        setDatos({...datos, [e.target.name]: e.target.value })
    }
    const OnSubmit = async (e) => {
        e.preventDefault()

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


    return (
        <Card className="py-5 px-10 relative overflow-visible sm:h-auto sm:w-auto h-full w-full"
        style={{
            background: "rgba(255,255,255,0.3)",
            overflow: "visible"
        }}>

            <Planta1 top={0} right={0} width={50}/>
            <Planta2 top={0} right={60} width={30}/>
            <Planta3 top={0} left={0} width={60}/>


            <CardContent className='flex flex-col justify-center items-center relative '>

                <div className="sm:w-[300px] py-5">
                    <img src="/assets/logo.png" alt="Descripcion del logo" />
                </div>

                <div className={`${register ? "card-inner" : "card-inner2"} relative`}>

                    <form className={`${register ? "hidden" : "flex"} flex-col gap-4 card-front`} onSubmit={(e) => {OnSubmit(e)}}>

                        <TextField id="input-with-sx" label="Email" variant="standard" type="text" name='email' placeholder='email' value={datos.email} onChange={(e) => Onchange(e)}/>
                        
                        {/* <TextField id="input-with-sx" label="Contraseña" variant="standard" type="password" name='password' placeholder='Password' value={datos.password} onChange={(e) => Onchange(e)}/> */}

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
                    
                        <p className="cursor-pointer hover:text-[#1976D2]" onClick={() => setRegister(true)}>Aún no estás Registrado? Hacelo ahora!!</p>

                    </form>
                    
                    <form className={`${register ? "flex": "hidden"} flex-col gap-4 card-back`}>
                        <button className="cursor-pointer" onClick={(e) => {
                            e.preventDefault()
                            console.log("Register");
                            }}>Register</button>

                        <Alert variant="outlined" severity="warning">
                            No esta imprentado aun
                        </Alert>

                        <p className="cursor-pointer" onClick={() => setRegister(false)}>Volver a Login</p>

                    </form>
                </div>

            </CardContent>
        </Card>
    );
}

export default Login;



/*
<div class="card">
  <div class="card-inner">
    <div class="card-front">
      <p>Front Side</p>
    </div>
    <div class="card-back">
      <p>Back Side</p>
    </div>
  </div>
</div>

 */