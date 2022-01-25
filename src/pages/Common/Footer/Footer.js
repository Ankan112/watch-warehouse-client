import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../img/download.png'
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#272B2E', marginTop: '50px' }}>
            <Container>
                <Grid sx={{ color: 'white', paddingY: '10px' }} container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography variant='h6'><i class="fas fa-map-marker-alt"></i> Location</Typography>
                        <p>2/3 Road, Building No:07,<br /> Gulshan, Dhaka-1212</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ paddingBottom: '20px' }} variant='h6'>Social</Typography>
                        <i style={{ fontSize: '30px', marginRight: '10px' }} class="fab fa-facebook"></i>
                        <i style={{ fontSize: '30px', marginRight: '10px' }} class="fab fa-youtube"></i>
                        <i style={{ fontSize: '30px', marginRight: '10px' }} class="fab fa-twitter"></i>
                        <i style={{ fontSize: '30px', marginRight: '10px' }} class="fab fa-google"></i>
                        <i style={{ fontSize: '30px', marginRight: '10px' }} class="fab fa-linkedin"></i>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ paddingBottom: '20px' }} variant='h6'>We Accept</Typography>
                        <img src={img} alt="" />
                    </Grid>

                </Grid>
                <hr />
                <Typography sx={{ color: 'white', paddingY: '20px' }}>
                    Copyright &copy; 2022 Watch Warehouse
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;