import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AppleIcon from "../public/apple-icon.svg";
import PlaystoreIcon from "../public/playstore-icon.svg";
import { AiFillStar, AiOutlineStar, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Head from "next/head";
import Link from 'next/link';

const thankyou = () => {
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
    <div>
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
      <div className='pt-5 pb-5 cursor-pointer'>
      <Link href="/"><img src="/thankyoubanner.png" alt="thankyou"/></Link>
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
    </div>
  )
}

export default thankyou
