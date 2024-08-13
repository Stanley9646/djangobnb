// 'use client';

// import Modal from "./Modal";
// import { useState } from "react";
// import CustomButton from "../forms/CustomButton";
// import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal";
// import SelectCountry, {SelectCountryValue} from "../forms/SelectCountry";



// const SearchModal = () => {
//     let content = (<></>);
//     const searchModal = useSearchModal();
//     const [size, setSize] = useState<string>('1');
//     const [typeofBrand, settypeofBrand] = useState<string>('0');
//     const [country, setCountry] = useState<SelectCountryValue>();


//     const closeAndSearch = () => {
//         const newSearchQuery: SearchQuery = {
//             country: country?.label,
           
//             size: parseInt(size),
//             brand: typeofBrand,
            
//             category: ''
//         }

//         searchModal.setQuery(newSearchQuery);
//         searchModal.close();
//     }

    
   
//     // Contents

//     const contentLocation = (
//         <>
//             <h2 className="mb-6 text-2xl">Where do you want to go?</h2>

//             <SelectCountry
//                 value={country}
//                 onChange={(value) => setCountry(value as SelectCountryValue)}
//             />

//             <div className="mt-6 flex flex-row gap-4">
//                 <CustomButton
//                     label="Check in date ->"
//                     onClick={() => searchModal.open('checkin')}
//                 />
//             </div>
//         </>
//     )

//     const contentCheckin = (
//         <>
//             <h2 className="mb-6 text-2xl">When do you want to check in?</h2>


//             <div className="mt-6 flex flex-row gap-4">
//                 <CustomButton
//                     label="<- Location"
//                     onClick={() => searchModal.open('location')}
//                 />

//                 <CustomButton
//                     label="Check out date ->"
//                     onClick={() => searchModal.open('checkout')}
//                 />
//             </div>
//         </>
//     )

//     const contentCheckout = (
//         <>
//             <h2 className="mb-6 text-2xl">When do you want to check out?</h2>

            

//             <div className="mt-6 flex flex-row gap-4">
//                 <CustomButton
//                     label="<- Check in date"
//                     onClick={() => searchModal.open('checkin')}
//                 />

//                 <CustomButton
//                     label="Details ->"
//                     onClick={() => searchModal.open('details')}
//                 />
//             </div>
//         </>
//     )

//     const contentDetails = (
//         <>
//             <h2 className="mb-6 text-2xl">Details</h2>

//             <div className="space-y-4">
//                 <div className="space-y-4">
//                     <label>Size</label>
//                     <input 
//                         type="number" 
//                         min="1" 
//                         value={size} 
//                         placeholder="Size..."
//                         onChange={(e) => setSize(e.target.value)} 
//                         className="w-full h-14 px-4 border border-gray-300 rounded-xl"
//                     />
//                 </div>

//                 <div className="space-y-4">
//                     <label>Type of Brand:</label>
//                     <input 
//                         type="number" 
//                         min="1" 
//                         value={typeofBrand} 
//                         placeholder="Brand..."
//                         onChange={(e) => settypeofBrand(e.target.value)} 
//                         className="w-full h-14 px-4 border border-gray-300 rounded-xl"
//                     />
//                 </div>

              
//             </div>

//             <div className="mt-6 flex flex-row gap-4">
//                 <CustomButton
//                     label="<- Check out date"
//                     onClick={() => searchModal.open('checkout')}
//                 />

//                 <CustomButton
//                     label="Search"
//                     onClick={closeAndSearch}
//                 />
//             </div>
//         </>
//     )

//     if (searchModal.step == 'location') {
//         content = contentLocation;
//     } else if (searchModal.step == 'checkin') {
//         content = contentCheckin;
//     } else if (searchModal.step == 'checkout') {
//         content = contentCheckout;
//     } else if (searchModal.step == 'details') {
//         content = contentDetails;
//     }

//     return (
//         <Modal
//             label="Search"
//             content={content}
//             close={searchModal.close}
//             isOpen={searchModal.isOpen}
//         />
//     )
// }

// export default SearchModal;

'use client';

import Modal from "./Modal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal";

const SearchModal = () => {
    const searchModal = useSearchModal();
    const [size, setSize] = useState<string>('1');
    const [typeofBrand, settypeofBrand] = useState<string>('0');

    const closeAndSearch = () => {
        const newSearchQuery: SearchQuery = {
            size: parseInt(size),
            brand: typeofBrand,
            country: '', // Set to empty string or a default value if needed
            category: '' // Set to empty string as requested
        }

        searchModal.setQuery(newSearchQuery);
        searchModal.close();
    }

    const contentDetails = (
        <>
            <h2 className="mb-6 text-2xl">Details</h2>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label>Size</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={size} 
                        placeholder="Size..."
                        onChange={(e) => setSize(e.target.value)} 
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>

                <div className="space-y-4">
                    <label>Type of Brand:</label>
                    <input 
                        type="text" 
                        
                        value={typeofBrand} 
                        placeholder="Brand..."
                        onChange={(e) => settypeofBrand(e.target.value)} 
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="Search"
                    onClick={closeAndSearch}
                />
            </div>
        </>
    );

    return (
        <Modal
            label="Search"
            content={contentDetails}
            close={searchModal.close}
            isOpen={searchModal.isOpen}
        />
    )
}

export default SearchModal;
