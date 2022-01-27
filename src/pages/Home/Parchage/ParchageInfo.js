import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

const ParchageInfo = ({ product }) => {
    const { productName, img, price } = product;
    const [order, setOrder] = useState({ productName, price })
    sessionStorage.setItem("email", order.email)
    const handleOrder = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order }
        newOrder[field] = value;
        setOrder(newOrder)
    }
    const handleNewOrder = e => {
        fetch('https://agile-castle-53031.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
        // .then(data)
        e.preventDefault();
        alert('Your Order Successful')
        e.target.reset();
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={img} alt='' />
            </Grid>
            <Grid item xs={12} md={6}>
                <form onSubmit={handleNewOrder}>
                    <TextField
                        sx={{ marginBottom: '20px', width: '300px' }}
                        label="Product Name"
                        onBlur={handleOrder}
                        defaultValue={productName}
                        name='productname'
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                        multiline
                    />
                    <TextField
                        sx={{ marginBottom: '20px', width: '300px' }}
                        label="Price"
                        onBlur={handleOrder}
                        name='price'
                        defaultValue={price}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        sx={{ marginBottom: '20px', width: '300px' }}
                        label="Your Name"
                        onBlur={handleOrder}
                        required
                        name='customername'
                        variant="standard"
                    />
                    <TextField
                        sx={{ marginBottom: '20px', width: '300px' }}
                        label="Your Email"
                        onBlur={handleOrder}
                        name='email'
                        // defaultValue={email}
                        // InputProps={{
                        //     readOnly: true,
                        // }}

                        variant="standard"
                    />
                    <TextField
                        sx={{ marginBottom: '20px', width: '300px' }}
                        label="Your Address"
                        onBlur={handleOrder}
                        name='address'
                        // defaultValue={email}
                        // InputProps={{
                        //     readOnly: true,
                        // }}
                        required
                        variant="standard"
                    />
                    <TextField
                        sx={{ marginBottom: '50px', width: '300px' }}
                        label="Your Phone"
                        onBlur={handleOrder}
                        name='phone'
                        type='number'
                        // defaultValue={email}
                        // InputProps={{
                        //     readOnly: true,
                        // }}
                        required
                        variant="standard"
                    />
                    <Button

                        sx={{ width: '300px', marginBottom: '50px' }}
                        variant='contained'
                        type='submit'>Confirm</Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default ParchageInfo;