import { bestsellerproducts } from '../../data/BestSellerProducts';

export default function BestsellerProducts() {
  return (
    <div className="w-[1124px] h-[1241px] text-center mx-auto my-40 ">
      {/* Top */}
      <div className="w-[692px] h-[102px] mx-auto">
        <h4 className="text-xl text-[#737373]">Featured Products</h4>

        <h3 className="text-2xl text-[#252B42] font-bold">
          BESTSELLER PRODUCTS
        </h3>

        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Photos */}
      <div className="w-[1092px] h-[789px] mt-10 grid grid-cols-5">
        {bestsellerproducts.map((product, index) => (
          <div key={index} className="text-center space-y-3">
            <img
              src={product.image}
              alt={product.title}
              className="w-[183px] h-[238px] object-cover mx-auto"
            />
            <h5 className="text-base font-bold text-[#252B42]">
              {product.title}
            </h5>
            <p className="text-sm text-[#737373]">{product.department}</p>
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
    </div>
  );
}
