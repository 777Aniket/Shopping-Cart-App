import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex">
      {cart.length > 0 ? (
        <div className="">
          <div className="">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="">
            <div className="">
              <div>Your Cart</div>
              <div>Summmary</div>
              <p>
                <span>Total item : {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount : ${totalAmount}</p>
              <button>Check Out </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Your cart is empty</h1>
          <Link to="/">
            <button>Shop now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
