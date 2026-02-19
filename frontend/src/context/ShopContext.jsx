import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  // console.log("Backend URL:", backendUrl);

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  /* ---------------- ADD TO CART ---------------- */
 const addToCart = async (itemId, size) => {
  if (!size) {
    toast.error("Select Product Size");
    return;
  }

  // ✅ Safe clone (works everywhere)
  const cartData = JSON.parse(JSON.stringify(cartItems || {}));

  // ✅ Ensure product object exists
  if (!cartData[itemId]) {
    cartData[itemId] = {};
  }

  // ✅ Increase quantity safely
  cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

  setCartItems(cartData);

  // ✅ Sync with backend if logged in
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


  /* ---------------- CART COUNT ---------------- */
  const getCartCount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        total += cartItems[itemId][size];
      }
    }
    return total;
  };

  /* ---------------- UPDATE QUANTITY ---------------- */
  const updateQuantity = async (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);

    if (quantity <= 0) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        toast.error(error.response?.data?.message || "Update failed");
      }
    }
  };

  /* ---------------- CART AMOUNT ---------------- */
  const getCartAmount = () => {
    let total = 0;

    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;
      
   
      for (const size in cartItems[itemId]) {
        total += product.price * cartItems[itemId][size];
      }
     
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
        setCartItems(response.data.cartData);
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
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
