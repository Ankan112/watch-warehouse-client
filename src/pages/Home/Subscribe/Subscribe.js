import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <Container>
                <Grid sx={{ paddingTop: '100px' }} container spacing={2}>
                    <Grid sx={{ position: 'relative' }} item xs={12} md={6}>
                        <input className='input' type="text" placeholder='Enter Your Email' /><Button variant='contained' className='btn'>Subscribe Now</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ color: 'white' }} variant='h4'>
                            Subscribe now for <br /> latest news.
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Subscribe;