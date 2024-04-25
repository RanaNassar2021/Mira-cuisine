'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Drawer } from "@mui/material";
import fb from '../../Assets/Images/fb.png';
import insta from '../../Assets/Images/insta.png';
import tiktok from '../../Assets/Images/tiktok.png';
import twitter from '../../Assets/Images/tw.png';
import youtube from '../../Assets/Images/youtube.png';
import logo from '../../Assets/Images/logo.png';
import SideBar from "../Drawer/page";

export default function Header() {
   
    return (
        <React.Fragment>
            <Box className="flex gap-6  min-h-10 items-center ps-3 bg-purple">
                <Link href="/"><Image src={fb} alt="" className="w-8"></Image></Link>
                <Link href="/"><Image src={insta} alt="" className="w-8"></Image></Link>
                <Link href="/"><Image src={tiktok} alt="" className="w-8"></Image></Link>
                <Link href="/"><Image src={twitter} alt="" className="w-8"></Image></Link>
                <Link href="/"><Image src={youtube} alt="" className="w-8"></Image></Link>
            </Box>
            <Box className="flex p-3 bg-white items-center justify-between">
                <Box className=" w-20  items-center"><Link href="/"><Image src={logo} alt=""></Image></Link> </Box>
                <Box className=" hidden  md:flex justify-evenly w-full text-lg ">
                    <Link href="/Components/Menu"><Typography className="text-lg font-medium hover:text-purple hover:underline font-serif">Menu</Typography></Link>
                    <Link href="/Components/OrderOnline"><Typography className="text-lg font-medium hover:text-purple hover:underline font-serif">Order online</Typography></Link>
                    <Link href="/Components/Reservation"><Typography className="text-lg font-medium hover:text-purple hover:underline font-serif">Contact & Reserveration </Typography></Link>
                    <Link href="/Components/OurStory"><Typography className="text-lg font-medium hover:text-purple hover:underline font-serif">Our story</Typography></Link>
                </Box>
                <Box className="flex md:hidden" >
                    <SideBar/>
                </Box>
            </Box>
        </React.Fragment>
    )
}