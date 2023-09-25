import { useState } from "react";

const User = (props) => {
  const { logo } = props;
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>UserName: Rahul Yadav</h1>
      <h2>Email: rahulyadav3766@gmail.com</h2>
      <img className="user-image" src={logo} />
      <h2> Count is: {count}</h2>
    </div>
  );
};

export default User;
