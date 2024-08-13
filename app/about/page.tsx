// "use client"
// import Image from 'next/image';
// import React , {useState, useEffect} from 'react';


// const About = () => {
//   const [sentence1] = useState(" you are already famous");
//   const [currentIndex1, setCurrentIndex1] = useState(0);

//   useEffect(() => {
// //counter of the sentence
//     let interval1 = setInterval(() => {
//       setCurrentIndex1((currentIndex) => currentIndex + 1);
//     }, 100);
//     return () => 
//     clearInterval(interval1);
//     }, []);
//   return (
//     <>
//       <section className="">
//         <div className=''>
//   <div className='row'>
//     <div className='col-md-6 py-12 bg-white bg-opacity-80 aspect-w-16 aspect-h-9'>
//       <Image src='/mali2.webp' className='img-fluid' alt='Profile Image' width={100} height={100}/>
//     </div>
//     <div className='col-md-6 d-flex flex-column justify-content-center align-items-center px-'>
//       <h1 className='text-lg font-bold text-warning  text-center display-6'>Elevate your style, <br /> elevate your <br /> <span className='text-warning'>mood</span> </h1>
//       <h1 className='my-1 text-sm  text-center  fst-italic '>
//         Dress like .
//         {sentence1.slice(0, currentIndex1)}
//       </h1>
//       <div className='d-flex gap-4 text-sm justify-center'>
//         <button className='btn btn-primary font-semibold py-2'>View More</button>
//       </div>
//     </div>
//   </div>
// </div>

//       </section>
//     </>
//   )
// }

// export default About;
"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const About = () => {
  const [sentence1] = useState(" you are already famous");
  const [currentIndex1, setCurrentIndex1] = useState(0);

  useEffect(() => {
    let interval1 = setInterval(() => {
      setCurrentIndex1((currentIndex) => currentIndex + 1);
    }, 100);
    return () => clearInterval(interval1);
  }, []);

  return (
    <section className="container mx-auto my-1 px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-4">
            <Image 
              src='/mali2.webp' 
              alt='Profile Image' 
              layout='responsive' 
              width={500} 
              height={500} 
              className='object-cover rounded-full'
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left p-4">
          <h1 className='text-xl md:text-2xl font-bold text-yellow-500 mb-4'>
            Elevate your style,  elevate your  <span className='text-yellow-500'>mood</span>
          </h1>
          <h2 className='text-lg italic mb-4'>
            Dress like {sentence1.slice(0, currentIndex1)}
          </h2>
          <p className='text-sm font-semibold'>
          Discover the ultimate marketplace for buying and selling pre-loved items across East Africa. <br/>
           Whether you’re looking to thrift unique finds, declutter your home, or connect with a community of like-minded sellers and buyers, <span className=' text-xl font-bold space-x-4'>Mali</span> is your go-to destination.
          </p>
          <Link href="/" >
            <button className='bg-[#c7a4aa] hover:bg-[#b3914aec] text-white font-semibold py-2 px-4 rounded' >
            Explore our platform
            </button>
          </Link>
        </div>  
      </div>
    </section>
  );
};

export default About;
