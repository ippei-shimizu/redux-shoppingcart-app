import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/CartSlice";
import { MinusIcons, PlusIcons } from "../HeroIcons";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}円</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          削除
        </button>
      </div>
      <div>
        <button className="amount-btn">
          <PlusIcons />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <MinusIcons />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
