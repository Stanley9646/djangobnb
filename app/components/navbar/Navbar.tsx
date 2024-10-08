import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SearchFilters from './SearchFilters';
import UserNav from './UserNav';
import AddPropertyButton from './AddPropertyButton';
import { getUserId } from '@/app/lib/actions';
const Navbar = async () => {
  const userId = await getUserId();

    console.log('userId:', userId);

  return (
    <nav className='w-full fixed top-0 left-0 py-6 border-b bg-white z-10'>
        <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
        <Link href="/">
                        <Image
                            src="/mali1.webp"
                            alt="DjangoBnb logo"
                            width={100}
                            height={100}
                            className='rounded-full'
                        />
                    </Link>

                    

                    <div className="flex space-x-6">
                    <SearchFilters/>
                    
                    </div>
                    <div className="flex items-center space-x-6">
                        <AddPropertyButton />

                        <Link href="/about"
                    className = "p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200">
                       About the platform
                    </Link>
                       <UserNav userId={userId}/>
                    </div>
        </div>
        </div>
      
    </nav>
  )
}

export default Navbar
