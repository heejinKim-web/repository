import React, { useState } from "react";
import KioskAppItemList from "./KioskAppItemList";

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

  const [totalPrice, setTotalPrice] = useState(0);
  const onSum = () => {
    let sumPrice = 0;
    for (let i = 0; i < menus.length; i++) {
      sumPrice += menus[i].price;
    }
    setTotalPrice(sumPrice);
    console.log(sumPrice);
  };

  return (
    <>
      <section className="table_body">
        <div className="body_menu_and_amount">
          <div className="menu_list">
            <ul>
              {dataMenu.map((menu) => (
                <li
                  key={menu.id}
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
              {menus.map((menu) => (
                <KioskAppItemList key={menu.id} menu={menu} />
              ))}
            </ul>
          </div>
          <div className="order_button_frame">
            <button
              title="상품 전체 주문"
              className="order_button"
              onClick={onSum}
            >
              주문하기
            </button>
          </div>
          <div className="total_price">
            <p className="total">
              총 <span>{totalPrice.toLocaleString()}</span>원
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default KioskApp;
