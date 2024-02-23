import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";

function Nav() {
  const product = useContext(ProductContext);
  console.log(product);

  const distinct_product =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);
  console.log(distinct_product);

  return (
    <nav className="w-[20%] h-screen bg-zinc-50 py-7 px-5">
      <a
        className=" ml-4 text-sky-300 border-zinc-300 px-4 py-1 rounded-md border-2 "
        href="/create"
      >
        Add New Product
      </a>
      <hr className="mt-4 border-[1px] border-zinc-200" />
      <h1 className="text-[1.7vw] mt-2 font-medium">Category Filter</h1>
      <ul className="ml-2 mt-2">
        <li className=" mb-1 flex items-center">
          <span className=" rounded-full mr-2 block w-[15px] h-[15px] bg-red-400"></span>
          cat 1
        </li>
        <li className=" mb-1 flex items-center">
          <span className=" rounded-full mr-2 block w-[15px] h-[15px] bg-sky-400"></span>
          cat 1
        </li>
        <li className=" mb-1 flex items-center">
          <span className=" rounded-full mr-2 block w-[15px] h-[15px] bg-orange-400"></span>
          cat 1
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
