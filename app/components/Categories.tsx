'use client';

import { useState } from 'react';
import Image from 'next/image';
import useSearchModal, {SearchQuery} from '../hooks/useSearchModal';

const Categories = () => {
    const searchModal = useSearchModal();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            size: searchModal.query.size,
            brand: searchModal.query.brand,
            category: _category
        }

        searchModal.setQuery(query);
    }

    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div 
                onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/mali1.webp"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>All</span>
            </div>
            <div 
                onClick={() => _setCategory('shoes')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'shoes' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/shoescategory.jpg"
                    alt="shoes"
                    width={20}
                    height={20}
                />

                <span className='text-xs'> Shoes</span>
            </div>
            
            <div 
                onClick={() => _setCategory('t-shirts')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 't-shirts' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/tshirtcategory.jpg"
                    alt="T-shirts"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>T-shirts</span>
            </div>

            <div 
                onClick={() => _setCategory('shirts')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'shirts' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/shirtscategory.jpg"
                    alt="Shirts"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>Shirts</span>
            </div>

            <div 
                onClick={() => _setCategory('trousers')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'trousers' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/trouserscategory.jpg"
                    alt="Trousers"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>Trousers</span>
            </div>

            <div
                onClick={() => _setCategory('jackets')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'jackets' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/jacketcategory.jpg"
                    alt="Jackets"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>Jackets</span>
            </div>
            <div
                onClick={() => _setCategory('caps')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'caps' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/capcategory.jpg"
                    alt="Caps"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>Caps</span>
            </div>
            
        </div>
    )
}

export default Categories;