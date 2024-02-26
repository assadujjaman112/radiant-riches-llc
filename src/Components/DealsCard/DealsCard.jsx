const DealsCard = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-[#FFFFFF] py-5 rounded-lg">
        <img
          src="https://i.ibb.co/Tr5d2yh/187db358671328189d3da83955a6ffe9-Expires-1710115200-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-ax2.png"
          alt="Deals Image"
          className="w-[140px] h-[105px]"
        />
      </div>
      <div className="px-7 mt-10">
        <div className="flex items-center text-xs font-light gap-2">
          <p className="text-[#074786] bg-[#F2F4F7] px-2 py-1 rounded-lg w-fit">
            20% off
          </p>
          <p className="text-[#074786] bg-[#F2F4F7] px-2 py-1 rounded-lg w-fit">
            Limited time
          </p>
        </div>
        <h4 className="text-[#626E79] py-2 text-center font-semibold">
          Webbuilder 1
        </h4>
        <p className="text-[#626E79] font-light text-sm my-1">
          Computer Modern classic with wix support
        </p>
        <p className="text-[#5C6874]">
          $39.96 <span className="text-xs font-light">$49.96</span>{" "}
          <span className="text-[#EF4C5D] text-xs">(20% Off)</span>
        </p>
        <div className="w-full mx-auto ">
          <button className="text-white bg-[#1B88F4] w-full rounded-lg py-1 mt-3 text-sm">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealsCard;
