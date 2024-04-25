import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import menu from '../../Assets/APIs/Menu.json'
import Image from "next/image";

export default function Menue() {
    return (
        <React.Fragment>
            <Box className="min-h-screen  justify-center text-center pt-5 bg-white ">
                <Typography className="uppercase text-purple font-serif text-4xl md:text-6xl ">Menue</Typography>
                <Box className="bg-purple min-h-screen mt-5">
                    {
                        menu.map((dish: any, index: number) => {
                            return (
                                <Box key={index}>
                                    <Typography className=" font-serif text-3xl  md:text-4xl pt-6 mb-4 text-brown underline">{dish.category}</Typography>
                                    <Box className=" flex justify-center mb-4">
                                        <Typography className=" w-2/3 font-serif text-white text-semibold text-md md:text-lg text-center">{dish.description}</Typography>
                                    </Box>
                                    <Box key={index} className=" flex justify-center">
                                        <Box className=" grid grid-cols-1  md:grid-cols-2 gap-4 w-2/3">
                                            {
                                                dish.dishes.map((item: any, index: number) => {
                                                    return (
                                                        <>
                                                            <Box key={index} className="flex-col justify-center align-center content-center p-2 mb-6">
                                                                <Image src={item.image} alt=""  width={500} height={500}></Image>
                                                                <Typography className=" mt-3 text-brown underline text-xl text-bold">{item.title}</Typography>
                                                                <Typography className="mt-2 text-white text-md">{item.dishDes}</Typography>
                                                            </Box>
                                                        </>
                                                    )
                                                })
                                            }
                                        </Box>
                                    </Box>
                                    <Divider className=" bg-white"/>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </React.Fragment>
    )
}