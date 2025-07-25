import { bestSellerProducts } from '../../data/BestSellerProducts';

export default function BestSellerProducts() {
  return (
    <div className="w-[1124px] h-[1241px] text-center mx-auto mt-40 ">
      {/* Top */}
      <div className="w-[692px] h-[102px] mx-auto">
        <h4 className="text-xl text-brand-lightgray">Featured Products</h4>

        <h3 className="text-2xl text-brand-DEFAULT font-bold my-2">
          BESTSELLER PRODUCTS
        </h3>

        <p className="text-sm text-brand-lightgray">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Photos */}
      <div className="w-[1092px] h-[789px] mt-10 grid grid-cols-5">
        {bestSellerProducts.map((product, index) => (
          <div key={index} className="text-center space-y-3">
            <img
              src={product.image}
              alt={product.title}
              className="w-[183px] h-[238px] object-cover mx-auto"
            />
            <h5 className="text-base font-bold text-brand-DEFAULT">
              {product.title}
            </h5>
            <p className="text-sm text-brand-lightgray">{product.department}</p>
            <div className="text-base font-bold">
              <span className="line-through text-[#BDBDBD] mr-2">
                ${product.price}
              </span>
              <span className="text-[#23856D] font-bold">
                ${product.discountedPrice}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="w-[256px] h-[52px] text-brand-lightblue text-sm font-bold border border-[#23A6F0] rounded-md px-4 py-2 mt-10">
        LOAD MORE PRODUCTS
      </button>
    </div>
  );
}
