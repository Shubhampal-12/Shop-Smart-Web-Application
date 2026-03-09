import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const steps = [
  "Order Placed",
  "Packing",
  "Shipped",
  "Out for delivery",
  "Delivered",
];

const TrackOrder = () => {
  const { id } = useParams();
  const { backendUrl, token } = useContext(ShopContext);

  const [order, setOrder] = useState(null);

  const fetchOrder = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/userOrders",
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        const foundOrder = response.data.orders.find((item) => item._id === id);
        setOrder(foundOrder);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const statusIndex = steps.findIndex((step) => step === order?.status);

  return (
    <div className="border-t pt-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <h2 className="text-2xl font-semibold mb-10">Track Order</h2>

      {order && (
        <div>
          {/* Product Info */}

          {order.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 mb-10 border p-4 rounded"
            >
              <img
                src={item.images[0]}
                className="w-20 h-28 object-cover"
                alt=""
              />

              <div>
                <p className="font-medium text-lg">{item.name}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-gray-500">Size: {item.size}</p>
                <p className="text-gray-500">
                  Date: {new Date(order.date).toDateString()}
                </p>
                <p className="text-gray-500">Amount: ₹{order.amount}</p>
                <p>
                {/* Order ID: <span className="text-black h-10">{order._id}</span> */}
                </p>
              </div>
            </div>
          ))}

          {/* Timeline */}

          <div className="relative flex justify-between items-center">
            {/* Center Line */}

            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-300"></div>

            {steps.map((step, index) => {
              const done = index <= statusIndex;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center relative z-10"
                >
                  {/* Circle */}

                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border-2
                    ${
                      done
                        ? "bg-black text-white border-black"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Label */}

                  <p
                    className={`text-sm mt-2 text-center ${
                      done ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
