import React from "react";
import axios from "axios";
import styled from "styled-components";

const FriendsInputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const FriendsInputSector = styled.input`
  display: flex;
  margin: 10px 0;
  width: 30%;
  padding: 10px;
  border: 1px solid black;
`;

const SubmitBtn = styled.button`
  width: 25%;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  background: #ffa482;
  cursor: cell;

  &:hover {
    color: #ffa482;
    background: #fff;
  }
`;
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
      <FriendsInputForm onSubmit={this.onAddNewFriend}>
        <FriendsInputSector
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.onInputChange(event, "name")}
        />
        <FriendsInputSector
          type="number"
          placeholder="Age"
          value={this.state.age}
          onChange={event => this.onInputChange(event, "age")}
        />
        <FriendsInputSector
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={event => this.onInputChange(event, "email")}
        />
        <SubmitBtn type="submit">Add Friend</SubmitBtn>
      </FriendsInputForm>
    );
  }
}

export default FriendsInput;
