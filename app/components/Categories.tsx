"use client"
import React , {useState} from 'react'
import Image from 'next/image';

const Categories = () => {
    const [category, setCategory] = useState('');
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div 
                //onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/beach-house.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>All</span>
            </div>

            <div 
                //onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/beach-house.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>All</span>
            </div>
            <div 
                //onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/beach-house.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>All</span>
            </div>
            <div 
                //onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/beach-house.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>All</span>
            </div>
    </div>
  )
}

export default Categories
