import React, { useState } from "react";

const KioskApp = () => {
  const dataMenu = [
    {
      name: "아메리카노",
      price: 4500,
    },
    {
      name: "카페라떼",
      price: 5000,
    },
    {
      name: "카페모카",
      price: 5500,
    },
  ];

  const [items, setItems] = useState([{ price: "", minusplus: "" }]);

  return (
    <>
      <section className="table_body">
        <div className="body_menu_and_amount">
          <div className="menu_list">
            <ul>
              {dataMenu.map((dataMenu, index) => (
                <li key={index}>
                  <button>
                    <span className="name">{dataMenu.name}</span>
                    <span className="price">
                      <input type="hidden" value={dataMenu.price}></input>
                      <em>{dataMenu.price.toLocaleString()}</em>원
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="amount_list">
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  style={{ display: item.price ? "block" : "none" }}
                >
                  <div class="amount_button_and_menu_name">
                    <p class="menu_name"></p>
                    <div class="price_and_amount">
                      <p class="price_bot">
                        <em>{items.price}</em>원
                      </p>
                      <div class="amount_button_frame">
                        <button class="minus" title="수량 감소">
                          -
                        </button>
                        <p class="amount_count"></p>
                        <button class="plus" title="수량 증가">
                          +
                        </button>
                      </div>
                    </div>
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
