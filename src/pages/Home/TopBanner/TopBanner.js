import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div className='topBanner'>
            <Container sx={{ textAlign: 'left', color: 'rgba(255, 255, 255, 0.939)', paddingTop: '120px' }}>
                <Typography variant='h2' sx={{ fontWeight: 'bold' }}>Watch Warehouse</Typography>
                <Typography sx={{ width: '380px', paddingTop: '20px', color: 'rgba(233, 233, 233, 0.871)' }}>Watches also allow you to know the time in special occasions and situations. Mobile phones may not be the best choice for soldiers, pilots or divers to take care of their time. That is why, it is more convenient to wear a watch. Being in control of your time is crucial this hectic pace of modern life.
                </Typography>
                <NavLink style={{ textDecoration: 'none' }} to='/explore'><Button variant='contained' sx={{ marginTop: '30px' }}>Explore</Button></NavLink>
            </Container>
        </div>
    );
};

export default TopBanner;