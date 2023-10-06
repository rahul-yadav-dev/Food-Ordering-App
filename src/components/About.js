import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Used for making the api calls
    // called after the render is called i.e skeleton has been loaded,
    // now we fetch data and fill in the data in the skeleton
  }

  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <UserContext.Consumer>
          {(data) => {
            return <div className="font-bold">{data.loggedInUser}</div>;
          }}
        </UserContext.Consumer>
        <div className="contact-details">
          <UserClass name="rahulyadav3766" />
        </div>
      </div>
    );
  }
}

export default About;
