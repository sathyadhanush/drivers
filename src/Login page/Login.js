import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { Button } from "@material-ui/core";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextInput from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css';
import { Url} from '../constants/Global';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({

  drawer: {
      marginLeft: theme.spacing(150),
      marginTop: theme.spacing(30),
    },
  }));

  const SignIn = () => {
    const navigate = useNavigate();
  const classes = useStyles();
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")

  async function SaveUser()
  {
   
    let data={email,password}
    console.warn(data)   
   let result=await fetch(Url+"/v1/user/login",{
      method:'post',
      body:JSON.stringify(data),  
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
      result=await result.json()
      console.log(result.payload);
      console.log(result.payload.uuid);
      localStorage.setItem("UUID",result.payload.uuid)
      navigate('/home')

  } 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box
    noValidate sx={{
      backgroundSize: 'cover',  
      marginTop: 5,
      height:900,
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center' ,
           boxShadow:12,
           marginRight: theme.spacing(4),
           marginLeft: theme.spacing(4),
    }}
  >
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
       
         
          <Box component="form" onSubmit={handleSubmit}  
          noValidate sx={{ 
             marginTop: 20,
              display: 'flex',
              width:500,
              height:450,
              flexDirection: 'column',
              alignItems:'center' ,
              boxShadow: 10,
            }}>
               <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login Driver App
          </Typography>
            <TextInput
           type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}
            name="email_id"
              margin="normal"
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextInput
            type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} 
             name="password"
              margin="normal"
              label="Password"
              id="password"
              autoComplete="current-password"
            /><br/>
        
            <Button
            onClick={SaveUser} 
              type="submit"
              variant="contained" 
             
            >
              Login
            </Button>
            </Box>
       </Container>
      
      <ul className={classes.drawer} >

 <a style={{ color: 'black', textDecoration: 'inherit'}} href='/aboutfront'> ABOUT     </a>
 <a style={{ color: 'black', textDecoration: 'inherit'}} href='/policy'>POLICY  </a>

<a style={{ color: 'black', textDecoration: 'inherit'}} href='/termsandcondition'>  TERMSANDCONDITIONS </a>
      
      
      </ul>
    </ThemeProvider>
    </Box>
  );
}
export default SignIn;