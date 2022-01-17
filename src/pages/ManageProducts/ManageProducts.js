import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import './ManageProducts.css'
import { useEffect, useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
const drawerWidth = 250;


const ManageProducts = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    const handleDeleteProduct = id => {

        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete Product Success')
                }
                const remainingProducts = products.filter(product => product._id !== id);
                setproducts(remainingProducts)
            })
    }
    const drawer = (
        <div>
            <Toolbar>

                {/* <NavLink to='/home' style={{ textDecoration: 'none', color: 'black' }}>Home</NavLink> */}

            </Toolbar>
            <Divider />
            <Box sx={{ marginY: '40px', textAlign: 'left' }}>
                <NavLink to='/home' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-home"></i> Home</NavLink><br />
                <NavLink to='/pay' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-money-bill-alt"></i> Pay Now</NavLink><br />
                <NavLink to='/myorders' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-smile"></i> My Orders</NavLink><br />
                <NavLink to='/review' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-comments"></i> Review</NavLink><br />
                <NavLink to='/home' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-sign-out-alt"></i> Log Out</NavLink><br />
                <NavLink to='/allorders' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-wrench"></i> Manage All Orders</NavLink><br />
                <NavLink to='/newproduct' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-plus-circle"></i> Add a Product</NavLink><br />
                <NavLink to='/admin' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-users"></i> Make Admin</NavLink><br />
                <NavLink to='/manageproducts' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-eraser"></i> Manage Products</NavLink><br />


            </Box>

            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    height: '65px'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Your Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                    }}
                >

                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >

                    {drawer}

                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box className="box">
                    <Typography variant='h3' sx={{ fontWeight: 'bold', paddingY: '30px' }}>
                        Delete Product
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
                                                    {/* <p ><strike>Regular Price:${product.regularPrice}</strike></p> */}
                                                    <p ><b>Price:${product.price}</b></p>
                                                    <Button sx={{ marginY: '20px' }}
                                                        onClick={() => handleDeleteProduct(product._id)}
                                                        variant='contained'>Delete Product</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Grid>)
                            }


                        </Grid>


                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default ManageProducts;