import { IoIosArrowDown, IoIosStar, IoIosStarHalf } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
const Builder = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center relative pb-4 mt-5">
      <div className="flex flex-col items-center justify-center w4/5 mx-auto lg:w-1/4">
        <img
          src="https://i.ibb.co/Tr5d2yh/187db358671328189d3da83955a6ffe9-Expires-1710115200-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-ax2.png"
          alt="Computer"
          className="w-[145px] h-[105px] "
        />
        <h1 className="text-xs text-[#626E79] mt-5">Builder</h1>
      </div>
      <div className="w-4/5 mx-auto lg:w-2/4 text-[#4B5665]">
        <p className="text-xs mt-6">
          <span className="font-semibold text-[#2C384A]">
            SiteCraft 68-Inch Ultimate Web Design Studio-
          </span>
          Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
          Dynamic Websites and E-commerce Platforms (Green/White)
        </p>
        <h4 className="font-semibold text-sm mt-1 text-[#2C384A]">
          Main highlights
        </h4>
        <p className="text-xs ml-2 mt-2 mb-4">
          [What You Get]: Gain access to the SiteCraft design studio, featuring
          a robust selection of design elements, SEO optimization tools, and
          e-commerce integrations.
        </p>
        <p className="text-sm font-normal flex gap-2 text-[#1B88F4] items-center">
          Show more <IoIosArrowDown></IoIosArrowDown>
        </p>
      </div>
      <div className=" w-4/5 mx-auto lg:w-1/4 text-center">
        <div>
          <p className="text-[#074786] font-normal text-3xl">9.5</p>
          <p className="text-[#074786] font-normal text-xs mt-2">Excellent</p>
          <div className="flex justify-center mt-2">
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStarHalf className="text-yellow-500"></IoIosStarHalf>
          </div>
          <div className="w-[180px] mx-auto mt-10 ">
            <button className="text-white bg-[#1B88F4] text-xs w-full h-8 rounded-lg">
              View
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 lg:-left-4 left-2">
        <div
          className="bg-[#FF7724] flex gap-2 py-1 px-2 rounded-r-md"
        >
          <IoDiamond className="text-white"></IoDiamond>
          <p className="text-xs text-white font-light">Best Value</p>
        </div>
        <div className=" h-7 w-7 rounded-full border flex justify-center items-center mt-2">
          <span className=" text-xs text-[#626E79]">2</span>
        </div>
      </div>
    </div>
  );
};

export default Builder;
