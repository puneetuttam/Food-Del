import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr></hr>
        {food_list.map((item) => {
          if (cartItems[item._id]>0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                    className="cross"
                  >
                    x
                  </p>
                </div>
                <hr></hr>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()+2}</p>
            </div>
            <hr></hr>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo cod, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code"></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
