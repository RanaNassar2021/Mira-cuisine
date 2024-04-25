import React from "react";
import { Box, Typography } from "@mui/material";
import ourStory from '../../../../public/Images/ourstory.jpg';

export default function OurStory() {
    return (
        <React.Fragment>
            <Box className="text-center">
                <Typography className="uppercase text-purple text-5xl md:text-6xl font-serif bg-white pt-5 pb-5" >Our Story</Typography>
            </Box>
            <Box className="min-h-screen relative" style={{
                backgroundImage: `url(${ourStory.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
            }}>
                <Box className="w-2/3 md:w-1/3 bg-white rounded-lg p-4 absolute top-14 right-14">
                    <Typography className="text-purple font-serif ">
                        When the first Mira Italian cuisine restaurant opened in Fayetteville, North Carolina, in 2020, our Corporation took a confident first step in the restaurant business, beginning a tradition of offering guests real, wholesome foods in a family-friendly atmosphere and at a great value. Mira's Italian cuisine is honored to be called America’s #1 buffet and grill.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat enim pulvinar lacus accumsan pretium. Vivamus gravida elit eu quam sodales, 
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
}