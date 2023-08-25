import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import PetsIcon from "@mui/icons-material/Pets";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ServiceImg1 from "../public/Doorstep.png";
import ServiceImg2 from "../public/Expert.png";
import ServiceImg3 from "../public/Booking.png";
import ServiceImg4 from "../public/Trsut.png";
import Image from "next/image";
import "swiper/css/effect-cards";
import { useSnackbar } from "notistack";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Iframe from "react-iframe";
import Footer from "../components/Footer";
import AppleIcon from "../public/apple-icon.svg";
import PlaystoreIcon from "../public/playstore-icon.svg";
import { AiFillStar, AiOutlineStar, AiOutlineArrowRight } from "react-icons/ai";

const serviceData = [
  {
    image: ServiceImg1,
    title: "Doorstep Service",
  },
  {
    image: ServiceImg2,
    title: "Experienced and Verified Experts",
  },
  {
    image: ServiceImg3,
    title: "Hustle-Free Booking",
  },
  {
    image: ServiceImg4,
    title: "Trusted Services",
  },
];

export default function Home() {
  const baseUrl = "https://xmxpaqn8ad.execute-api.us-east-1.amazonaws.com";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE5Mjc2ODYsImRhdGEiOnsidWlkIjoiSkhCQklBRkZKSSJ9LCJpYXQiOjE2OTE4NDEyODZ9.jpcEaDwr0q4SafOllKMCn-V0HWCUq9kVKKGfFhJxujY"
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
  });
  const [groomingData, setGroomingData] = useState([]);

  useEffect(() => {
   
    const apiCall = async () => {
      try {
        const res = await axios.get(`${baseUrl}/services/grooming/201002`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("res", res.data.services);
        setGroomingData(res.data.services);
      } catch (e) {
        enqueueSnackbar("Backend server error... ", { variant: "error" });
      }
    };

    apiCall();
  }, []);
  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const submit = async (data) => {
    console.log("input", baseUrl);
    if (!validateInput(data)) return;
    await axios.post(
      `${baseUrl}/add/enquiry`,
      {
        name: data.name,
        phone_number: data.phone,
        location: data.location,
        service: data.service,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    enqueueSnackbar("Submited successfully ", { variant: "success" });
    router.push("/thankyou");
  };
  const validateInput = (data) => {
    if (!data.name) {
      enqueueSnackbar("User name is a required field", { variant: "error" });
      return false;
    }
    if (!data.phone) {
      enqueueSnackbar("Phone number is a required field", { variant: "error" });
      return false;
    }
    if (data.phone.length < 10 || data.phone.length > 10) {
      enqueueSnackbar("Please enter a valid phone number", {
        variant: "error",
      });
      return false;
    }
    if (!data.location) {
      enqueueSnackbar("location is a required field", {
        variant: "error",
      });
      return false;
    }
    if (!data.service) {
      enqueueSnackbar("please choose a service", {
        variant: "error",
      });
      return false;
    }
    return true;
  };

  const RatingAndButtons = ({
    platformName1,
    platformName2,
    icon,
    rating,
    href,
  }) => {
    return (
      <div className="flex flex-row gap-x-4 bg-white p-2 rounded-2xl items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <div className="flex items-center justify-center gap-x-2">
            <div className="text-5xl font-normal">{rating}</div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl font-semi-bold leading-none">
                {platformName1}
              </div>
              <div className="text-xl font-semi-bold leading-none">
                {platformName2}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-1 text-xl">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        </div>
        <div
          onClick={() => openInNewWindow(href)}
          className="rounded-full hover:cursor-pointer px-5 py-3 flex gap-x-2 items-center justify-center bg-lightGray"
        >
          <Image src={icon} alt={platformName1} className="h-8 w-8" />
          <div className="text-black font-semi-bold text-sm md:text-lg text-center">
            Download the app
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>
          Get the best pet grooming, vaccination, walking, and other pet care
          services from Pettik | pettik
        </title>
        <meta
          name="description"
          content="pet grooming,dog grooming,dog training,dog grooming near me,dog training near me,pet grooming near me,groomers,dog walking,doggy daycare near me,cat grooming near me,pet boarding near me,doggy daycare,cat boarding near me,cat grooming,dog vaccinations,pet care near me,cat vaccinations,dog care near me,pet daycare near me,pet salons near me,dog salon near me,dog haircut,pets at home grooming,dog baths,dog haircut near me,animal care near me,dog baths near me,dog grooming at home,pet grooming services,pet grooming home service,doggy day,dog injections,clinic for dogs,pet boarding services,home pet grooming,dog care centre delhi"
        />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Navbar />
      <div className="call">
        <a href="tel:+9911263330">
          <img src="/call.png" />
        </a>
      </div>
      <div className="whatsapp">
        <a href="https://wa.me/919911203330?text=hello Pettik" target="_blank">
          <img src="/Whatsapp.png" />
        </a>
      </div>
      <Carousel showThumbs={false} infiniteLoop={true} interval={2000} autoPlay>
        <div>
          <img src="/boarding_banner.png" />
        </div>
        <div>
          <img src="/boarding_banner.png" />
        </div>
        <div>
          <img src="/boarding_banner.png" />
        </div>
        <div>
          <img src="/boarding_banner.png" />
        </div>
        <div>
          <img src="/boarding_banner.png" />
        </div>
      </Carousel>
      <Container className="pt-10 pb-10">
        <div className="pb-24 px-8 md:px-24 flex flex-col md:flex-row gap-y-14 gap-x-14 justify-center items-center">
          <div>
            <div className="text-2xl font-medium mt-3 mb-2">
              <span className="text-orange">Book</span> an appointment{" "}
              <PetsIcon className="text-orange" />
            </div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handelInput}
              />
              <TextField
                id="outlined-basic"
                label="Phone number"
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handelInput}
              />
              <FormControl fullWidth>
                <InputLabel id="locationId">Location</InputLabel>
                <Select
                  labelId="locationId"
                  id="demo-location"
                  value={formData.location}
                  label="Location"
                  onChange={handelInput}
                  name="location"
                >
                  <MenuItem value="delhi">Delhi</MenuItem>
                  <MenuItem value="bangalore">Bangalore</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Services</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.service}
                  label="Services"
                  onChange={handelInput}
                  name="service"
                >
                  <MenuItem value="grooming">Grooming</MenuItem>
                  <MenuItem value="vaccine">Vaccine</MenuItem>
                  <MenuItem value="walking">Walking</MenuItem>
                  <MenuItem value="training">Training</MenuItem>
                  <MenuItem value="boarding">Boarding</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <button
              className="m-2 rounded-lg py-2 px-3 bg-orange shadow-none hover:shadow-none text-white"
              onClick={() => submit(formData)}
            >
              Book Now <SendIcon />
            </button>
          </div>

          <img
            src="/BookAppointmentImage.png"
            className="w-[70%] md:w-[40%] sm:w-[50%]"
            alt="inquiry image"
          />
        </div>
      </Container>
      <div className="pb-24 md:px-24 flex flex-col gap-y-14 justify-center items-center">
        <div className="text-3xl font-semi-bold">
          Why you <span className="text-orange">Choose us?</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-24 w-[100%] md:w-[80%]">
          {serviceData.map((data, idx) => (
            <div className="flex items-center justify-center w-full" key={idx}>
              <div
                className={`flex flex-col hover:cursor-pointer items-center text-center justify-center gap-y-1 relative h-40 w-32 rounded-full p-2`}
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  className="h-64 w-64"
                />
                <h3>{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-10 gap-y-6 text-center py-6 mb-12 md:mb-14">
        <div className="text-3xl font-semi-bold">
          Explore Our Pet <span className="text-orange">Grooming Packages</span>
        </div>
        <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12 items-center justify-center">
          {groomingData?.map((val, index) => (
            <div
              className="flex flex-col items-center p-6 rounded-xl bg-package h-full shadow-xl justify-between"
              key={index}
            >
              <div className="w-full flex flex-col items-center">
                <div className="text-xl md:text-2xl font-nunito-black pb-4 text-center">
                  {val.name}
                </div>
                {val?.included?.map((service, idx) => (
                  <div
                    className="w-full flex flex-row text-start px-4"
                    key={idx}
                  >
                    <span className="w-[10%] flex items-center">
                      <img src="/Tick.png" />
                    </span>
                    <span className="w-[90%]">{service}</span>
                  </div>
                ))}
                <div className="mb-12"></div>
              </div>
              <div className="flex flex-col w-full gap-y-8">
                <div className="flex flex-row w-full font-nunito-black text-xl md:text-xl">
                  <div className="w-1/2 flex  ml-6 justify-start groomingprice">
                    <span className="actualgroomingprice">₹ {val.cost}</span>
                    <span>₹ {val.discounted_cost}</span>
                  </div>
                  <div className="w-1/2 flex justify-end mr-6">
                    {val.service_time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col px-6 gap-y-5 py-10 md:justify-center md:items-center md:gap-x-14 md:px-24 md:py-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src="HappyPet.png"
            alt="happy pets"
            className="w-[50%] md:w-[50%] sm:w-[30%]"
          />
          <div className="flex text-3xl font-semi-bold mt-5 mb-3 items-center justify-center text-center">
            Give your Pets pampering they deserve
          </div>
        </div>

        <div className="flex items-center justify-center">
         <Iframe
            url="https://www.youtube.com/embed/fXRYJnlDvLg"
            width=""
            height="450px"
            id=""
            className="w-[80%] md:w-[80%]"
            display="block"
            position="relative"
          />
        </div>
      </div>
      <Container className="px-10 slide-container">
        <div className="text-3xl font-semi-bold flex justify-center items-center">
          What our&nbsp;<span className="text-orange">Client Says</span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="slide-content"
        >
          <SwiperSlide className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <img src="/Expert.png" alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className="name">Sagar Dash</h2>
              <p className="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <img src="/Expert.png" alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className="name">Sagar Dash</h2>
              <p className="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <img src="/Expert.png" alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className="name">Sagar Dash</h2>
              <p className="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <img src="/Expert.png" alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className="name">Sagar Dash</h2>
              <p className="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <img src="/Expert.png" alt="" className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className="name">Sagar Dash</h2>
              <p className="description">
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
      <div className="flex flex-col md:flex-row px-6 gap-y-14 md:justify-center md:items-center md:gap-x-24 md:px-24 md:py-10">
        <div className="flex items-center justify-center md:w-[40%]">
          <img
            src="/FAQ image.png"
            className="w-[50%] md:w-[50%] sm:w-[30%]"
            alt="image"
          />
        </div>

        <div className="md:w-[60%]">
          <div className="text-3xl font-semi-bold mt-3 mb-4">
            Frequently Asked
            <span className="text-orange"> Questions</span>
            <PetsIcon className="text-orange" />
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How to Book Services?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Can I Cancel the Service?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Are the services refundable?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Are the Products used for grooming safe for pets?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-white to-reviews h-full shadow-xl justify-between">
        <div className="flex flex-col md:flex-row  gap-y-14 md:justify-center md:items-center md:gap-x-24 md:px-24 md:py-10">
          <div className="w-[100%] md:w-[40%] ">
            <div className="text-2xl md:text-2xl font-bold text-orange md:justify-start flex justify-center items-center pb-3">
              ONE STOP SOLUTION
            </div>
            <div className="text-xl md:text-xl font-bold text-orange md:justify-start flex justify-center items-center pb-3">
              FOR PET CARE SERVICES
            </div>
            <div className="text-xl md:text-xl font-bold text-orange md:justify-start flex justify-center items-center pb-6">
              AT YOUR COMFORT
            </div>

            <div className="text-xl md:text-xl font-bold text-black md:justify-start justify-center items-center flex pb-6">
              Book Services with one click and manage the progress on your tips!
            </div>
            <div className="flex flex-col gap-y-8">
              <RatingAndButtons
                icon={AppleIcon}
                href="https://apps.apple.com/om/app/pettik/id1602909468"
                platformName1="app"
                platformName2="store"
                rating="4.8"
              />
              <RatingAndButtons
                icon={PlaystoreIcon}
                href="https://play.google.com/store/apps/details?id=com.newaetate.pettik"
                platformName1="play"
                platformName2="store"
                rating="4.7"
              />
            </div>
          </div>

          <div className="md:w-[50%] flex items-center justify-center">
            <img src="/Download.png" className=" w-[45%] md:w-[45%]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
