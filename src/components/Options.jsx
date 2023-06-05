import Image from "next/image";
import React from "react";

const Options = () => {
  return (
    <section className='w-[92%] max-w-[100rem] m-auto '>
      <div className='lg:flex justify-center gap-[4%] pb-10'>
        
        
        <div className='optionColor flex justify-center gap-[1%] pt-16 w-[100%] h-[18rem] p-5 mb-5 xl:w-[40%]'>
            <div>
            <div className="w-[5rem] bg-pink-500 text-center rounded-full text-white font-semibold">Free</div>
          <h1 className="text-2xl text-gray-800 font-bold mt-2">Germany Foundation <br /> Document</h1>
          <div className="px-1 bg-blue-700 rounded-md text-white w-[8rem] text-center cursor-pointer hover:bg-blue-800 py-2 mt-7">View Courses</div>
            </div>
            
<div>
          <Image src="/images/OptionOneImg.png" className="hidden sm:block" width={300} height={20} alt="" />
    </div>
        </div>
        
        
        
        
        
        <div className='OptionColor flex justify-center gap-[1%] pt-16 w-[100%] h-[18rem] p-5  xl:w-[40%]'>
            <div>
        <div className="w-[5rem] bg-pink-500 text-center rounded-full text-white font-semibold">New</div>
          <h1 className="text-2xl text-gray-800 font-bold mt-2">Online Courses <br />From Eduka University</h1>
          <div className="px-1 bg-blue-700 rounded-md text-white w-[8rem] text-center cursor-pointer hover:bg-blue-800 py-2 mt-7">Find Out More</div>
            </div>

            <div>
          <Image src="/images/OptionTwoImg.png" className="-mt-7 hidden sm:block" width={300} height={20} alt="" />
    </div>


        </div>
      </div>
    </section>
  );
};

export default Options;
