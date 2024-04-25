import Image from "next/image";
import React from "react";
import { Box, Typography } from "@mui/material";
import mira from './Assets/Images/mira.jpg';
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <Box className="min-h-screen grayscale-10 w-full flex items-center justify-center " style={{
        backgroundImage: `url(${mira.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}>
        <Box>
          <Typography className=" font-serif text-6xl sm-text-7xl md:text-9xl text-center text-white">Mira <br></br> Italian cuisine</Typography>
          <Box className="text-white md:flex justify-center gap-10 mt-5 grid justify-items-center ">
            <Box className="min-w-60 md:w-1/3 border-2 rounded-lg min-h-16  flex justify-center items-center bg-purple hover:bg-white hover:text-brown">
              <Link href="/Components/Menu"><Typography className="text-lg hover:text-xl hover:underline font-bold font-serif ">Check Menu</Typography></Link>
            </Box>
            <Box className=" min-w-60 w-1/2 md:w-1/3 border-2  rounded-lg min-h-16 flex justify-center items-center bg-purple hover:bg-white hover:text-brown ">
            <Link href="/Components/OrderOnline"><Typography className="text-lg hover:text-xl hover:underline font-bold font-serif">Order online</Typography></Link>
            </Box>
            <Box className="min-w-60 md:w-1/3 border-2 rounded-lg min-h-16 flex justify-center items-center bg-purple hover:bg-white hover:text-brown ">
            <Link href="/"><Typography className="text-lg hover:text-xl hover:underline font-bold font-serif ">Reservations</Typography></Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
