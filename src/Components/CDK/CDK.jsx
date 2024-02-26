import { IoIosArrowDown, IoIosStar, IoIosStarHalf } from "react-icons/io";
import { BiCheck } from "react-icons/bi";
const CDK = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between  relative pb-4 mt-5">
      <div className="flex flex-col items-center mt-10 w-4/5 mx-auto lg:w-1/4">
        <img
          src="https://i.ibb.co/Tr5d2yh/187db358671328189d3da83955a6ffe9-Expires-1710115200-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-ax2.png"
          alt="Computer"
          className="w-[145px] h-[105px] "
        />
        <h1 className="text-xs text-[#626E79] mt-5">CDK</h1>
      </div>
      <div className="w-4/5 mx-auto lg:w-2/4 text-[#4B5665]">
        <p className="text-xs mt-6">
          <span className="font-semibold text-[#2C384A]">
            CDK Responsive Builder:
          </span>
          An extensive library of widgets and apps, and detailed step-by-step
          guides
        </p>
        <p className="text-[#074786] text-xs my-2">26% Off</p>
        <h4 className="font-semibold text-sm mt-1 text-[#2C384A]">
          Main highlights
        </h4>
        <div className="bg-[#FFF4ED] px-3 py-2 rounded-lg my-2 space-y-1 ml-3">
          <div className="flex gap-3 items-center">
            <p className="px-2 py-2 bg-white rounded-lg text-xs font-light text-[#1B88F4]">
              9.9
            </p>
            <p className="text-xs font-light text-[#4B5665]">
              Building Responsive
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="px-2 py-2 bg-white rounded-lg text-xs font-light text-[#1B88F4]">
              8.9
            </p>
            <p className="text-xs font-light text-[#4B5665]">Cool</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="px-2 py-2 bg-white rounded-lg text-xs font-light text-[#1B88F4]">
              8.9
            </p>
            <p className="text-xs font-light text-[#4B5665]">Docs</p>
          </div>
        </div>
        <h4 className="text-[#2C384A] text-sm font-normal my-2">
          Why we love it
        </h4>
        <div className="my-2">
          <p className="flex items-center gap-2 text-xs text-[#4B5665]">
            <BiCheck className="rounded-full text-blue-500  bg-blue-200 "></BiCheck>{" "}
            Documentation
          </p>
          <p className="flex items-center gap-2 text-xs text-[#4B5665]">
            <BiCheck className="rounded-full text-blue-500  bg-blue-200 "></BiCheck>{" "}
            Easy Use
          </p>
          <p className="flex items-center gap-2 text-xs text-[#4B5665]">
            <BiCheck className="rounded-full text-blue-500  bg-blue-200 "></BiCheck>{" "}
            Out of box
          </p>
        </div>

        <p className="text-sm font-normal flex gap-2 text-[#1B88F4] items-center">
          Show more <IoIosArrowDown></IoIosArrowDown>
        </p>
      </div>
      <div className="w-4/5 mx-auto lg:w-1/4 text-center flex flex-col justify-between">
        <div>
          <p className="text-[#074786] font-normal text-3xl">9.1</p>
          <p className="text-[#074786] font-normal text-xs mt-2">Very Good</p>
          <div className="flex justify-center mt-2">
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStarHalf className="text-yellow-500"></IoIosStarHalf>
          </div>
        </div>
        <div className="w-[180px] mt-10 md:mt-13 lg:mt-0 mx-auto">
          <button className="text-white bg-[#1B88F4] text-xs w-full h-8 rounded-lg">
            View
          </button>
        </div>
      </div>
      <div className="absolute top-7 left-2 lg:-left-4 ">
        <div className=" h-7 w-7 rounded-full border flex justify-center items-center mt-2">
          <span className=" text-xs text-[#626E79]">4</span>
        </div>
      </div>
    </div>
  );
};

export default CDK;
