import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../redux/features/product";

function Product({ product }) {
  const dispatch = useDispatch();
  const handleSetcurrentProduct = () => {
    dispatch(setCurrentProduct(product));
  };

  return (
    <div
      className=' mb-3 flex flex-col items-center w-60 shadow-md p-2 cursor-pointer'
      onClick={handleSetcurrentProduct}
    >
      <Link to='/product'>
        <img src={product.image} className='w-60 h-60 object-contain' alt='' />
        <p>{product.name}</p>
        <p className='font-semibold font-sans'>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "INR",
          })}
        </p>
      </Link>
    </div>
  );
}

export default Product;
