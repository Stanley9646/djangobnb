"use client";

import Image from "next/image";

import { ChangeEvent, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiServices";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import Categories from "../addproperty/Categories";

const AddPropertyModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<string[]>([]);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataSize, setDataSize] = useState("");
  const [dataBrand, setDataBrand] = useState("");
  const [dataImage, setDataImage] = useState<File | null>(null);
  const addPropertyModal = useAddPropertyModal();
  const router = useRouter();
  // Set datas

  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tmpImage = event.target.files[0];

      setDataImage(tmpImage);
    }
  };

  const submitForm = async () => {
    console.log("submitForm");

    if (
      dataCategory &&
      dataTitle &&
      dataDescription &&
      dataSize&&
      dataBrand&&
      dataPrice &&
      dataImage
    ) {
      const formData = new FormData();
      formData.append("category", dataCategory);
      formData.append("title", dataTitle);
      formData.append("description", dataDescription);
      formData.append("price", dataPrice);
      formData.append("size", dataSize);
      formData.append("brand", dataBrand);
      formData.append("image", dataImage);

      const response = await apiService.post(
        "/api/properties/create/",
        formData
      );

      if (response.success) {
        console.log("SUCCESS :-D");

        router.push("/?added=true");

        addPropertyModal.close();
      } else {
        console.log("Error");

        const tmpErrors: string[] = Object.values(response).map(
          (error: any) => {
            return error;
          }
        );

        setErrors(tmpErrors);
      }
    }
  };

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose category</h2>

          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />

          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="mb-6 text-2xl">Describe your item</h2>

          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-row justify-center space-x-2">
            {" "}
            <CustomButton
              label="Previous"
              className="mb-2 bg-black hover:bg-gray-800"
              onClick={() => setCurrentStep(1)}
            />
            <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
          </div>
        </>
      ) : currentStep == 3 ? (
        <>
          <h2 className="mb-6 text-2xl">Details</h2>

          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Price</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e) => setDataPrice(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>Brand</label>
              <input
                type="text"
                value={dataBrand}
                onChange={(e) => setDataBrand(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>Size</label>
              <input
                type="number"
                value={dataSize}
                onChange={(e) => setDataSize(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>

           
          </div>

          <div className="flex flex-row justify-center space-x-2">
            {" "}
            <CustomButton
              label="Previous"
               className="mb-2 bg-[#c7a4aa] hover:bg-[#b3914aec]"
              onClick={() => setCurrentStep(2)}
            />
            <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
          </div>
        </>
      ) : currentStep == 4 ? (
        <>
          <div className="flex flex-row justify-center space-x-2">
            {" "}
            <CustomButton
              label="Previous"
              className="mb-2 bg-[#c7a4aa] hover:bg-[#b3914aec]"
              onClick={() => setCurrentStep(3)}
            />
            <CustomButton label="Next"   className="mb-2 bg-[#c7a4aa] hover:bg-[#b3914aec]" onClick={() => setCurrentStep(5)} />
          </div>
        </>
      ) : (
        <>
          <h2 className="mb-6 text-2xl">Image</h2>

          <div className="pt-3 pb-6 space-y-4">
            <div className="py-4 px-6 bg-[#e9c3c3] hover:bg-[#b3914aec] text-white rounded-xl">
              <input type="file" accept="image/*" onChange={setImage} />
            </div>

            {dataImage && (
              <div className="w-[200px] h-[150px] relative">
                <Image
                  fill
                  alt="Uploaded image"
                  src={URL.createObjectURL(dataImage)}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            )}
          </div>

          {errors.map((error, index) => {
            return (
              <div
                key={index}
                className="p-5 mb-4 bg-[#c7a4aa] hover:bg-[#b3914aec] text-white rounded-xl opacity-80"
              >
                {error}
              </div>
            );
          })}

          <div className="flex flex-row justify-center space-x-2">
            {" "}
            <CustomButton
              label="Previous"
              className="mb-2 bg-black hover:bg-gray-800"
              onClick={() => setCurrentStep(4)}
            />
            <CustomButton label="Submit" onClick={submitForm} />
          </div>
        </>
      )}
    </>
  );
  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label="Add property"
        content={content}
      />
    </>
  );
};

export default AddPropertyModal;
