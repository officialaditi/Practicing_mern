import ProductCard from "../components/ProductCard";
import products from "../data";

const HomeScreen = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center tracking-wide text-red-700 my-5">
          Latest Product
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5">
        {products.map((prod) => (
          <ProductCard key={prod._id} product={prod} />
        ))}
      </div>
    </div>
  );
};
export default HomeScreen;
