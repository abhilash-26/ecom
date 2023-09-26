import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../redux/features/product";
import axios from "axios";

function ProductDetails() {
  const { currentProduct } = useSelector((state) => state.product);
  const [varients, setVarients] = useState([]);
  const [currentImage, setCurrentImage] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    getvarients();
  }, []);
  const getvarients = async () => {
    try {
      const data = await axios({
        method: "get",
        url: `http://localhost:8080/api/v1/varient/list?productId=${currentProduct._id}`,
      });
      if (data.data) {
        setVarients(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = () => {
    dispatch(setCart(currentProduct));
  };
  const handleChangeCurrentImage = (item) => {
    setCurrentImage(item.image);
  };
  return (
    <div className='h-[92vh] flex '>
      <div className='flex flex-col items-center'>
        <img
          src={currentImage ? currentImage : currentProduct.image}
          alt=''
          className='h-96 m-20'
        />

        {varients.length > 0 && <p>colors</p>}
        <div className='flex'>
          {varients.map((item) => (
            <img
              src={item.image}
              className='w-12 ml-2 mr-2'
              onMouseOver={() => handleChangeCurrentImage(item)}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col items-start m-20'>
        <p className='text-2xl m-1'>{currentProduct.name}</p>
        <p className='font-bold m-1'>
          Price -
          {currentProduct.price.toLocaleString("en-US", {
            style: "currency",
            currency: "INR",
          })}
        </p>
        <p className='font-bold m-1'>Description</p>
        <p className='w-[600px] text-left m-2'>{currentProduct.description}</p>
        <button
          className='bg-[#FB641B] rounded-md pl-6 pr-6 pt-2 pb-2 text-white font-bold m-1'
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
