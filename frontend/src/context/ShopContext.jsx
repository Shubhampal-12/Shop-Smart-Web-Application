import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [token, setToken] = useState("");
  const [products, setProducts] = useState([]);

  console.log("Backend URL:", backendUrl);

  const navigate = useNavigate();

  // ADD TO CART

  const addToCart = async (itemId, size) => {
  if (!size) {
    toast.error("Select product size");
    return;
  }

  setCartItem((prev) => {
    const cartData = { ...prev };

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

    return cartData;
  });

  if (token) {
    try {
      await axios.post(
        `${backendUrl}/api/cart/add`,
        { itemId, size },
        { headers: { token } }
      );
    } catch (error) {
      toast.error(error.response?.data?.message || "Cart error");
    }
  }
};


  // cart count
  console.log(products);

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      if (!cartItem[items]) continue;

      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          totalCount += cartItem[items][item];
        }
      }
    }

    return totalCount;
  };

  const updatequ = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);

    if (!cartData[itemId]) return;
    if (!cartData[itemId][size]) return;

    cartData[itemId][size] = quantity;
    setCartItem(cartData);
  };

  //cart amount

   const getCartAmount = () => {
    let total = 0;

    for (const itemId in cartItem) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;
      
      console.log(product)
      for (const size in cartItem[itemId]) {
        total += product.price * cartItem[itemId][size];
      }
      console.log(product)
    }
    return total;
  };

  /* ---------------- GET PRODUCTS ---------------- */
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch {
      toast.error("Failed to load products");
    }
  };

  /* ---------------- GET USER CART ---------------- */
  const getUserCart = async (userToken) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token: userToken } }
      );

      if (response.data.success) {
        setCartItem(response.data.cartData);
      }
    } catch {
      toast.error("Failed to load cart");
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && !token) {
      setToken(storedToken);
      getUserCart(storedToken);
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    updatequ,
    getCartAmount,
    navigate,
    setToken,
    backendUrl,
    token,
  };
  // console.log(products);

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
