import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const navigate = useNavigate();

  const {getTotalCartAmount, token,food_list,cartItems,url} = useContext(StoreContext)

  const [data , setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data =>({...data,[name]:value}))
  }
  
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    console.log(orderItems);
  }

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name'/>
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email'/>
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
        <div className="multi-field">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
        </div>
        <div className="multi-field">
          <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code'/>
          <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button type='submit' onClick={() => navigate('/order')}>PROCEED TO PAYMENT</button>
          </div>

      </div>
    </form>
  )
}

export default PlaceOrder


// import React, { useContext, useState } from 'react';
// import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
// import './PlaceOrder.css';
// import { StoreContext } from '../../context/StoreContext';

// const PlaceOrder = () => {
//   const navigate = useNavigate();  // ✅ Define navigate inside the component

//   const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: ""
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data => ({ ...data, [name]: value }));
//   };

//   const placeOrder = async (event) => {
//     event.preventDefault();
//     let orderItems = [];
//     food_list.forEach((item) => {  // ✅ Changed .map to .forEach
//       if (cartItems[item._id] > 0) {
//         let itemInfo = { ...item, quantity: cartItems[item._id] }; // ✅ Fixed mutation issue
//         orderItems.push(itemInfo);
//       }
//     });
//     console.log(orderItems);

//     // ✅ Navigate after placing order
//     navigate('/order');
//   };

//   return (
//     <form onSubmit={placeOrder} className='place-order'>
//       <div className="place-order-left">
//         <p className="title">Delivery Information</p>
//         <div className="multi-field">
//           <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
//           <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
//         </div>
//         <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' />
//         <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
//         <div className="multi-field">
//           <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
//           <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
//         </div>
//         <div className="multi-field">
//           <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
//           <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
//         </div>
//         <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
//       </div>
//       <div className="place-order-right">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
//             </div>
//           </div>
//           <button type='submit'>PROCEED TO PAYMENT</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;
