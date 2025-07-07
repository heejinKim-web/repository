import React, { useState } from "react";

const ItemAmount = ({ menu }) => {
  const { price } = menu;
  const [amount, setAmount] = useState(1);

  const setAmountPlus = (e) => {
    setAmount(amount + 1);
  };

  const setAmountMinus = (e) => {
    setAmount(amount - 1);
  };

  return (
    <div className="price_and_amount">
      <p className="price_bot">
        <em>{(price * amount).toLocaleString()}</em>원
      </p>
      <div className="amount_button_frame">
        <button
          className="minus"
          title="수량 감소"
          onClick={() => setAmountMinus(this)}
        >
          -
        </button>
        <p className="amount_count">{amount}</p>
        <button
          className="plus"
          title="수량 증가"
          onClick={() => setAmountPlus(this)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemAmount;
