import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-node-mongodb.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <Typography sx={{ fontWeight: 'bold', paddingY: '30px' }} variant='h3'>What Say Client About Us</Typography>
            <Grid container spacing={3}>
                {
                    reviews.map(review => <Grid
                        key={review._id}
                        item xs={6} md={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 250,
                                    minHeight: 250,
                                },
                            }}
                        >

                            <Paper elevation={3} >
                                <Typography sx={{ fontSize: '20px', paddingTop: '20px', fontWeight: 'bold' }}>
                                    {review.name}
                                </Typography>
                                <p>{review.comment}</p>
                                <Rating name="half-rating-read" defaultValue={review.rating} readOnly />

                            </Paper>
                        </Box>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Review;