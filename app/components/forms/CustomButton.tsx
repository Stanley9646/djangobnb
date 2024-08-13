import React from 'react'
interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
  return (
    <div
    onClick={onClick}
    className="w-full py-4 bg-[#c7a4aa] hover:bg-[#b3914aec] text-white text-center rounded-xl transition cursor-pointer "
    >
      {label}
    </div>
  )
}

export default CustomButton
