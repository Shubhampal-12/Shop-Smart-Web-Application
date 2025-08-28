 import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";
import { assets } from "../assets/frontend_assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products ,currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    if (!products || products.length === 0) return;

    const item = products.find((p) => p._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]); // first image as default
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 transition-opacity ease-in duration-500 opacity-100">

      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row mt-5">

        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3 ">

          {/* Thumbnails */}
          <div className="flex sm:flex-col flex-row justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2 overflow-x-auto sm:overflow-y-auto">
            {productData.image &&
              productData.image.map((item, index) => (
                <img
                  src={item}
                  alt={`product-${index}`}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(item)} // click changes main image
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[90%]">
            <img
              src={image}
              alt="Selected product"
              className="w-full  h-auto  "
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{productData.name}</h1>
          <div className="flex items-center  mt-2 gap-1">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <span className="pl-2">(122 reviews)</span>
          </div>
          <p className="text-xl mt-5 font-semibold text-green-600 mb-4">
            {currency}{productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* Sizes Section */}
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Select Sizes:</h2>
            {productData.sizes &&
              productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border px-4 py-2 gap-3 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
          </div>
          {/* Add to Cart Button */}
          <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white text-sm px-8 py-3 active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within days.</p>
          </div>
        </div>
      </div>
      {/* Product Description*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selledaut? and Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo tenetur libero officia doloremque
            exercitationem placeat suscipit aliquid reiciendis asperiores sit
            rem earum provident, recusandae, illum in. Laborum deleniti
            similique nihil?
          </p>
          <p>
            E-commerce websites typically display products or service along with
            detailed , image Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Quos, aut? and Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo tenetur libero officia doloremque
            exercitationem placeat suscipit aliquid reiciendis asperiores sit
            rem earum provident, recusandae, illum in. Laborum deleniti
            similique nihil?Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Numquam, ut! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Magni perspiciatis ab ducimus sed at molebstiae
            recusandae? Aliquam amet deserunt nam.
          </p>
        </div>
      </div>
      {/* Product display */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;
