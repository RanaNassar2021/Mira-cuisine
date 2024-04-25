import React from "react";
import { Box, Typography } from "@mui/material";
import booking from '../../../../public/Images/reservation.jpg';
import { Booking } from "@/components/component/booking";
import { ContactUs } from "@/components/component/contact-us";
import maps from '../../../../public/Images/Capture.jpg';
import Image from "next/image";

export default function Reservation() {
    return (
        <React.Fragment>
            <Box className="md:min-h-screen pb-10 " style={{
                backgroundImage: `url(${booking.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
            }}>
                <Box className="flex justify-center md:justify-end  pt-10 md:pe-20">
                    <Box className="w-2/3 md:w-1/3">
                        <Booking />
                    </Box>
                </Box>
            </Box>
            <Box className="flex justify-center bg-white">
                <Box className="bg-brown grid grid-cols-2 w-full md:w-1/2">
                    <Box className="place-content-center">
                        <Typography className="  md:pt-5 text-center uppercase font-serif text-base md:text-xl text-purple font-semibold underline">Our location</Typography>
                        <Typography className="p-2 md:p-5 text-center text-purple text-sm md:text-base">22 El-Horeya Rd, Al Mesallah Sharq, Al Attarin, Alexandria Governorate.
                            Monday - Friday 12pm - 11pm
                            Saturday 11am - 12pm
                            sunday 12pm - 12am</Typography>
                    </Box>
                    <Box>
                        <Image src={maps} alt="" width={400} height={200}></Image>
                    </Box>
                </Box>

            </Box>
            <Box className="bg-white text-center pt-4 ">
                <Typography className="font-serif text-purple uppercase text-4xl pb-4">contact us</Typography>
                <Box className="flex justify-center ">
                <ContactUs />
                </Box>
             
            </Box>
        </React.Fragment>
    )
}