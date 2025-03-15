import React from "react"
import Logo from "../Assets/logo.jpeg"
import {Grid,Paper} from "@mui/material"
export default function Navbar(){
    return(
        <>
       <Paper elevation={4}
       sx={{
        padding:4,
        width:"100%",
        margin:"auto"

       }}
       >
        <Grid container spacing={0.5} sx={{
            width:"80%",
            margin:"auto"
        }}>
            <Grid item sm={12} md={4}>
                <img src={Logo} alt="logo" id="logo"/>
            </Grid> 
            <Grid item sm={12} md={8}>
             <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Menu</a></li>
                     <li><a href="#">Testimonials</a></li>
                     <li><a href="#">Order Online</a></li>
                     <li><a href="#">Login</a></li>
           </ul>
          </Grid> 
        </Grid>
       </Paper>
          
         
     
        </>
    )
}