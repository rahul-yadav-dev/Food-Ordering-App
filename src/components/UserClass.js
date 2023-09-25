import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const data = await fetch(`https://api.github.com/users/${this.props.name}`);
    const userData = await data.json();

    this.setState({ avatar: userData.avatar_url });
  }

  render() {
    return (
      <div className="user-card">
        <h1>  {this.props.name}</h1>
        <img className="user-image" src={this.state?.avatar} />
      </div>
    );
  }
}

export default UserClass;
