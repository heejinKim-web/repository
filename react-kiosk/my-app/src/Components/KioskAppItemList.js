import React, { useState, useCallback } from "react";
import ItemAmount from "./utils/ItemAmount";

const KioskAppItemList = ({ menu }) => {
  const { name } = menu;

  const [itemAmount, setItemAmount] = useState(1);
  const plusItemAmount = useCallback(() => {
    setItemAmount(itemAmount + 1);
  }, [itemAmount]);

  const minusItemAmount = useCallback(() => {
    setItemAmount(itemAmount - 1);
  }, [itemAmount]);

  return (
    <li>
      <div className="amount_button_and_menu_name">
        <p className="menu_name">{name}</p>
        <ItemAmount
          menu={menu}
          itemAmount={itemAmount}
          plusItemAmount={plusItemAmount}
          minusItemAmount={minusItemAmount}
        />
      </div>
    </li>
  );
};

export default KioskAppItemList;
