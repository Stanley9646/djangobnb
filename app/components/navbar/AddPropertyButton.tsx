'use client';

import useLoginModal from "@/app/hooks/useLoginModal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

interface AddPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal();

    const airbnbYourHome = () => {
        if (userId) {
            //addPropertyModal.open()
            loginModal.open();
        } else {
            //loginModal.open();
            addPropertyModal.open()
        }
    }

    return (
        <div 
            onClick={airbnbYourHome}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
        >
           List your items
        </div>
    )
}

export default AddPropertyButton;