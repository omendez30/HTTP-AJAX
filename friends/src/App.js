import React, { Component } from "react";
import axios from "axios";
import Friends from "./components/Friends/Friends";
import FriendsInput from "./components/Friends/FriendsInput";
import "./App.css";
import { Route } from "react-router-dom";

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

  handleDeleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <Friends
              {...props}
              friends={this.state.friends}
              deleteFriend={this.handleDeleteFriend}
            />
          )}
        />
        <Route
          path="/"
          render={props => (
            <FriendsInput {...props} updateList={this.handleUpdateList} />
          )}
        />
      </div>
    );
  }
}

export default App;
