import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import Nav from 'react-bootstrap/Nav';
import {BsCart2} from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Box,
        List,
        ListItem,
        ListItemButton,
        ListItemIcon,
        Drawer 
        } from '@mui/material'


export default function Navbar() {
    const [openMenu,setOpenMenu] = useState(false)
    const menuOption = [
        {
            text : 'Home',
            icon : <HomeIcon />
        },
        {
            text : 'About',
            icon : <InfoIcon />
        },        {
            text : 'Testimonials',
            icon : <CommentRoundedIcon />
        },        {
            text : 'Contact',
            icon : <PhoneRoundedIcon />
        },        {
            text : 'Cart',
            icon : <ShoppingCartRoundedIcon />
        },
    ]
  return (
    <div>
        <nav>
            <div className='nav-logo-container'>
                 <img src={logo} alt="" />
            </div>
            <div className='navbar-links-container'>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/testmonial">Testimonials</Nav.Link>
                <Nav.Link href="/work">Contact</Nav.Link>
                <a href=""><BsCart2 className='navbar-cart-icon' /></a>
                <button className='primary-button'>BookNow</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={()=>setOpenMenu(true)} ></HiOutlineBars3>
            </div>
            <Drawer open={openMenu} onClose={()=>setOpenMenu(false)} anchor="right">
            <Box sx={{width:'250px'}} role='presentation'>
                <List>
                    {
                        menuOption.map((items)=>(
                            <ListItem key={items.text}>
                                <ListItemButton>
                                    <ListItemIcon>{items.icon}</ListItemIcon>
                                    <ListItemIcon>{items.text}</ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        )
                        )
                    }
                </List>
            </Box>
            </Drawer>

        </nav>
    </div>
  )
}