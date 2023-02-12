import React, { Component } from "react";
import Button from "@mui/material/Button";

class ToggleAskForReportBtn extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(this.props.isAskForReportBtnPressed);
    this.props.setIsAskForReportBtnPressed();
  };

  render() {
    return (
      <Button variant="outlined" onClick={this.handleClick}>
        {this.props.isAskForReportBtnPressed ? "Close Form" : "Ask For Report"}
      </Button>
    );
  }
}

export default ToggleAskForReportBtn;
