// In accordance to readability considerations we decided to make 2 seperate UI components that actually
// serving the same cause and act simialr. we prefered the readability above reusability
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
