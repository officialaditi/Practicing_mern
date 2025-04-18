import { Link, useParams } from "react-router";
import products from "../data";
import { FaBackward } from "react-icons/fa";
import { useEffect } from "react";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id } = useParams();

  const product = products.find((prod) => prod._id === id);

  // scroll the card for top
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className="flex flex-col">
      <div className="mb-5">
        {/* column -1 (back button) */}
        <Link to="/">
          <button className=" rounded-full bg-slate-400 p-5">
            <FaBackward size={20} color="white" />
          </button>
        </Link>
      </div>
      {/* column-2 {other content} */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 mx-5">
        {/* product-img */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-96 rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-6">
          {/* brand-name and product-name, categories and descriptioon */}
          <h3 className="text-center text-gray-500 text-2xl">
            Brand:- {product.brand}
          </h3>
          <h2 className="font-semibold text-2xl text-slate-600">{product.category}</h2>
          <h1 className="text-3xl underline ">{product.name}</h1>

          <p className="text-2xl">{product.description}</p>

          {/* product rating and reviews */}
          <div className="flex items-center gap-4">
          <span>
            <Rating value={product.rating} />
          </span>
          <span className="font-bold text-2xl"> {product.numReviews} reviews</span>
          </div>

        </div>
        {/* count-inStock, price and button (add to cart) */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-semibold text-slate-600 text-2xl">
              Stock:- {product.countInStock}
            </h3>

            {product.countInStock > 0 ? (
              <h1 className="font-bold text-green-600 text-2xl">Available</h1>
            ) : (
              <h2 className="font-bold text-red-600 text-2xl">
                Product is Out of Stock
              </h2>
            )}
          </div>
          <h1 className="font-bold text-3xl text-center">
            Price: ₹{product.price}
          </h1>
          <button className="font-bold text-2xl bg-amber-500 py-2 px-2 rounded-xl hover:shadow-2xl hover:bg-amber-400 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductScreen;
