import React from "react";
import ProductList from "./ProductList";
import { Route, Routes } from "react-router";
import ProductDetails from "./ProductDetails";
import Navbar from "./Navbar";
import Cart from "./Cart";

function Home() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/checkout' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Home;
