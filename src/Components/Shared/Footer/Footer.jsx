import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-[#212731] pt-14 pb-14 md:pb-28 lg:pb-44">
            <div className="w-11/12 md:w-4/5 lg:w-[70%] mx-auto flex justify-between">

            <div>
                <h1 className="text-[#FFFFFF] uppercase">Categories</h1>
                <ul className="text-[#B6BDC4] text-xs space-y-5 mt-3">
                    <li>Web Builder</li>
                    <li>Hosting</li>
                    <li>Data Center</li>
                    <li>Robotic-Automation</li>
                </ul>
            </div>
            <div>
                <h1 className="text-[#FFFFFF] uppercase">Contact</h1>
                <ul className="text-[#B6BDC4] text-xs space-y-5 mt-3">
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Service</li>
                    <li>Categories</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="flex items-center">
                <p className="text-[#B6BDC4] text-xs flex gap-2 items-center">United States <IoIosArrowDown></IoIosArrowDown></p>
            </div>
            </div>
        </div>
    );
};

export default Footer;