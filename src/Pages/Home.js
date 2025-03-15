import React from 'react'
import { useNavigate } from "react-router-dom";
import {Grid,Box,Paper} from "@mui/material";
import heroImage from "../Assets/restauranfood.jpg"
import Feature from '../Component/Feature';
 function Home() {
  const navigate = useNavigate();
function clickHandle(){
  navigate("/booking");
}
  return (
    <>
         <main>
         <Paper sx={{
          backgroundColor:"var(--green)",
          width:"100%",
          maxHeight:"450px",
          padding:0,
          margin:"auto",
          marginBottom:5
         }}>
            <Grid container spacing={0.5} sx={{
                width:"80%",
                margin:"auto",
                padding:2
            }}>
                <Grid item sm={12} md={6} id="title">
                        <h2 id="heroTitle">Little Lemon</h2>
                        <h3>Chicago</h3>
                         <p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                         </p>
                         <form>
                            <button onClick={clickHandle}> Reserve a Table</button>
                         </form>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Box sx={{
                      maxWidth:"400px",
                      maxHeight:"250px",
                      marginTop:2
                      
                    }}>
                      <img src={heroImage} alt="" id="heroImage"/>
                    </Box>
                </Grid>
            </Grid>  
           
        </Paper>  
        <Feature/>   
        </main>
    </>
  )
}
export default Home;

