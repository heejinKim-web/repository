import React from "react";

const ItemAmount = ({ menu, itemAmount, plusItemAmount, minusItemAmount }) => {
  const { price } = menu;

  return (
    <div className="price_and_amount">
      <p className="price_bot">
        <em className="itemAmount">{(price * itemAmount).toLocaleString()}</em>
        원
      </p>
      <div className="amount_button_frame">
        <button className="minus" title="수량 감소" onClick={minusItemAmount}>
          -
        </button>
        <p className="amount_count">{itemAmount}</p>
        <button className="plus" title="수량 증가" onClick={plusItemAmount}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemAmount;
