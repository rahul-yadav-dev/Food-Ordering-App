import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for subway test input", async () => {
  // act is used if state update is there in the component
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const resCardsInitial = screen.getAllByTestId("resCard");
  expect(resCardsInitial.length).toBe(9);
  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  // simulate typing buger in search box
  fireEvent.change(searchInput, { target: { value: "B" } });
  fireEvent.click(searchButton);

  // screen should load four cards
  const resCardsAfterSearch = screen.getAllByTestId("resCard");
  expect(resCardsAfterSearch.length).toBe(4);
});

it("Should filter top rated restaurant", async () => {
  // act is used if state update is there in the component
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedResBtn = screen.getByRole("button", {
    name: "top-rated-restaurant",
  });
  fireEvent.click(topRatedResBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(6);
});
