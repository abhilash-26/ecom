import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const result = await axios({
        method: "get",
        url: "http://localhost:8080/api/v1/product/list",
      });
      console.log(result);
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex flex-wrap justify-around'>
      {products &&
        products.map((item) => <Product product={item} key={item._id} />)}
    </div>
  );
}

export default ProductList;
