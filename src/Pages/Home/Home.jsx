import Navbar from "../../Components/Shared/Navbar/Navbar";
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Wix from "../../Components/Wix/Wix";
import Builder from "../../Components/Builder/Builder";
import CDK from "../../Components/CDK/CDK";
import RelatedDeals from "../../Components/RelatedDeals/RelatedDeals";
import Footer from "../../Components/Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 md:w-4/5 lg:w-[70%] mx-auto">
        <h1 className="text-left text-3xl md:text-4xl lg:text-5xl text-[#2C384A] mt-6 md:mt-8 lg:mt-10 mb-5">
          Best Website builders in the US
        </h1>
        <hr />
        {/* date section  */}
        <section className="flex flex-col md:flex-row justify-between items-center py-3">
          <div className="flex gap-3 justify-center items-center">
            <div className="flex gap-2 items-center justify-center text-sm">
              <CiCircleCheck></CiCircleCheck> Last Updated - February 22, 2020
            </div>
            <div className="flex gap-2 justify-center items-center text-sm">
              <AiOutlineExclamationCircle></AiOutlineExclamationCircle>
              Advertising Disclosure
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <p className="text-sm flex items-center gap-2">
              Top Relevant <FaChevronDown></FaChevronDown>
            </p>
          </div>
        </section>
        <hr />
        {/* Links section */}
        <section className="my-8">
          <ul className="flex flex-wrap  items-center gap-6 md:gap-12 lg:gap-16 text-xs pl-5">
            <li>Tools</li>
            <li>AWS Builder</li>
            <li>Start Build</li>
            <li>Build Supplies</li>
            <li>Tooling</li>
            <li>BlueHosting</li>
          </ul>
          {/* direction section */}
          <div className="mt-5 md:mt-8 pl-5">
            <ul className="text-xs flex flex-wrap gap-1">
              <li className="flex  items-center">
                Home
                <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
              </li>
              <li className="flex  items-center">
                Hosting for all
                <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
              </li>
              <li className="flex  items-center">
                Hosting
                <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
              </li>
              <li className="flex  items-center">
                Hosting6
                <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
              </li>
              <li className="flex  items-center">
                Hosting5
                <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
              </li>
            </ul>
          </div>
        </section>
        {/* Main Section */}
        <section>
          <Wix number="1" showBadge={true} rating="9.8"></Wix>
          <Builder></Builder>
          <Wix number="3" showBadge={false} rating="9.3"></Wix>
          <CDK></CDK>
        </section>
        <RelatedDeals></RelatedDeals>
        <section className="mt-3 md:mt-6 lg:mt-10 py-5 flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h1 className="text-[#5C6874] text-2xl lg:text-3xl">
              Sign up and get exclusive special deals
            </h1>
          </div>
          <div className="flex md:w-1/2 mt-5 md:mt-0 justify-end w-full">
            <div className="flex w-full">
              <input
                type="text"
                name=""
                id=""
                className="bg-slate-100 rounded-l-lg w-[70%]  py-2"
              />
              <button className="text-[#FFFFFF] bg-[#1B88F4] py-2 px-7 md:px-5 lg:px-7 text-sm rounded-r-lg">
                Sign Up
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
