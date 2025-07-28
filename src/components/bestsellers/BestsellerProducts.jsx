import { bestSellerProducts } from '../../data/BestSellerProducts';
import ProductCard from '../products/ProductCard';

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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Button */}
      <button className="w-[256px] h-[52px] text-brand-lightblue text-sm font-bold border border-[#23A6F0] rounded-md px-4 py-2 mt-10">
        LOAD MORE PRODUCTS
      </button>
    </div>
  );
}
