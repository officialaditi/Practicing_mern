import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="border-2 border-slate-600 bg-black shadow-lg rounded-xl py-2 px-4">
        {/* img */}
        <div>
          <img
            src={product.image}
            alt="product_img"
            className="w-full h-92 object-cover rounded-xl p-2"
          />
        </div>
        {/* name*/}

        <h2 className="text-center text-2xl text-slate-300">{product.name}</h2>
        {/* price , rating */}
        <div className="flex items-center justify-between px-4 py-2">
          <span className="text-white text-2xl">₹{product.price}</span>
          <span className="text-white flex items-center  justify-center gap-2 text-xl">
            <TiStarFullOutline size={30} color="yellow" />
            {product.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
