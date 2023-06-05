"use client";

import React from "react";
import DataScience from "@/icons/DataScience";
import Business from "@/icons/Business";
import Art from "@/icons/Art";
import Lifestyle from "@/icons/Lifestyle";
import Marketing from "@/icons/Marketing";
import Finance from "@/icons/Finance";
import Health from "@/icons/Health";
import Academics from "@/icons/Academics";
import Music from "@/icons/Music";
import styled from "styled-components";
import { VscArrowSmallRight } from "react-icons/vsc";
import Image from "next/image";

const exploreCourses = [
  {
    h1: "Data Science",
    p: "Data is Everything",
    icon: <DataScience />,
  },
  {
    h1: "Business",
    p: "Improve Your Business",
    icon: <Business />,
  },
  {
    h1: "Art 7 Design",
    p: "Fun & Challenging",
    icon: <Art />,
  },
  {
    h1: "Lifestyle",
    p: "New Skills, New You",
    icon: <Lifestyle />,
  },
  {
    h1: "Marketing",
    p: "Improve Your Business",
    icon: <Marketing />,
  },
  {
    h1: "Finance",
    p: "Fun & Challenging",
    icon: <Finance />,
  },
  {
    h1: "Health & Fitness",
    p: "Invest to Your Body",
    icon: <Health />,
  },
  {
    h1: "Music",
    p: "Major or Minor",
    icon: <Music />,
  },
  {
    h1: "Academics",
    p: "High Education Level",
    icon: <Academics />,
  },
];

const PopularCourses = () => {
  return (
    <section className='w-[92%] max-w-[100rem] m-auto mt-36 pb-24 xl:ml-[10%] '>
      <div className='flex pt-16 pb-10'>

        <h1 className='lg:text-[47px] leading-[55px] text-gray-900 lg:ml-[4%] font-bold md:text-[45px] sm:text-[45px] text-[37px]'>
          Explore <br /> Our <div className='inline-block relative z-10'>
            <span className=''> Popular</span>
            <Image
              src='/images/bg/bgSeven.png'
              className='absolute -bottom-0 right-4 -z-10'
              width={200}
              height={40}
              alt='bgSeven'
            />
          </div>
          {" "} Courses
        </h1>

        <p className=' text-[16px] items-center hover:text-blue-700 cursor-pointer gap-[0.3%] mr-20 hidden '>
          View all Category <VscArrowSmallRight className='text-[30px]' />
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center  lg:ml-[4%] mr-[10%] md:ml-[3%]'>
        {exploreCourses.map((data, index) => {
          return (
            <div
              key={index}
              className='flex pl-7 items-center gap-6 py-4 shadow-md shadow-gray-400 mt-10 rounded-md cursor-pointer hover:bg-blue-100 hover:shadow-xl'
            >
              <div>{data.icon}</div>
              <div>
                <h1 className='font-bold text-xl text-gray-800'>{data.h1}</h1>
                <p>{data.p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularCourses;
