"use client"
import Image from 'next/image';
import React , {useState, useEffect} from 'react';


const Hero = () => {
  const [sentence1] = useState(" you are already famous");
  const [currentIndex1, setCurrentIndex1] = useState(0);

  useEffect(() => {
//counter of the sentence
    let interval1 = setInterval(() => {
      setCurrentIndex1((currentIndex) => currentIndex + 1);
    }, 100);
    return () => 
    clearInterval(interval1);
    }, []);
  return (
    <>
      <section className="grid grid-cols-2 mt-2">
        <div className='container'>
  <div className='row'>
    <div className='col-md-6 py-12 bg-white bg-opacity-80 aspect-w-16 aspect-h-9'>
      <Image src='/mali2.webp' className='img-fluid' alt='Profile Image' width={100} height={100}/>
    </div>
    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center px-'>
      <h1 className='text-lg font-bold text-warning  text-center display-6'>Elevate your style, <br /> elevate your <br /> <span className='text-warning'>mood</span> </h1>
      <h1 className='my-1 text-sm  text-center  fst-italic '>
        Dress like .
        {sentence1.slice(0, currentIndex1)}
      </h1>
      <div className='d-flex gap-4 text-sm justify-center'>
        <button className='btn btn-primary font-semibold py-2'>View More</button>
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  )
}

export default Hero;

