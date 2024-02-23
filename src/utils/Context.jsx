import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
const Context = (props) => {
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const { data } = await axios("/products");
      setProduct(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=> {
    getProduct();
  },[])

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
