import React, {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

function Details() {
  const [product, setProduct] = useState(null)
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  return product ? (
    <div className="bg-zinc-50 w-full h-screen flex items-center m-auto justify-center">
      <div className="w-[90%] h-[80vh]  flex">
        <div className="leftPart w-[50%] flex items-center justify-center h-full">
          <img
            className=" object-contain w-[50%]"
            src={`${product.image}`}
            alt=""
          />
        </div>
        <div className="Rightpart flex flex-col w-[43%] h-full justify-center">
          <h1 className=" text-[2.5vw] leading-[3vw] font-semibold opacity-90 mb-2">
            {product.title}
          </h1>
          <h3 className=" font-bold opacity-70 mb-2">{product.category}</h3>
          <h2 className="text-[#EE99C2] font-medium">{product.price}</h2>
          <p>
           {product.description}
          </p>
          <div className="mt-5 ">
            <Link className="mr-3 py-2 px-5 border rounded border-blue-300 text-blue-400">
              Edit
            </Link>
            <Link className="py-2 px-5 border rounded border-red-300 text-red-400">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  ):(
    <Loading />
  )
}

export default Details;
