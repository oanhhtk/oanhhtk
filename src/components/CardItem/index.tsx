import Image from "next/image";
import React from "react";

interface CardItemProps {}

const CardItem: React.FC<CardItemProps> = () => {
  return (
    <div data-aos="fade-in" data-aos-delay="700">
      <div className="m-2 lg:mt-16 h-full max-w-[350px] overflow-hidden bg-[#fff] rounded-3xl min-h-[400px] shadow-2xl ">
        <div className="p-3 overflow-hidden rounded-3xl">
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-3xl">
            <img
              src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
              className="rounded-3xl transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
        </div>
        <div className="rounded-b-3xl ">
          <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
            Order Summary
          </h2>
          <div className="w-5/6 m-auto">
            <p className="text-center text-gray-500 pt-5">
              You can now listen to millions of songs, audiobooks ands podcasts
              on any device anywhere you like!
            </p>
          </div>

          {/* <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
            <button className="lg:text-sm text-lg font-bold">
              Proceed to Payment
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
