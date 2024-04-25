'use client';
import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import menu from '../../Assets/APIs/Menu.json'
import Image from "next/image";
import Link from "next/link";
import AlertDialog from "../OrderNow/page";
import { useState } from "react";

export default function Order() {
    const [dishTitle,setDishTitle] = useState("");
    const [dishdetails,setDishDetails] = useState("");
    const [dishImage,setDishImage]=useState("");

    return (
        <React.Fragment>
            <Box className="min-h-screen  justify-center  pt-5 bg-white ">
                <Typography className="uppercase text-purple text-center font-serif text-4xl md:text-6xl ">order online</Typography>
                <Box className="bg-purple min-h-screen mt-5">
                    {
                        menu.map((dish: any, index: number) => {
                            return (
                                <Box key={index}>
                                   
                                    <Box className="flex justify-center">
                                    <Box className=" w-2/3 mb-4">
                                    <Typography className=" font-serif text-3xl  md:text-4xl pt-6 mb-4 text-brown underline">{dish.category}</Typography>
                                        <Typography className=" w-full md:w-2/3 font-serif text-white text-semibold text-md md:text-lg ">{dish.description}</Typography>
                                    </Box>
                                    </Box>
                                    <Box key={index} className=" flex justify-center">
                                        <Box className=" grid grid-cols-1  md:grid-cols-2 gap-4 w-2/3">
                                            {
                                                dish.dishes.map((item: any, index: number) => {
                                                    return (
                                                        <>
                                                            <Box key={index} className="flex-col justify-center align-center content-center p-2 mb-6">
                                                                <Box className="bg-white text-center rounded-xl">
                                                                <Typography className=" font-serif mt-3 text-brown font-semibold text-start  p-4 underline text-lg text-bold">{item.title}</Typography>
                                                                <Box className=" md:flex items-center p-2">
                                                                <Image src={item.image} alt=""  width={100} height={100} style={{width:'100%',height:'100%',
                                                                    objectFit: "cover"}} ></Image>
                                                                <Typography className="font-serif mt-2 text-purple text-md ">{item.dishDes}</Typography>
                                                                </Box>
                                                                <Box onClick={()=>{setDishTitle(item.title),setDishDetails(item.dishDes), setDishImage(item.image)}}>
                                                                    <AlertDialog title = {dishTitle} description = {dishdetails} image = {dishImage} ></AlertDialog>
                                                                </Box>
                                                                </Box>
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