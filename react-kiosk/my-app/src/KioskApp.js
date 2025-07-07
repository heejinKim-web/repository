import React, { useState } from "react";
import ItemAmount from "./utils/ItemAmount";

const KioskApp = () => {
  const dataMenu = [
    { name: "아메리카노", price: 4500, id: 1 },
    { name: "카페라떼", price: 5000, id: 2 },
    { name: "카페모카", price: 5500, id: 3 },
  ];

  const [menus, setMenus] = useState([]);

  const onClick = (iname, iprice, iid) => {
    const nextMenu = menus.concat({
      name: iname,
      price: iprice,
      id: iid,
    });
    setMenus(nextMenu);
  };

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
            <ul>
              {menus.map((menu, index) => (
                <li key={index}>
                  <div className="amount_button_and_menu_name">
                    <p className="menu_name">{menu.name}</p>
                    <ItemAmount menu={menu} />
                  </div>
                </li>
              ))}
            </ul>
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
