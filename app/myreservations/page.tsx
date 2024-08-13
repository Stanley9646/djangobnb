// import Image from "next/image";
// import apiService from "../services/apiServices";
// import Link from "next/link";

// const MyReservationsPage = async () => {
//     const reservations = await apiService.get('/api/auth/myreservations/')

//     return (
//         <main className="max-w-[1500px] mx-auto px-6 pb-6">
//             <h1 className="my-6 text-2xl">Cart-Shopping List Items</h1>

//             <div className="space-y-4">
//                 {reservations.map((reservation: any) => {
//                     return (              
//                         <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
//                             <div className="col-span-1">
//                                 <div className="relative overflow-hidden aspect-square rounded-xl">
//                                     <Image
//                                         fill
//                                         src={reservation.property.image_url}
//                                         className="hover:scale-110 object-cover transition h-full w-full"
//                                         alt="Beach house"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="col-span-1 md:col-span-3">
//                                 <h2 className="mb-4 text-xl">{reservation.property.title}</h2>

                         

//                                 <p className="mb-2"><strong>Size:</strong> {reservation.size}</p>
//                                 <p className="mb-2"><strong>Brand:</strong> {reservation.brand}</p>
//                                 <p className="mb-2"><strong>Total price:</strong> ${reservation.total_price}</p>

//                                 <Link 
//                                     href={`/properties/${reservation.property.id}`}
//                                     className="mt-6 inline-block cursor-pointer py-4 px-6 bg-[#c7a4aa] hover:bg-[#b3914aec] transition text-white rounded-xl"
//                                 >
//                                     Preview the Item
//                                 </Link>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </main>
//     )
// }

// export default MyReservationsPage;

"use client";

import Image from "next/image";
import apiService from "../services/apiServices";
import Link from "next/link";
import { useState, useEffect } from "react";

const MyReservationsPage = () => {
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Optionally handle loading state
    const [error, setError] = useState<string | null>(null); // Optionally handle error state

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const data = await apiService.get('/api/auth/myreservations/');
                
                setReservations(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch reservations:", error);
                setError('Failed to fetch reservations');
                setLoading(false);
            }
        };

        fetchReservations();
    }, []);

    const handleDelete = async (reservationId: string) => {
        try {
            await apiService.delete(`/api/auth/myreservations/${reservationId}/delete/`);
            setReservations(prevReservations => 
                prevReservations.filter((reservation: any) => reservation.id !== reservationId)
            );
        } catch (error) {
            console.error("Failed to delete the reservation:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Optionally display a loading state
    }

    if (error) {
        return <div>{error}</div>; // Optionally display an error message
    }

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">Cart-Shopping List Items</h1>

            <div className="space-y-4">
                {reservations.map((reservation: any) => (
                    <div key={reservation.id} className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill
                                    src={reservation.property.image_url}
                                    className="hover:scale-110 object-cover transition h-full w-full"
                                    alt={reservation.property.title}
                                />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-3">
                            <h2 className="mb-4 text-xl">{reservation.property.title}</h2>
                            <p className="mb-2"><strong>Size:</strong> {reservation.size}</p>
                            <p className="mb-2"><strong>Brand:</strong> {reservation.brand}</p>
                            <p className="mb-2"><strong>Total price:</strong> ${reservation.total_price}</p>

                            <div className="flex items-center space-x-4">
                                <Link 
                                    href={`/properties/${reservation.property.id}`}
                                    className="mt-6 inline-block cursor-pointer py-4 px-6 bg-[#c7a4aa] hover:bg-[#b3914aec] transition text-white rounded-xl"
                                >
                                    Preview the Item
                                </Link>
                                <button 
                                    onClick={() => handleDelete(reservation.id)}
                                    className="mt-6 inline-block cursor-pointer py-4 px-6 bg-red-500 hover:bg-red-600 transition text-white rounded-xl"
                                >
                                    Delete Item
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default MyReservationsPage;


