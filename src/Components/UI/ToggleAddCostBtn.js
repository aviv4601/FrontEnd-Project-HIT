import React, { Component } from "react";
import Button from "@mui/material/Button";

class ToggleAddCostBtn extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(this.props.isAddCostBtnPressed);
    this.props.setIsAddCostBtnPressed();
  };

  render() {
    return (
      <Button variant="outlined" onClick={this.handleClick}>
        {this.props.isAddCostBtnPressed ? "Close Form" : "Add Cost"}
      </Button>
    );
  }
}

export default ToggleAddCostBtn;
