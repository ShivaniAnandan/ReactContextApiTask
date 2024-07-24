import React, { useContext } from 'react';
import { myContext } from '../App';

const Cart = () => {
  const [cart, setCart] = useContext(myContext);

  // function to remove from cart
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  //function to get dropdown value
  const handleDropdownChange = (id, value) => {
    const updatedData = cart.map(item =>
      item.id === id ? { ...item, quantity: value } : item
    );
    setCart(updatedData);
  };

  //calculating total quantity
  const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  //calculating total price
  const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className='cart'>
      <h1 className='text-left'>Cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="card mb-3 mx-5  px-3" style={{ width: "100%" }}>
          <div className="row g-0 justify-content-around align-items-center">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <img src={item.image} className="rounded-start" alt={item.title} style={{ height: "100px", padding: "0px" }} />
            </div>
            <div className="col-lg-6 col-md-5 col-sm-6 col-12">
              <div className="card-body text-dark">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price} rs</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-2 col-6'>
              <span> Quantity: </span>
              {/* creating dropdown for quantity */}
              <select value={item.quantity || 1} onChange={(e) => handleDropdownChange(item.id, parseInt(e.target.value))}>
                {[...Array(5).keys()].map(num => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
              <span className="card-text mx-3">{(item.price || 0) * (item.quantity || 1)} rs</span>
              <button onClick={() => removeFromCart(item)} style={{ border: "none" }}><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      ))}
      <div className="price-details mx-5">
        <h1 className='text-left'>Price Details</h1>
        <p className='d-flex justify-content-around'>Total Quantity :  <span>{totalQuantity}</span></p>
        <p className='d-flex justify-content-around'>Subtotal : <span> {totalPrice.toFixed(2)} rs </span></p>
        <p className='d-flex justify-content-around'>Shipping : <span>Free</span></p>
        <p className='d-flex justify-content-around'>Total :  <span> {totalPrice.toFixed(2)} rs </span></p>
      </div>
    </div>
  );
};

export default Cart;
