import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorDetails = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {errorDetails.status}:{errorDetails.statusText}\
      </h3>
    </div>
  );
};

export default Error;
