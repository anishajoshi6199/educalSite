import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className='relative'>
        <Image
          src='/images/bg/bgOne.png'
          width={60}
          height={30}
          alt=''
          className='absolute lg:top-32 lg:left-28 rotate-object md:top-20 left-[10%] top-[1%] hidden md:block'
        />
        <Image
          src='/images/bg/bgTwo.png'
          width={190}
          height={100}
          alt=''
          className='absolute lg:top-32 lg:right-[27.5rem] lg:w-[13rem] w-[8rem] top-[12rem] right-[20%] hidden  md:block'
        />
        <Image
          src='/images/bg/bgThree.png'
          width={70}
          height={80}
          alt=''
          className='absolute lg:top-[34rem] lg:right-[57rem] md:right-[27.9rem] md:top-[29rem] lg:w-[5rem] md:w-[3rem] w-[2.5rem] top-[30rem] right-[11rem] animate-bounce hidden  md:block'
        />
        <Image
          src='/images/bg/bgFour.png'
          width={65}
          height={30}
          alt=''
          className='absolute lg:top-[28rem] lg:w-[5rem] md:w-[2.5rem] w-[2.5rem] top-[35rem] md:top-[22rem] hidden  md:block'
        />
        <Image
          src='/images/bg/bgFive.png'
          width={50}
          height={80}
          alt=''
          className='absolute top-[30rem] right-0 lg:w-[3.5rem] md:w-[2rem] md:top-[30rem] hidden  md:block'
        />
        <Image
          src='/images/bg/bgSix.png'
          width={300}
          height={80}
          alt=''
          className='absolute lg:top-[24rem] lg:right-[25rem] md:top-[3rem] md:right-[5rem] lg:w-[20rem] md:w-[10rem] hidden md:block'
        />

        <div className='w-[92%] max-w-[100rem] m-auto items-center md:flex justify-center gap-12 pt-[10%] md:pt-30'>
          <div className=" sm:pb-[7%]">
            <h1 className='lg:text-[60px] font-light text-gray-800 lg:pl-2 md:text-[35px] sm:text-[50px] text-[40px]'>
              Access 2700+
            </h1>

            <h2 className='lg:text-[60px] leading-[100%] text-gray-900 font-bold md:text-[35px] sm:text-[45px] text-[37px]'>
              <div className='inline-block relative'>
               <span className="">Online</span> 
                <Image

                  src='/images/bg/bgSeven.png'
                  className='absolute -bottom-1 -left-4 -z-10'
                  width={200}
                  height={40}
                  alt='bgSeven'
                />
              </div>{" "}
              Tutorial From <br className='max-md:hidden' /> Top Instructor.
            </h2>

            <p className='lg:text-[21px] leading-[130%] mt-5 text-gray-800 md:text-[20px] sm:text-[21px] text-[19px]'>
              Meet university,and cultural institutions,
              <br />
              who will share their experience.
            </p>
            <div className='bg-blue-700 text-white  lg:w-[25%] text-center lg:py-3 rounded-md lg:mt-8 cursor-pointer hover:bg-blue-800 md:w-[35%] md:py-2 md:mt-5 sm:w-[25%] mt-[2%] sm:py-3 w-[60%] py-3 mb-5'>
              View all course
            </div>
          </div>

          <div className='flex items-start lg:gap-6 '>
            <Image
              src='/images/heroOne.jpg'
              width={390}
              height={80}
              alt=''
              className='relative rounded-tl-[12%] rounded-br-[12%] z-10 lg:w-[25rem] md:w-[22rem] sm:w-[20rem] sm:ml-[5%]'
            />
            <Image
              src='/images/heroTwo.jpg'
              width={200}
              height={80}
              alt=''
              className='relative lg:mt-[50px] rounded-tr-[13%] rounded-bl-[13%] Z-10 hidden xl:block'
            />
          </div>

        
            <div className='bg-white shadow-2xl absolute lg:right-[22rem] lg:bottom-16 lg:px-9 lg:py-4 rounded-md z-10 animate-bounce md:px-4 md:py-2 md:bottom-6 md:right-[5rem] hidden md:block'>
              <p className='font-normal'>Tomorrow is our</p>
              <h1 className='font-semibold'>When I Grow Up Spirit Day!</h1>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
