import { useState } from "react";
import { HiOutlineMenuAlt3, HiShoppingBag, HiUser } from "react-icons/hi";
import { Link } from "react-router";

const Navbar = () => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between flex-wrap py-4 px-6 z-999 w-full top-0 left-0 fixed bg-white shadow-lg">
        <div>
          <Link to="/">
            <h1 className="tracking-wider font-bold text-2xl hover:cursor-pointer">
              Rst Store
            </h1>
          </Link>
        </div>
        <div className="lg:flex items-center justify-between gap-5 hidden">
          <Link to="/cart">
            <span>
              <HiShoppingBag size={30} />
            </span>
          </Link>
          <Link to="/login">
            <span>
              <HiUser size={30} />
            </span>
          </Link>
        </div>
        {/* mobile view toggle  */}
        <div className="lg:hidden block">
          <span onClick={() => setToggleShow(!toggleShow)}>
            <HiOutlineMenuAlt3 size={30} />
          </span>
        </div>
        {toggleShow && (
          <div className="absolute top-16 left-0 bg-slate-300 w-full flex items-center justify-center flex-col gap-5 py-2">
            <Link to="/cart">
              <span>
                <HiShoppingBag size={30} />
              </span>
            </Link>
            <Link to="/login">
              <span>
                <HiUser size={30} />
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
