import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showCategory, setShowIndex }) => {
  return (
    <div className="w-6/12 mx-auto my-4 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={setShowIndex}
      >
        <span className="font-bold text-lg">
          {data.title}
          {` (${data.itemCards.length}) `}
        </span>
        {showCategory ? <span>🔼</span> : <span>🔽</span>}
      </div>
      {showCategory && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
