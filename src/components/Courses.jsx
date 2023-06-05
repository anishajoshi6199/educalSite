"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useState, useEffect  } from 'react'

const Courses = () => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const data = axios.get('https://fakestoreapi.com/products?limit=6')
        .then(function(response){
            setApiData(response.data)
        })
    }, [])
    console.log(apiData)

  return (
    <section className='w-[92%] max-w-[100rem] m-auto mb-[5%]'>
        <div className='flex justify-between items-end xl:mt-[2%] xl:mb-10'>
        <div className='xl:ml-[8%] md:pl-[5%] sm:ml-[6%]'>

        <h1 className='xl:text-[40px] font-bold xl:leading-[50px] text-gray-900 md:text-[50px] md:leading-[55px] md:pt-[10%] text-[38px] leading-[45px] pt-[15%] pl-[3%]'>Find The Right <br className=' '/>
         Online <div className='relative inline-block'><span>Course</span>
            <Image src="/images/bg/bgSeven.png" width={170} height={10} className='absolute bottom-0 -left-3 -z-10' alt="" />
         </div>   For You
        </h1>
        <p className='md:leading-[20px] xl:leading-[20px] xl:w-[90%] xl:pt-[5%] md:mb-[1%] text-gray-700 pt-[4%] items-end w-[90%] pl-[3%]'>You dont have to struggle alone, you have got our assistance and help.</p>
        </div>

        <div className='xl:mr-[15%] hidden xl:block'>
            <ul className='flex gap-10 text-gray-700'>
                <li className='hover:text-blue-800 cursor-pointer'>See All</li>
                <li className='hover:text-blue-800 cursor-pointer'>Trending</li>
                <li className='hover:text-blue-800 cursor-pointer'> Popularity</li>
                <li className='hover:text-blue-800 cursor-pointer'>Featured</li>
                <li className='hover:text-blue-800 cursor-pointer'>Art & Design</li>
            </ul>
        </div>
        </div>




    <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-auto justify-center gap-y-10 sm:ml-[2%] xl:mr-60 cursor-pointer xl:ml-[2%] ml-[4%]'>
     {apiData.map((item, index) => {
       return(
        <div key={index} className='w-[95%] bg-white rounded-xl xl:ml-36 hover:shadow-xl hover:shadow-black-900 flex flex-col justify-between'>
          <div>
      <Image src={item.image} width={200} height={20} className='w-[30%] m-auto pt-10 rounded-xl cursor-pointer' alt="" />
          </div>

          <div>

      <div className='flex justify-between pl-4 pr-6 pt-4'>
         <div>43 Lesson</div>
         <div>4.5</div>
      </div>

      <h1 className='text-xl font-semibold text-gray-800 p-4 cursor-pointer hover:text-purple-700'>{item.title}</h1>
      <h2 className='pl-4 pr-4 pb-2'>Jim Sechen</h2>
      <hr />
      <div className='flex items-baseline justify-between p-4'>
        <div className='font-semibold text-2xl text-purple-600'>$21.00 <span className='text-xs font-bold text-gray-500 line-through'>$33.00</span> </div>
        <div className='font-semibold cursor-pointer text-lg text-gray-700'>Know Details</div>
      </div>
          </div>
</div>
       )
    })}
    </div>
    </section>
  )
}

export default Courses;
