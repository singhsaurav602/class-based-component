import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  // constructor(){}
  // as we dont have any initializations we didnt need constructor function

  //render method is automatically called by react
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
