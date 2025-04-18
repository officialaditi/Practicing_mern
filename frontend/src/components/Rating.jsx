import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const Rating = ({ value }) => {
  return (
    <div className="flex items-center text-yellow-500 ">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>
          {value >= i ? (
            <IoStar size={20} />
          ) : value >= i - 0.5 ? (
            <IoStarHalf size={20} />
          ) : (
            <IoStarOutline size={20} />
          )}
        </span>
      ))}
    </div>
  );
};
export default Rating;
