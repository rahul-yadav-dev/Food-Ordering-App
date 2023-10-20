import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  FreeDeliveryRestaurantComponent,
} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import UserContext from "../../utils/UserContext";
import { BrowserRouter } from "react-router-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser: "test" }}>
        <RestaurantCard resData={MOCK_DATA} />
      </UserContext.Provider>
    </BrowserRouter>
  );
  const name = screen.getByText("Barbeque Nation");
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted label", () => {
  // Homework- test HOC: freeDeliveryRestaurantComponent()
  const FreeDeliveryResComponent = FreeDeliveryRestaurantComponent();
  render(
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser: "test" }}>
        <FreeDeliveryResComponent resData={MOCK_DATA} />
      </UserContext.Provider>
    </BrowserRouter>
  );

  const label = screen.getByText("One+ Free delivery");
  expect(label).toBeInTheDocument();
});
