export default function ProductCard({ product }) {
  return (
    <div className="text-center space-y-3">
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
  );
}
