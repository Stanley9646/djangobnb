import Image from 'next/image';

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div 
                    onClick={() => setCategory('shoes')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/shoescategory.jpg"
                        alt="Shoes"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Shoes</span>
                </div>

                <div 
                    onClick={() => setCategory('t-shirts')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villas' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/tshirtcategory.jpg"
                        alt="T-shirts"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>T-shirts</span>
                </div>

                <div 
                    onClick={() => setCategory('shirts')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/shirtscategory.jpg"
                        alt="Shirts"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Shirts</span>
                </div>

                <div 
                    onClick={() => setCategory('trousers')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/trouserscategory.jpg"
                        alt="Trousers"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Trousers</span>
                </div>
                <div 
                    onClick={() => setCategory('jackets')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/jacketcategory.jpg"
                        alt="Jackets"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Jackets</span>
                </div>
                <div 
                    onClick={() => setCategory('caps')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/capcategory.jpg"
                        alt="caps"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Caps</span>
                </div>
            </div>
        </>
    )
}

export default Categories;