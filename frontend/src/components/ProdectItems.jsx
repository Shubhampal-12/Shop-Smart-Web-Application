import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProdectItems = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  
    // Ensure `image` is an array and has at least one element
  const productImage = Array.isArray(image) && image.length > 0 ? image[0] : "placeholder.jpg";

  return (
    <div className="transition-all duration-300">
      <Link
        to={`/product/${id}`}
        className=" block p-3 rounded-[1rem] transition-all duration-300 ease-in-out hover:bg-gray-400 hover:scale-105 cursor-pointer"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full transition-transform duration-300 ease-in-out hover:scale-110 hover:w-[105%] hover:h-[105%]"
            src={productImage} alt={name || "Product"}
          />
        </div>

        {/* Text */}
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
};

export default ProdectItems;
