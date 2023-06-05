"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const Pricing = () => {
  const [bttn, setBttn] = useState(false);

    const PricingDataOne = [
        {
          h3 : "Gold",
          p : "Perfect for small marketing teams",
          h1 : ".99 / annually",
          span: "$49",
          li_1: "Course Discussions",
          li_2: "Content Library",
          li_3: "1-hour Mentorship",
          btn: "Get Started"
        },
        
        {
          h3 : "Diamond",
          p : "Perfect for small marketing teams",
          h1 : ".99 / annually",
          span: "$68",
          li_1: "Course Discussions",
          li_2: "Content Library",
          li_3: "1-hour Mentorship",
          li_4: "Online Course",
          btn: "Get Started"
        }
    ]

    const PricingDataTwo = [
      {
        h3 : "Gold",
        p : "Perfect for small marketing teams",
        h1 : ".99 / annually",
        span: "$68",
        li_1: "Course Discussions",
        li_2: "Content Library",
        li_3: "1-hour Mentorship",
        btn: "Get Started"
      },
      
      {
        h3 : "Diamond",
        p : "Perfect for small marketing teams",
        h1 : ".99 / annually",
        span: "$99",
        li_1: "Course Discussions",
        li_2: "Content Library",
        li_3: "1-hour Mentorship",
        li_4: "Online Course",
        btn: "Get Started"
      }
  ]
  return (
    <section className=' w-[92%] max-w-[100rem] m-auto pt-10 xl:pt-[5%] xl:pb-[1%]'>
       <h1 className='text-[40px] font-bold leading-[43px] text-gray-900  w-[80%] xl:w-[30%] text-center m-auto'>Simple <br /> All Inclusive <div className='relative inline-block z-10'><span>Pricing</span> 
         <Image src="/images/bg/bgSeven.png" width={100} height={10}  className='w-60 absolute -bottom-1 -left-3 -z-10' alt="" />
         </div>
       </h1>
       
       <p className='text-gray-500 font-medium w-[40%] m-auto xl:pl-52 pt-3'>No Contracts. No surprise fees.</p>



{/* ************** */}
       <div className='flex justify-center pt-4'>
         <button className='p-2 border rounded-md hover:bg-blue-700 hover:text-white' onClick={() => setBttn(true)}>Monthly Plan</button>
         <button className='p-2 border rounded-md hover:bg-blue-700 hover:text-white' onClick={() => setBttn(!bttn)}>Annual Plan</button>
       </div>



       {/* First */}

  {
    (bttn ) ? <div className='w-[70%] m-auto mt-20 grid grid-cols-1 md:grid-cols-2 justify-between'>
  
    {PricingDataOne.map ((item, index) => {
      return (
            <div  key={index} className='bg-slate-200 rounded-xl xl:ml-[10%] md:w-[90%] w-[100%] p-10 mb-10 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-gray'>
              <h3 className='text-[35px] font-bold text-gray-800'>{item.h3}</h3>
              <p className='font-medium text-gray-700'>{item.p}</p>
              <h1 className='font-medium text-gray-900'><span className='font-bold text-[50px]'>{item.span}</span>{item.h1}</h1>
              <hr />
              <ul className='py-5 px-5'>
                  <li className='font-medium text-gray-900 py-1 cursor-pointer hover:text-green-600'>{item.li_1}</li>
                  <li className='font-medium text-gray-900 py-1 cursor-pointer hover:text-green-600'>{item.li_2}</li>
                  <li className='font-medium text-gray-900 py-1 cursor-pointer hover:text-green-600'>{item.li_3}</li>
              </ul>
              <div className='bg-blue-700 text-white w-36 text-center py-2 rounded-md px-3 cursor-pointer hover:bg-blue-800 my-3'>{item.btn}</div>
            </div>
      )
    })}
    </div> : <div className='w-[70%] m-auto mt-20 grid grid-cols-1 md:grid-cols-2 justify-between'>
  {PricingDataTwo.map ((item, index) => {
    return (
      <div  key={index} className='bg-red-100 rounded-xl xl:ml-[10%] md:w-[90%] w-[100%] p-10 mb-10 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-gray'>
              <h3 className='text-[35px] font-bold text-gray-800'>{item.h3}</h3>
              <p className='font-medium text-gray-700'>{item.p}</p>
              <h1 className='font-medium text-gray-900'><span className='font-bold text-[50px]'>{item.span}</span>{item.h1}</h1>
              <hr />
              <ul className='py-5 px-5'>
                  <li className='font-medium text-gray-900 py-1 cursor-pointer hover:text-green-600'>{item.li_1}</li>
                  <li className='font-medium text-gray-900 py-1 cursor-pointer hover:text-green-600'>{item.li_2}</li>
                  <li className='font-medium text-gray-900 py-1 cursor-pointer hover:text-green-600'>{item.li_3}</li>
              </ul>
              <div className='bg-blue-700 text-white w-36 text-center py-2 rounded-md px-3 cursor-pointer hover:bg-blue-800 my-3'>{item.btn}</div>
            </div>
      )
    })}
    </div>
   
  }

  
    </section>
  )
}

export default Pricing
