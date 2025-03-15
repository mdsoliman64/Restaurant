import React from "react";
import "../Component/Footer.css"
import { Grid,Box ,Paper,Typography } from "@mui/material";
import LogoWhite from "../Assets/footer-logo.4470f9c9e815da98dbb3.png"
export default function Footer(){
return(
    <>
       <Paper elevation={4} sx={{
        backgroundColor:"var(--green)",
        padding:4,
        width:"100%"
       }}>
        <Grid container spacing={0.4}
        sx={{
            width:"80%",
            margin:"auto"
        }}
        >
            <Grid item sm={12} md={4} sx={{
                textAlign:"center"
            }}>
                    <img src={LogoWhite} alt="footer logo"/>
            </Grid>
            <Grid item sm={12} md={4}>
            <Typography variant="h4" component="h2">
                Navigation
            </Typography>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Order </a></li>
                        <li><a href="#">Login </a></li>
                    </ul>
            </Grid>
            <Grid item sm={12} md={4}>
                <Typography variant="h4" component="h2">
                    Contact
                </Typography>
                <Typography variant="p" component="p">
                2395 Maldove Way,
Chicago Illinois
                </Typography>
            </Grid>

        </Grid>
       </Paper>
    </>
)
}