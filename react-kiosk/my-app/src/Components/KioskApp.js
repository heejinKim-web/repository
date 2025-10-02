import React, { useState } from "react";
import KioskAppItemList from "./KioskAppItemList";

const KioskApp = () => {
  const dataMenu = [
    { name: "아메리카노", price: 4500, id: 1, amount: 1 },
    { name: "카페라떼", price: 5000, id: 2, amount: 1 },
    { name: "카페모카", price: 5500, id: 3, amount: 1 },
  ];

  const [menus, setMenus] = useState([]);
  // 메뉴 추가 또는 수량 증가
  const onClick = (n, p, i) => {
    setMenus((prevMenus) => {
      const found = prevMenus.find((m) => m.id === i);
      if (found) {
        return prevMenus.map((m) =>
          m.id === i ? { ...m, amount: m.amount + 1 } : m
        );
      } else {
        return prevMenus.concat({ name: n, price: p, id: i, amount: 1 });
      }
    });
  };

  // 수량 증가
  const plusItemAmount = (id) => {
    setMenus((prevMenus) =>
      prevMenus.map((m) => (m.id === id ? { ...m, amount: m.amount + 1 } : m))
    );
  };

  // 수량 감소
  const minusItemAmount = (id) => {
    setMenus((prevMenus) =>
      prevMenus
        .map((m) =>
          m.id === id ? { ...m, amount: m.amount > 1 ? m.amount - 1 : 1 } : m
        )
        .filter((m) => m.amount > 0)
    );
  };

  const [totalPrice, setTotalPrice] = useState(0);

  // 주문하기 버튼 클릭 시 총 가격 계산
  const handleOrder = () => {
    const sum = menus.reduce((acc, cur) => acc + cur.price * cur.amount, 0);
    setTotalPrice(sum);
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
                <KioskAppItemList
                  key={menu.id}
                  menu={menu}
                  plusItemAmount={() => plusItemAmount(menu.id)}
                  minusItemAmount={() => minusItemAmount(menu.id)}
                />
              ))}
            </ul>
          </div>
          <div className="order_button_frame">
            <button
              title="상품 전체 주문"
              className="order_button"
              onClick={handleOrder}
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
