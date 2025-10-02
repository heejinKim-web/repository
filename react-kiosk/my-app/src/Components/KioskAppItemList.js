import React from "react";
import ItemAmount from "./utils/ItemAmount";

const KioskAppItemList = ({ menu, plusItemAmount, minusItemAmount }) => {
  const { name, amount } = menu;
  return (
    <li>
      <div className="amount_button_and_menu_name">
        <p className="menu_name">{name}</p>
        <ItemAmount
          menu={menu}
          itemAmount={amount}
          plusItemAmount={plusItemAmount}
          minusItemAmount={minusItemAmount}
        />
      </div>
    </li>
  );
};

export default KioskAppItemList;
