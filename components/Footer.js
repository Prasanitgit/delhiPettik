import Link from "next/link";
import React from "react";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md/index";
import Image from "next/image";
import logo from "../public/logo.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const Footer = () => {
  return (
    <div className=" bg-lightOrange pt-12 px-12 pb-5 relative">
      <Stack spacing={2} className="py-5">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={3}>
              <div className="flex flex-col items-center md:items-start gap-y-3">
                <div className="font-bold text-lg">PETTIK</div>
                <div>
                  A Leading PET care Services Platform connecting Millions of
                  Pet Parents and Lovers Every Minute with Numerous Facilities
                  Globally to seamlessly Help the Owners feel better Experience
                  at their Doorstep in their comfort Zone.
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div className="flex flex-col items-center md:items-start gap-y-3">
                <div className="font-bold text">CONTACT INFO</div>
                <a
                  href="https://goo.gl/maps/ztDL3rjMPKZevm7Z6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-regular hover:cursor-pointer hover:text-primary-dark text-md flex flex-row justify-start w-48 gap-2"
                >
                  <span>
                    <MdLocationOn size={24} className="text-orange" />
                  </span>
                  <span>Sk-23,Sector 112,Noida,Uttarpradesh,201301</span>
                </a>
                <a
                  href="tel:+919911203330"
                  className="font-regular hover:cursor-pointer hover:text-primary-dark text-md flex flex-row justify-start w-48 gap-2"
                >
                  <span>
                    <MdPhone size={24} className="text-orange" />
                  </span>
                  <span>+91 9911203330</span>
                </a>
                <a
                  href="tel:+9911263330"
                  className="font-regular hover:cursor-pointer hover:text-primary-dark text-md flex flex-row justify-start w-48 gap-2"
                >
                  <span>
                    <MdPhone size={24} className="text-orange" />
                  </span>
                  <span>+91 9911263330</span>
                </a>
                <a
                  href="mailto:pettik.services@gmail.com"
                  className="font-regular hover:cursor-pointer hover:text-primary-dark text-md flex flex-row justify-start w-48 gap-2"
                >
                  <span>
                    <MdMail size={24} className="text-orange" />
                  </span>
                  <span>services@pettik.com</span>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div className="flex flex-col items-center md:items-start gap-y-3">
                <div className="font-bold text-lg">QUICK LINKS</div>
                <Link
                  href="/"
                  className="font-regular hover:cursor-pointer hover:text-primary-dark text-md flex flex-row justify-start w-48 gap-2"
                >
                  Term And Condition
                </Link>
                <Link
                  href="/"
                  className="font-regular hover:cursor-pointer hover:text-primary-dark text-md flex flex-row justify-start w-48 gap-2"
                >
                  Privacy Policy
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div className="flex flex-col items-center md:items-start gap-y-3">
                <div className="font-bold text-lg">GET IN TOUCH</div>
                <div>Newsletter</div>
                <TextField
                  id="outlined-basic"
                  label="Enter your Email here"
                  variant="outlined"
                  name="email"
                />
                <button className="rounded-lg py-2 px-3 bg-orange shadow-none hover:shadow-none text-white">
                  SUBSCRIBE
                </button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Stack>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} className="footerLogo">
            <img
              src="/logo.png"
              className="w-[35%] md:w-[35%] sm:w-[30%]"
              alt="logo"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            className="copyright"
          >
            <hr className="footerLine w-[100%]"></hr>
            <div className="pt-2">
              COPYRIGHT &copy;2023. All Rights Reserved by &nbsp;
              <span className="text-orange">Pettik</span>
            </div>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default Footer;
