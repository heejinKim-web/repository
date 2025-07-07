import ItemAmount from "./utils/ItemAmount";

const KioskAppItemList = (menus) => {
  return (
    <>
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
    </>
  );
};

export default KioskAppItemList;
