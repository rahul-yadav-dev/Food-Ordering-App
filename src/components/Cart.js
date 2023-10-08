import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // subscribe to the store
  const itemList = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 border border-solid border-black ">
      <h1 className="text-2xl font-bold"> Cart</h1>
      {itemList.length == 0 ? (
        <div>
          <h1>Please add items to the cart </h1>
        </div>
      ) : (
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-2 right-0 bg-black text-white rounded-lg cursor-arrow"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <div className="border-l-2">
            <ItemList items={itemList} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
