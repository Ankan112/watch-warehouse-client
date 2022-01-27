import React, { useState } from 'react';
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
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const drawerWidth = 250;


const Review = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [reviewInfo, setReviewInfo] = useState({})
    console.log(reviewInfo)
    const handleReviewBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newReviewInfo = { ...reviewInfo }
        newReviewInfo[field] = value;
        setReviewInfo(newReviewInfo)
    }
    const handleReview = e => {
        fetch('https://agile-castle-53031.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
        // .then(data => {
        //     if (data.insertedId) {

        //     }
        // })
        alert('Comment successful')
        e.target.reset();
        e.preventDefault()

    }
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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    Give Feedback
                </Typography>


                <form onSubmit={handleReview}>
                    <TextField
                        sx={{ width: '30%', marginTop: '20px' }}
                        label="Your Name"
                        required
                        onBlur={handleReviewBlur}
                        type='name'
                        name='name'
                        variant="outlined" /><br />
                    <TextField
                        sx={{ width: '30%', marginTop: '20px' }}
                        label="Comment"
                        required
                        onBlur={handleReviewBlur}
                        name='comment'
                        multiline
                    /><br />
                    {/* <TextField
                        sx={{ width: '30%', marginTop: '20px' }}
                        id="quantity"
                        label="Rating"
                        required
                        name='number'
                        type="number"
                        min="1" max="5"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                    /><br /> */}

                    <select
                        style={{ width: '30%', marginTop: '20px', padding: '20px' }}
                        id="cars"
                        onBlur={handleReviewBlur}
                        name="rating"
                        form="carform">

                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br />
                    <Button sx={{ width: '30%', marginTop: '20px' }} type='submit' variant="contained">Review</Button>
                </form>
            </Box>
        </Box>
    );
};

export default Review;