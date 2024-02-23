import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Home() {
  const [product] = useContext(ProductContext);
  return product ? (
    <>
      <Nav />
      <div className=" w-[80%]  h-full py-6 px-5 flex flex-wrap  overflow-x-hidden overflow-y-auto ">
        {product.map((item, index) => (
          <Link key={index}
            to={`/details/${item.id}`}
            className="w-[24%] overflow-hidden mb-3 ml-2 h-[55%] flex flex-col rounded-md items-center bg-[#FFFFFF] border-2 pt-7 pb-5"
          >
            <div
              className=" hover:scale-110 w-full h-full  bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <h1 className="mt-3">{item.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
