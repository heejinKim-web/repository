import React, { useState } from "react";

const KioskApp = () => {
  const dataMenu = [
    { name: "아메리카노", price: 4500, id: 1 },
    { name: "카페라떼", price: 5000, id: 2 },
    { name: "카페모카", price: 5500, id: 3 },
  ];

  const [menus, setMenus] = useState([]);
  const [amount, setAmount] = useState(1);

  const onClick = (iname, iprice, iid) => {
    const nextMenu = menus.concat({
      name: iname,
      price: iprice,
      id: iid,
    });
    setMenus(nextMenu);
  };

  const setAmountPlus = (e) => {
    setAmount(amount + 1);
  };

  const setAmountMinus = (e) => {
    setAmount(amount - 1);
  };

  const menusList = menus.map((menu, index) => (
    <li key={index}>
      <div className="amount_button_and_menu_name">
        <p className="menu_name">{menu.name}</p>
        <div className="price_and_amount">
          <p className="price_bot">
            <em>{(menu.price * amount).toLocaleString()}</em>원
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
      </div>
    </li>
  ));

  return (
    <>
      <section className="table_body">
        <div className="body_menu_and_amount">
          <div className="menu_list">
            <ul>
              {dataMenu.map((menu, index) => (
                <li
                  key={index}
                  onClick={() => onClick(menu.name, menu.price, menu.id)}
                >
                  <button>
                    <span className="name">{menu.name}</span>
                    <span className="price">
                      <em>{menu.price.toLocaleString()}</em>원
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="amount_list">
            <ul>{menusList}</ul>
          </div>
          <div className="order_button_frame">
            <button title="상품 전체 주문" className="order_button">
              주문하기
            </button>
          </div>
          <div className="total_price">
            <p className="total">
              총 <span>0</span>원
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default KioskApp;
