 import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';
import ProdectItems from './ProdectItems';


const LatestCollection = () => {
  const { products } = useContext(ShopContext);  
  // console.log(products);
  
  const [latesproducts, setLatesproducts] = useState([]);

  useEffect(() => {
      setLatesproducts(products.slice(0, 10));
  }, []); 

  return (
    <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className="text-center py-8 text-3xl">
        <Tittle text1={'LATEST'} text2={'COLLECTION'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ratione. assumenda doloremque.
        </p>
      </div>

      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latesproducts.map((item, index) => (
          <ProdectItems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
