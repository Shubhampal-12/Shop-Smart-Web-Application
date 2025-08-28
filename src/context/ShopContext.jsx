import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItem, setCartItem] = useState({})

  const navigate = useNavigate();

  const addToCart = async(itemId,size)=>{

    if(!size){
         toast.error('Select product size')
         return;
    }

  let cartData = structuredClone(cartItem);

  if(cartData[itemId]){
    if(cartData[itemId][size]){
          cartData[itemId][size] += 1;
    }
    else{
      cartData[itemId][size] = 1;
    }

  }
  else{
    cartData[itemId]={};
    cartData[itemId][size] = 1;
  }
  setCartItem(cartData);
  }

  const getCartCount = () =>{
    let totalCount = 0;
    for(const items in cartItem){
       for(const item in cartItem[items]){
               try{
                if(cartItem[items][item] > 0){
                  totalCount += cartItem[items][item]; 
                }
               }catch(error){
                console.log("Error occurred while getting cart count:", error);
               }
       }
    }
    return totalCount;
  }
 
  const updatequ = async(itemId,size,quantity)=>{
    let cartData = structuredClone(cartItem);

    cartData[itemId][size] = quantity;

    setCartItem(cartData);

  }

  const getCartAmout =  ()=>{
    let totalAmount = 0;
    for(const items in cartItem){
         let itemInfo = products.find((product)=>
           product._id === items);
         for(const item in cartItem[items]){
             try{
              if(cartItem[items][item] > 0 ){
                totalAmount += itemInfo.price * cartItem[items][item]
              }
             }catch(error){
              console.log(error);
              
             }
         }
     }
     return  totalAmount;
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,setSearch,showSearch,setShowSearch,
    cartItem,addToCart,getCartCount,updatequ,getCartAmout,navigate
  };
  // console.log(products);

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
