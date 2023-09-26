import React from "react";
import cart from "../icons/shopping-cart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector((state) => state.product.cartCount);
  return (
    <div className='bg-gray-400 h-[8vh] flex justify-end pr-10 items-center'>
      <Link to='/'>
        <p className='mr-[80vw] cursor-pointer text-3xl'>EshOp</p>
      </Link>
      {cartCount > 0 && cartCount}
      <Link to='/checkout'>
        <img src={cart} alt='' className='w-6 h-6' />
      </Link>
    </div>
  );
}

export default Navbar;
