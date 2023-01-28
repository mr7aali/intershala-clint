import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from "@mui/system";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = ({ Posts }) => {
   
    return (
        <Box sx={{ marginTop: '00px' }}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                // Autoplay,
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {/* postdetails/63c57d94ebd23f8e6e85d8e1 */}




                {

                    Posts.map(p =>

                        <SwiperSlide key={p._id}>
                            <div className="full-banner-page-container">
                                <div className="banner-img-container">

                                    <div className="max-w-screen-lg	">
                                        <img src={p.show.image.original} alt="" />
                                    </div>
                                    <div className="sub-blog-container p-5 text-5xl bg-[#8e1d1d]">


                                        <h1 >
                                            


                                            <a href={p?.show?.url} target="_blank" rel="noopener noreferrer">
                                            <span className="underLine">
                                                {/* These 5 tips will help you nail your next design presentation */}
                                                {/* {p.show.summary.replace(/(<([^>]+)>)/ig,"").slice(0,30)} */}
                                                {p.show.name}
                                            </span>
                                            </a>

                                        </h1>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <CardHeader
                                                sx={{ padding: '15px 0' }}
                                                avatar={
                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                        <img src={p.show.image.original} alt="" />
                                                    </Avatar>
                                                }




                                                title={p?.show?.network?.name}
                                                subheader={p?.show?.premiered}
                                            />
                                            <Box sx={{ color: 'black' }}>
                                                <Link to={`/postdetails/${p._id}`}>
                                                    <Button variant="outlined">Details</Button>
                                                </Link>

                                            </Box>
                                        </Box>


                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                    )
                }


            </Swiper>

        </Box>
    );
};

export default Banner;