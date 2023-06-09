/* eslint-disable @next/next/no-img-element */
import { VINTAGE_COLORS } from "@/data";
import React from "react";

interface CardItemProps {
  data: any;
  index: number;
  className: string;
}

const CardItem: React.FC<Partial<CardItemProps>> = ({
  data,
  className,
  index = 0,
}) => {
  return (
    <div data-aos="fade-in" data-aos-delay="200" className={className}>
      <div className="m-2 py-4 px-3 lg:mt-16 max-w-[350px] min-w-[300px] overflow-hidden bg-[#fff] rounded-3xl shadow-xl ">
        <div className="p-3 overflow-hidden rounded-3xl">
          <div
            style={{
              backgroundColor: VINTAGE_COLORS?.[index] || "aqua",
            }}
            className={`relative overflow-hidden bg-cover bg-no-repeat rounded-3xl flex justify-center items-center py-7 ${data?.bgColor} `}
          >
            <img
              src={data?.image}
              className="rounded-2xl transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
              style={{
                width: "70%",
                minHeight: "130px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="rounded-b-3xl">
          <p className="pl-2 text-gray-500 pt-5 uppercase text-[12px] font-medium">
            {data?.technical?.join(", ")}
          </p>
          <h2 className="pl-2 text-gray-800 text-xl font-bold pt-2 ">
            {data?.name}
          </h2>
          <div className="w-5/6 m-auto">
            <p className="text-justify text-gray-500 pt-3">
              You can now listen to millions of songs, audiobooks ands podcasts
              on any device anywhere you like!
            </p>
          </div>

          <a
            target="_blank"
            href={data?.liveSite}
            className="my-2 group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-center cursor-pointer h-12  py-0 px-6 overflow-hidden "
          >
            <strong className="font-medium text-blue-500 ">See project</strong>
            <svg
              className="ml-1 rotate-180 fill-blue-500 group-hover:fill-blue-500"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M17.6954 12.4962L21.6468 12.1467C22.5335 12.1467 23.2525 12.8727 23.2525 13.7681C23.2525 14.6635 22.5335 15.3895 21.6468 15.3895L17.6954 15.04C16.9997 15.04 16.4357 14.4705 16.4357 13.7681C16.4357 13.0645 16.9997 12.4962 17.6954 12.4962"
              ></path>
              <path d="M4.42637 12.5604C4.48813 12.4981 4.71885 12.2345 4.93559 12.0157C6.19989 10.6449 9.50107 8.40347 11.228 7.71751C11.4902 7.60808 12.1532 7.37512 12.5086 7.35864C12.8477 7.35864 13.1716 7.43748 13.4804 7.59279C13.8661 7.81046 14.1738 8.15403 14.3439 8.55878C14.4522 8.83882 14.6224 9.68009 14.6224 9.69539C14.7913 10.6143 14.8834 12.1086 14.8834 13.7606C14.8834 15.3325 14.7913 16.7656 14.6527 17.6999C14.6375 17.7163 14.4674 18.76 14.2821 19.1177C13.943 19.7719 13.28 20.1766 12.5704 20.1766H12.5086C12.046 20.1613 11.0742 19.7554 11.0742 19.7413C9.43931 19.0553 6.21621 16.9221 4.92044 15.5043C4.92044 15.5043 4.55455 15.1396 4.39608 14.9125C4.14904 14.5854 4.02552 14.1806 4.02552 13.7759C4.02552 13.3241 4.16419 12.904 4.42637 12.5604"></path>
            </svg>
            <span className="absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
