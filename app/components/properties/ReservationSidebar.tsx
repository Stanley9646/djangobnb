// 'use client';

// import {useState, useEffect} from 'react';

// import useLoginModal from '@/app/hooks/useLoginModal';



// export type Property ={
//     id: string;
//     size: number;
//     price: number;
// }

// interface ReservationSidebarProps {
//     userId: string | null,
//     property: Property
// }

// const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
//     property,
//     userId
// }) => {
//     const loginModal = useLoginModal();

//     const [fee, setFee] = useState<number>(0);
   
//     const [totalPrice, setTotalPrice] = useState<number>(0);
//     const [size, setSize] = useState<string>('1');
//     const guestsRange = Array.from({ length: property.size }, (_, index) => index + 1)



 
//     const getReservations = async () => {
       
//     }

//     useEffect(() => {
//         getReservations();
        
        
//                 const _fee = 100

//                 setFee(_fee);
//                 setTotalPrice((property.price) + _fee);
             
//             } 
//         , [])

//     return (
//         <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
//             <h2 className="mb-5 text-2xl">${property.price} per night</h2>

            

//             <div className="mb-6 p-3 border border-gray-400 rounded-xl">
//                 <label className="mb-2 block font-bold text-xs">Size</label>

//                 <select 
//                     value={size}
//                     onChange={(e) => setSize(e.target.value)}
//                     className="w-full -ml-1 text-xm"
//                 >
//                     {guestsRange.map(number => (
//                         <option key={number} value={number}>{number}</option>
//                     ))}
//                 </select>
//             </div>

//             <div 
               
//                 className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl"
//             >
//                 Pay Via Mpesa
//             </div>

//             <div className="mb-4 flex justify-between align-center">
//                 <p>${property.price}</p>

//                 <p>${property.price }</p>
//             </div>

//             <div className="mb-4 flex justify-between align-center">
//                 <p>Tax</p>

//                 <p>Ksh. {fee}</p>
//             </div>

//             <hr />

//             <div className="mt-4 flex justify-between align-center font-bold">
//                 <p>Total</p>

//                 <p>Ksh. {totalPrice}</p>
//             </div>
//         </aside>
//     )
// }

// export default ReservationSidebar;
'use client';

import { useState, useEffect } from 'react';
import useLoginModal from '@/app/hooks/useLoginModal';

export type Property = {
    id: string;
    size: number;
    price: number;
};

interface ReservationSidebarProps {
    userId: string | null;
    property: Property;
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({ property, userId }) => {
    const loginModal = useLoginModal();

    const [fee, setFee] = useState<number>(100);  // Set an initial fee
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [size, setSize] = useState<string>('1');
    const guestsRange = Array.from({ length: 50 }, (_, index) => index + 1);  // Set the range up to 50

    useEffect(() => {
        // Calculate the total price based on property price and fee
        const calculateTotalPrice = () => {
            const propertyPrice = property.price || 0; // Ensure property.price is a number
            const _fee = fee || 0; // Ensure fee is a number

            setTotalPrice(propertyPrice + _fee);
        };

        calculateTotalPrice();
    }, [property.price, fee]); // Recalculate when property.price or fee changes

    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">Ksh. {property.price} Order</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Size</label>
                <select 
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full -ml-1 text-xm"
                >
                    {guestsRange.map(number => (
                        <option key={number} value={number}>{number}</option>
                    ))}
                </select>
            </div>
            

            <div 
                className="w-full mb-6 py-6 text-center text-white bg-[#c7a4aa] hover:bg-[#b3914aec] transition rounded-xl"
            >
                Pay Via Mpesa
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Ksh{property.price}</p>
                <p>Ksh{property.price}</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Tax</p>
                <p>Ksh. {fee}</p>
            </div>

            <hr />

            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>Ksh. {totalPrice}</p>
            </div>
        </aside>
    );
};

export default ReservationSidebar;
