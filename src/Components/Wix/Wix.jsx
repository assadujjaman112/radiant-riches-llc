import { IoIosArrowDown, IoIosStar } from "react-icons/io";
import { CiTrophy } from "react-icons/ci";

const Wix = ({ number, showBadge,rating}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center relative pb-4 mt-5">
      <div className="flex flex-col items-center justify-center w-4/5 mx-auto lg:w-1/4">
        <img
          src="https://i.ibb.co/Tr5d2yh/187db358671328189d3da83955a6ffe9-Expires-1710115200-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-ax2.png"
          alt="Computer"
          className="w-[145px] h-[105px] "
        />
        <h1 className="text-xs text-[#626E79] mt-5">Builder 1</h1>
      </div>
      <div className="w-4/5 mx-auto lg:w-2/4 text-[#4B5665]">
        <p className="text-xs mt-6">
          <span className="font-semibold text-[#2C384A]">
            WixPro 72-Inch Responsive Website Builder-
          </span>
           Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue)
        </p>
        <h4 className="font-semibold text-sm mt-1 text-[#2C384A]">
          Main highlights
        </h4>
        <p className="text-xs ml-2 mt-2 mb-4">
          [What You Get]: Receive the WixPro website builder suite, access to
          premium design templates, an extensive library of widgets and apps,
          and detailed step-by-step guides.
        </p>
        <p className="text-sm font-normal flex gap-2 text-[#1B88F4] items-center">
          Show more <IoIosArrowDown></IoIosArrowDown>
        </p>
      </div>
      <div className="w-4/5 mx-auto lg:w-1/4 text-center">
        <div>
          <p className="text-[#074786] font-normal text-3xl">{rating}</p>
          <p className="text-[#074786] font-normal text-xs mt-2">Exceptional</p>
          <div className="flex justify-center mt-2">
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
            <IoIosStar className="text-yellow-500"></IoIosStar>
          </div>
          <div className="w-[180px] mx-auto mt-10">
            <button className="text-white bg-[#1B88F4] text-xs w-full h-8 rounded-lg">
              View
            </button>
          </div>
        </div>
      </div>
      <div className={`${showBadge? "absolute -top-3 lg:-left-4 left-2" : "absolute top-5 lg:-left-4 left-2"} `} >
        <div
          className={`bg-[#FF7724] flex gap-2 py-1 px-2 rounded-r-md ${
            showBadge ? "block" : "hidden"
          }`}
        >
          <CiTrophy className="text-white"></CiTrophy>
          <p className="text-xs text-white font-light">Best Choice</p>
        </div>
        <div className=" h-7 w-7 rounded-full border flex justify-center items-center mt-2">
          <span className=" text-xs text-[#626E79]">
            {number}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Wix;
