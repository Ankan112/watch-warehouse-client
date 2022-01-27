import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../hooks/useAuth';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
const drawerWidth = 250;


const AllOrders = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://agile-castle-53031.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDeleteOrder = id => {
        const url = `https://agile-castle-53031.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete Success')
                }
                const remainingOrder = orders.filter(order => order._id !== id)
                setOrders(remainingOrder)
            })
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>

                {/* <NavLink to='/home' style={{ textDecoration: 'none', color: 'black' }}>Home</NavLink> */}

            </Toolbar>
            <Divider />
            <Box sx={{ marginY: '40px', textAlign: 'left' }}>


                {admin ?
                    <Box>
                        <NavLink to='/home' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-home"></i> Home</NavLink><br />
                        <NavLink to='/allorders' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-wrench"></i> Manage All Orders</NavLink><br />
                        <NavLink to='/newproduct' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-plus-circle"></i> Add a Product</NavLink><br />
                        <NavLink to='/admin' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-users"></i> Make Admin</NavLink><br />
                        <NavLink to='/manageproducts' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-eraser"></i> Manage Products</NavLink><br />

                    </Box>
                    :
                    <Box>
                        <NavLink to='/home' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-home"></i> Home</NavLink><br />
                        <NavLink to='/pay' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-money-bill-alt"></i> Pay Now</NavLink><br />
                        <NavLink to='/myorders' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-smile"></i> My Orders</NavLink><br />
                        <NavLink to='/review' style={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-comments"></i> Review</NavLink><br />

                    </Box>
                }
                <Button onClick={logOut} sx={{ textDecoration: 'none', color: 'black', marginLeft: '40px', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}><i class="fas fa-sign-out-alt"></i> Log Out</Button><br />

            </Box>
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
            <Divider />
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
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
                sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Manage All Orders
                </Typography>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell align="center">Customer Name</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">Delete Product</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        orders.map(order => <TableRow
                                            key={order._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {order.productName}
                                            </TableCell>
                                            <TableCell align="center">{order.customername}</TableCell>
                                            <TableCell align="center">{order.email}</TableCell>
                                            <TableCell align="center">{order.price}</TableCell>
                                            <TableCell align="center"><Button onClick={() => handleDeleteOrder(order._id)} variant='contained'>Delete</Button></TableCell>
                                        </TableRow>)
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
};

export default AllOrders;