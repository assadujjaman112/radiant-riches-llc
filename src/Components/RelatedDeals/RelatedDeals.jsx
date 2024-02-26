import DealsCard from "../DealsCard/DealsCard";


const RelatedDeals = () => {
    return (
        <div className="mt-5 md:mt-8 lg:mt-12">
            <h1 className="text-[#2C384A] text-3xl text-left mb-5 md:mb-8 lg:mb-12">Related deals you might like for</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <DealsCard></DealsCard>
                <DealsCard></DealsCard>
                <DealsCard></DealsCard>
            </div>
        </div>
    );
};

export default RelatedDeals;