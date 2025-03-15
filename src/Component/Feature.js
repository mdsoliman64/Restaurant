import React from 'react'
import {Grid,Paper,Box,Typography, Button} from "@mui/material";
import SpecProducts from '../Assets/SpecPoducts';

function Feature() {
  return (
    <>
        <Paper sx={{
          backgroundColor:"#fff",
          width:"100%",
          
          padding:0,
          
         }}>
            <Grid container spacing={0.5} sx={{
                width:"80%",
                margin:"auto",
                padding:2,
                marginTop:20
            }}>
                <Grid item sm={12} md={8}>
                    <h2>This weeks specials!</h2>
                </Grid>

                <Grid item sm={12} md={4}>
                    <form>
                        <button onClick="location.href='/booking'" >
                        Online Menu
                        </button>
                    </form>
                </Grid>
            </Grid>

            <Grid container spacing={0.2} sx={{
                width:"80%",
                margin:"auto",
                padding:4,
               
            }}>
               {SpecProducts.map((item,key)=>{
                return(
                    <Grid item sm={12} md={4}>
                     <Paper
                     elevation={4}
                     sx={{
                        width:"320px",
                        color:"#000",
                        backgroundColor:"var(--grey)"
                       
                     }}
                     >
                        <img src={item.img} alt={item.title} id="cardImage"/>
                      <Box
                      sx={{
                        padding:2,
                        color:"#000"
                      }}
                      >
                      <Typography variant="h4" component="h2"
                      sx={{
                        color:"#022",
                        fontWeight:"600",

                      }}
                      >
                                {item.title}
                      </Typography>
                      <Typography variant="h5" component="h2">
                                {item.price}
                      </Typography>
                      <Typography variant="body" component="body">
                                    {item.description}
                      </Typography>

                      <Button 
                     variant="contained"
                      sx={{
                        backgroundColor:"var(--yellow) ",
                        color:"var(--green)",
                        fontWeight:"500",
                        transition: "all 0.3s ease",
                        marginTop:3,
                        "&:hover":{
                            backgroundColor:"var(--green)",
                            color:"var(--yellow)",
                            fontSize:"18px"
                        }
                        
                      }}
                      >Order Now</Button>
                       
                        
                      </Box>
                        
                     </Paper>
                    </Grid>
                )
               })}
            </Grid>
        </Paper>
    </>
  )
}

export default Feature