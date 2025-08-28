import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Tittle from "../components/Tittle";
import { assets } from "../assets/frontend_assets/assets";
import CartTotle from "../components/CartTotle";


const Cart = () => {
  const { products, currency, cartItem, updatequ ,navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const productId in cartItem) {
      for (const size in cartItem[productId]) {
        if (cartItem[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItem[productId][size],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItem]);

  return (
    <div>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Tittle text1={"YOUR"} text2={"CART"} />
        </div>
        <div className="">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-col-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image}
                    alt=""
                    className="w-16 sm:w-20"
                  />
                  <div className="">
                    <p className="text-sm sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:py-1 border bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updatequ(item._id, item.size, Number(e.target.value))
                  }
                  type="number"
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updatequ(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  alt=""
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotle/>
          <div className="w-full text-end">
            <button onClick={()=>navigate('/place-order')} className="bg-black text-white text-sm my-8  py-3 px-8">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
