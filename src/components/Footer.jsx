import { RiFacebookFill } from "react-icons/ri";
import { VscTwitter } from "react-icons/vsc";
import { TfiPinterest } from "react-icons/tfi";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  const educal = [
    {
      h1: "educal",
      p: "Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.",
    },
  ];
  const Company = [
    {
      h1: "Company",
      li_1: "About",
      li_2: "Courses",
      li_3: "Events",
      li_4: "Instructor",
      li_5: "Career",
      li_6: "Become a",
      li_7: "Teacher",
      li_8: "Contact",
    },
  ];
  const Platform = [
    {
      h1: "Platform",
      li_1: "Browse Library",
      li_2: "Library",
      li_3: "Partners",
      li_4: "News & Blogs",
      li_5: "FAQs",
      li_6: "Tutorials",
    },
  ];
  const Subscribe = [
    {
      h1: "Subscribe",
      p: "Get the latest news and updates right at your inbox.",
    },
  ];


  return (
    <section className='w-[90%] max-w-[100rem] m-auto pt-[50%] sm:pt-[25%] md:pt-[20%] lg:pt-[16%] xl:pt-[10%] pb-[2%] md:pr-[6%] xl:pl-[10%] xl:pr-[10%] text-gray-400 text-base -z-10'>
      <div className='grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between sm:pl-[10%] text-center'>
        {educal.map((data, index) => {
          return (
            <div key={index} className='w-[85%] mb-10 ml-[8%]  sm:pr-[25%]'>
              <h1 className='text-white font-semibold text-[35px] pb-5 cursor-pointer'>
                {data.h1}
              </h1>
              <p className=' hover:text-white cursor-pointer pt-2'>{data.p}</p>
              <div className='pt-8 flex text-2xl text-white gap-3 ml-[20%] xl:ml-[15%] md:ml-[5%]'>
                <div className='bg-blue-600 xl:p-3 md:p-2 sm:p-1 p-2 rounded-md cursor-pointer hover:bg-blue-700'>
                  <RiFacebookFill />
                </div>
                <div className='bg-sky-500 xl:p-3 md:p-2 sm:p-1 p-2 rounded-md cursor-pointer hover:bg-sky-700'>
                  <VscTwitter />
                </div>
                <div className='bg-rose-600 xl:p-3 md:p-2 sm:p-1 p-2 rounded-md cursor-pointer hover:bg-rose-900'>
                  <TfiPinterest />
                </div>
              </div>
            </div>
          );
        })}

        {Company.map((data_1, index) => {
          return (
            <div key={index} className="mb-10  sm:mb-[20%]  sm:mr-[10%]">
              <h1 className='text-white font-semibold text-[25px] pb-5 cursor-pointer'>
                {data_1.h1}
              </h1>
              <ul>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_1.li_1}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_1.li_2}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_1.li_3}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_1.li_4}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_1.li_5}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_1.li_6}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_1.li_7}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_1.li_8}
                </li>
              </ul>
            </div>
          );
        })}

        {Platform.map((data_2, index) => {
          return (
            <div key={index} className="mb-10  sm:mr-[25%]">
              <h1 className='text-white font-semibold text-[25px] pb-5 cursor-pointer'>
                {data_2.h1}
              </h1>
              <ul>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_2.li_1}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_2.li_2}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_2.li_3}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_2.li_4}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_2.li_5}
                </li>
                <li className=' hover:text-white cursor-pointer py-1'>
                  {data_2.li_6}
                </li>
              </ul>
            </div>
          );
        })}

        {Subscribe.map((data_3, index) => {
          return (
            <div key={index} className='w-[80%] mb-10  sm:ml-[15%] ml-[10%] sm:pr-[25%]'>
              <h1 className='text-white font-semibold text-[25px] pb-5 cursor-pointer'>
                {data_3.h1}
              </h1>

              {/* <div className='flex bg-white justify-between items-center rounded-md mb-5'>
                <input
                  type='text'
                  className='focus:outline-none pl-5 text-black font-medium text-xl'
                />
                <div className='bg-blue-600 p-3 rounded-tr-md cursor-pointer hover:bg-blue-700 rounded-br-md text-white text-2xl'>
                  <BsArrowRight />
                </div>
              </div> */}

              <p className=' hover:text-white cursor-pointer text-md'>
                {data_3.p}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Footer;
