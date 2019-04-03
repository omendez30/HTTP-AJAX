import React, { Component } from "react";
import axios from "axios";
import Friends from "./components/Friends/Friends";
import FriendsInput from "./components/Friends/FriendsInput";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res =>
        this.setState({ friends: res.data }, () =>
          console.log(this.state.friends)
        )
      )
      .catch(err => {
        throw new Error(err);
      });
  }

  handleUpdateList = friends => {
    this.setState({ friends });
  };
  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
        <FriendsInput updateList={this.handleUpdateList} />
      </div>
    );
  }
}

export default App;
