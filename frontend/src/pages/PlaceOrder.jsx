import React, { useContext, useState } from 'react'
import Tittle from '../components/Tittle'
import CartTotle from '../components/CartTotle'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('code');
  const {navigate} = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street:'',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (e)=>{
    const {name ,value} = e.target;
    setFormData((data)=>({...data, [name]: value}))

  }
  // ✅ Validate delivery form
  const isFormValid = () => {
    for (let key in formData) {
      if (formData[key].trim() === "") {
        return false
      }
    }
    return true
  }

  // ✅ Place order only if form is filled
  const placeOrderHandler = () => {
    if (!isFormValid()) {
      alert("Please fill all Delivery Information before placing order")
      return
    }

    // form is valid → proceed
    navigate('/order')
  }

    // let orderData = {
    //     address: formData,
    //     items: orderItems,
    //     amount: getCartAmount() + delivery_fee
    //   };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
        <Tittle text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
      <div className="flex gap-3">
        <input required onChange={onChangeHandler} value={formData.firstName} name='firstName' placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <input required onChange={onChangeHandler} value={formData.lastName} name='lastName' placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>
        <input required onChange={onChangeHandler} value={formData.email} name='email'   placeholder='Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <input required onChange={onChangeHandler} value={formData.street} name='street' placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      <div className="flex gap-3">
        <input required onChange={onChangeHandler} value={formData.city} name='city' placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <input required onChange={onChangeHandler} value={formData.state} name='state'  placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>
      <div className="flex gap-3">
        <input required onChange={onChangeHandler} value={formData.zipcode} name='zipcode'   placeholder='ZipCode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <input required onChange={onChangeHandler} value={formData.country} name='country' placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>
        <input required onChange={onChangeHandler} value={formData.phone} name='phone'   placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>

      {/* Right side */}
      <div className="mt-8">
         <div className="mt-8 min-w-80">
          <CartTotle/>
         </div>

         <div className="mt-12">
              <Tittle text1={'PAYMENT'} text2={'METHOD'}/>
              {/* Payment method selection */}
              <div className="flex gap-3 flex-col lg:flex-row">

                  <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                    <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
                  </div>

                  <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                    <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
                  </div>

                  <div onClick={()=>setMethod('code')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'code' ? 'bg-green-400' : ''}`}></p>
                    <p className="text-gray-500 text-sm font-medium mx-4">Cash On Delivery</p>
                  </div>
              </div>

              <div className="w-full text-end mt-8">
                <button onClick={placeOrderHandler} className="bg-black text-white py-3 px-16 text-sm">Place Order</button>
              </div>
         </div>
      </div>
    </div>
  )
}

export default PlaceOrder