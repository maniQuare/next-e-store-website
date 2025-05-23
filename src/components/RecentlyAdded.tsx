"use client";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const ProductsData = [
  {
    id: 1,
    img: "/shirt/shirt.png",
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: "/shirt/shirt2.png",
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "/shirt/shirt3.png",
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function RecentlyAdded() {
  return (
    <div>
      <div className="mx-4">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-[#31B9B5]">
            Top Rated Service for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-[#31B9B5]">
            Best Services
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-[#373973] dark:hover:bg-yellow-500 hover:text-white relative shadow-xl duration-300 group max-w-[300px] "
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-[#74F8FF] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[#74F8FF]">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* view all button */}
      <Link href={"#"} className="flex justify-center">
        <button className="text-center mt-10 cursor-pointer  bg-[#31B9B5] text-white py-1 px-5 rounded-md">
          View All Button
        </button>
      </Link>
    </div>
  );
}
