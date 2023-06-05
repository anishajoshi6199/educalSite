import Image from 'next/image'
import React from 'react'

const Events = () => {

   const EventData = [
    {
      p: "Jun-14-2022; 12:00 am - 2:30 pm, New York",
      h1: "Digital transformation conference",
    },
    {
      p: "April-10-2022; 9:00 am - 5:00 pm, Mindahan",
      h1: "World education day conference",
    },
    {
      p: "July-16-2022; 10:30 am - 1:30 pm, Weedpatch",
      h1: "Foundations of global health",
    },
    {
      p: "March-24-2022: 10:30 am - 12:00 pm, Lnland",
      h1: "Business creativity workshops",
    },
    
   ]



  return (
    <section className=' w-[92%] max-w-[100rem] m-auto mb-[3%] xl:pb-[3%]'>
       
      <div className='pb-10 md:pl-20 sm:pl-32'> 
      <h1 className='text-[40px] font-bold leading-[50px] text-gray-900 pt-16 w-96 m-auto'>Current <div className='relative inline-block z-10'><span>Event</span>
            <Image src="/images/bg/bgSeven.png" width={100} height={10} className='w-52 absolute -bottom-0 -left-3 -z-10' alt="" />
         </div>  
        </h1>
        <p className='w-96 m-auto font-medium xl:pt-2 text-gray-600 xl:pb-10'>we found 13 events available for you.</p>
      </div>


{/* 
{EventData.map ((data, index) => {
   return(
    <div key={index} className='w-[70%] md:w-[80%] m-auto flex items-center justify-between p-8 bg-white shadow-xl mb-5 rounded-xl border-blue-700 shadow-black-600 cursor-pointer hover:border-l-4'>
    <div>
     <p className='text-gray-600 font-medium'>{data.p}</p>
     <h1 className='text-2xl font-semibold cursor-pointer hover:text-blue-700 md:text-[23px]'>{data.h1}</h1>
     </div>
     <div className='hover:text-blue-700 font-semibold'>View More</div>
   </div>

   )
})} */}

   
    </section>
  )
}

export default Events
