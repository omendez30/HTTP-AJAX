import React from "react";
import axios from "axios";

class FriendsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  onInputChange = (o, type) => {
    this.setState({
      [type]: o.target.value
    });
  };
  onAddNewFriend = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.age || !this.state.email) {
      alert("Please fill out all fields");
      return;
    }
    const [name, age, email] = [
      this.state.name,
      Number(this.state.age),
      this.state.email
    ];
    this.setState({ name: "", age: "", email: "" });
    axios
      .post("http://localhost:5000/friends", {
        name,
        age,
        email
      })
      .then(res => this.props.updateList(res.data))
      .catch(err => {
        throw new Error(err);
      });
  };
  render() {
    return (
      <form onSubmit={this.onAddNewFriend}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.onInputChange(event, "name")}
        />
        <input
          type="number"
          placeholder="Age"
          value={this.state.age}
          onChange={event => this.onInputChange(event, "age")}
        />
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={event => this.onInputChange(event, "email")}
        />
        <button type="submit">Add Friend</button>
      </form>
    );
  }
}

export default FriendsInput;
