import React from 'react';
import './Explore.css'
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Explore = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <Box className="box">
            <Typography variant='h3' sx={{ fontWeight: 'bold', paddingY: '30px' }}>
                More Products
            </Typography>
            <Container>
                <Grid container spacing={3}>
                    {
                        products.map(product => <Grid item xs={12} md={4}
                            key={product._id}
                        >

                            <div class="container">
                                <div class="card">
                                    <div class="slide slide1">
                                        <div class="content">
                                            <div class="icon">
                                                <img style={{ width: '100%', height: '200px' }} class="fa fa-user-circle" src={product.img} alt="" />
                                                {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide slide2">
                                        <div class="content" >
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                                                {product.productName}
                                            </Typography>
                                            <p ><strike>Regular Price:${product.regularPrice}</strike></p>
                                            <p ><b>Price:${product.price}</b></p>
                                            <NavLink style={{ textDecoration: 'none' }} to={`/parchage/${product._id}`}> <Button sx={{ marginY: '20px' }} variant='contained'>Buy Now</Button></NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Grid>)
                    }


                </Grid>


            </Container>
        </Box>
    );
};


export default Explore;