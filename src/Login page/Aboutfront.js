import React from "react";
import Box from '@mui/material/Box';

function About(){
    return(
        <Box
        noValidate sx={{
          marginTop:5,
          display: 'flex',
          flexDirection: 'column',
          textAlign:'center',
          height:550,
               boxShadow:10,
               marginRight:5,
               marginLeft:5,
               marginBottom:5,
        }}
      >
         <p>
      <strong>Wanted Drivers</strong> is a web based and mobile app start-up which is growing the means of employment
      for Blue-Collar and
      entry level jobs for all the Drivers. By smoothly and continuously connecting with Blue-Collar and entry level
      unemployed and looking for Driver Jobs through our website and mobile app, we are simplifying recruiters and
      employers with ease of hiring process and replacing the traditional way.
    </p>
    <strong>Our Vision:</strong>
    <p>
      Wanted Drivers, Aim is to create meaningful employment to the all Drivers. We want to build the gap between
      employers and employees of blue collared Drivers. But also to sort out this informal job sector to a next level.
      We dream of creating competitive income for all the Drivers, facilitate new start-ups for blue collared employees
      and digitalisation of their recruitment and placement processes. We aim to ‘build a process where the untapped
      largest potential sectors of blue collared drivers get good recognition and payment from employers.
    </p>
        </Box>
    )
}
export default About;