import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Restaurant from "../Restaurant";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

it("Should load restaurant menu component and update cart when an item is added to the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Restaurant />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Value Meal (13)");
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(13);
  expect(screen.getByText("Cart- (0 items)")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  // header should change
  expect(screen.getByText("Cart- (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart- (2 items)")).toBeInTheDocument();

  // 13 + 2
  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  // the two items from cart are removed
  expect(screen.getAllByTestId("foodItems").length).toBe(13);
  expect(screen.getByText("Please add items to the cart")).toBeInTheDocument();
});
