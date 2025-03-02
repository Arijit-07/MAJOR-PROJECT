import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";
import { CartItem as CartItemType } from "../types/types"; // Assuming CartItemType is the correct type for cart items

const cartItems = [
  {
    productId: "ahhjkjdksa",
    name: "MacBook",
    price: 3000,
    quantity: 4,
    stock: 10,
    photo: "https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg", // changed photos to photo
  },
];


const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const Discount = 400;
const total = subtotal + tax + shippingCharges - Discount;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>(""); 
  const [isValidCouponCode, setValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (couponCode === "DISCOUNT") {
        setValidCouponCode(true);
      } else {
        setValidCouponCode(false);
      }
    }, 500);

    return () => clearTimeout(timeOutID);
  }, [couponCode]);

  // Handlers for cart item actions
  const incrementHandler = (cartItem: CartItemType) => {
    console.log("Incremented", cartItem);
  };

  const decrementHandler = (cartItem: CartItemType) => {
    console.log("Decremented", cartItem);
  };

  const removeHandler = (id: string) => {
    console.log("Removed item with id:", id);
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? 
          cartItems.map((item, idx) => (
            <CartItem
              key={idx}
              cartItem={item}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              removeHandler={removeHandler}
            />
          )) :
          <h1>No items Added</h1>
        }
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>Total: ₹{total + Discount}</p> {/* Total before discount */}
        <p>
          Discount :<em> - ₹{Discount}</em>
        </p> 
        <p><b>Final Total: ₹{total}</b></p> {/* Total after discount */}

        <input 
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        
        {couponCode && (
          isValidCouponCode ? (
            <span className="green">
              ₹{Discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              <VscError /> Invalid Coupon
            </span>
          )
        )}

        {
          cartItems.length > 0 && 
          <Link to="/shipping">Checkout</Link>
        }
      </aside>
    </div>
  );
};

export default Cart;
