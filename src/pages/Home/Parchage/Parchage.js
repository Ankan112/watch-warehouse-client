import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ParchageInfo from './ParchageInfo';

const Parchage = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])

    return (
        <Container>
            <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '20px', marginTop: '80px' }}>
                Your Watch
            </Typography>
            {
                products.map(product => <ParchageInfo
                    key={product._id}
                    product={product}
                ></ParchageInfo>)
            }
        </Container>
    );
};

export default Parchage;