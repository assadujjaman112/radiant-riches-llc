import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full bg-[#212731] flex flex-col md:flex-row justify-center items-center py-4 gap-7 lg:gap-20">
      <div className="relative">
        <input
          type="text"
          name=""
          id=""
          className="w-[260px] h-10 rounded-lg"
        />
        <button>
          <CiSearch className="absolute top-3 left-3 text-xl"></CiSearch>
        </button>
      </div>
      <ul className="flex justify-center items-center gap-7 lg:gap-14 text-white text-sm font-normal">
        <li className="hover:underline-blue">Categories</li>
        <li className="hover:underline-blue">WebSite Builders</li>
        <li className="hover:underline-blue">Today&apos;s deals</li>
      </ul>
    </div>
  );
};

export default Navbar;
