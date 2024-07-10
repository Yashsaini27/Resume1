import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import card1 from "../assets/images/download(5).jpeg";
import card2 from "../assets/images/download(6).jpeg";
import card3 from "../assets/images/download(7)..jpeg";
import card4 from "../assets/images/download(8).jpeg";
import card5 from "../assets/images/download(9).jpeg";
import card6 from "../assets/images/download (3).jpeg";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "70%",
    position: "relative",
    overflow: "hidden",
  },
  slideImage: {
    width: "70%",
    height: "700px",
  },
  navigationButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    zIndex: 10,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    "& svg": {
      fontSize: "2rem",
    },
    "&.left": {
      left: theme.spacing(2),
    },
    "&.right": {
      right: theme.spacing(2),
    },
  },
}));

const Slider = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        navigation={{
          prevEl: '.left',
          nextEl: '.right',
        }}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={window.innerWidth < 668 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {[card1, card2, card3, card4, card5, card6].map((card, index) => (
          <SwiperSlide key={index}>
            <img src={card} alt={`Slide ${index + 1}`} className={classes.slideImage} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button className={`${classes.navigationButton} left`}>
        <NavigateBefore />
      </Button>
      <Button className={`${classes.navigationButton} right`}>
        <NavigateNext />
      </Button>
    </Box>
  );
};

export default Slider;
