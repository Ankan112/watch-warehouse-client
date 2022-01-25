import React from 'react';
import notFound from "../../img/404.jpg"
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
const NotFound = () => {
    return (
        <div>
            <img src={notFound} style={{ width: '40%' }} alt="" /> <br />
            <NavLink to='/home' style={{ textDecoration: 'none' }}>
                <Button variant="contained">Go Home</Button>
            </NavLink>
        </div>
    );
};

export default NotFound;