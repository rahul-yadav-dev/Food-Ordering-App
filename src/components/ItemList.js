import { cdnUrl } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-center"
          >
            <div className="py-2 w-7/12 ">
              <span>{item.card.info.name}</span>
              <p className="font-thin">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="text-xs text-gray-300 my-4">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-5/12 p-4 m-0">
              {item.card.info.imageId ? (
                <div>
                  <button className=" absolute bg-white ml-20 mt-0 px-8 py-2 rounded-lg  text-green-700 border-2 font-semibold">
                    Add +
                  </button>
                  <img
                    className="rounded-xl h-29 "
                    src={cdnUrl + item.card.info.imageId}
                  />
                </div>
              ) : (
                <div>
                  <button className=" absolute bg-white ml-20 mt-32 px-8 py-2 rounded-lg  text-green-700 border-2 font-semibold">
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
