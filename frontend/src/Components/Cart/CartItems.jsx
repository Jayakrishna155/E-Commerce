import React, { useContext } from 'react'
import './CartItems.css'
import { Shopcontext } from '../../Context/ShopContext'
import remove_icon from '../Assets/Frontend_Assets/cart_cross_icon.png'


export default function CartItems() {
  const { Allproducts, cartItems, removeFromCart,cartTotalValue } = useContext(Shopcontext);
  return (
    <div className='cart-items'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Allproducts.map((items) => {
        if (cartItems[items.id] > 0) {
          return (
            <div>
              <div
                className='cartitems-format cartitems-format-main'>
                <img src={items.image} alt="Image" className='cart-product-icon' />
                <p>{items.name}</p>
                <p>${items.new_price}</p>
                <button className="cartitems-quantity">{cartItems[items.id]}</button>
                <p>${items.new_price *
                  cartItems[items.id]}</p>
                <img className='.cart-remove-icon' src={remove_icon} alt="" onClick={() => removeFromCart(items.id)} />
              </div>
              <hr />
            </div>
          );
        }
        else {
          return null;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Sub total</p>
              <p>${cartTotalValue()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${cartTotalValue()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
