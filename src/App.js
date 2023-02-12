import "./App.css";
import AddCostForm from "./Components/Form/AddCostForm";
import AskForReportForm from "./Components/Form/AskForReportForm";
import ToggleAskForReportCostBtn from "./Components/UI/ToggleAskForReportBtn";
import ToggleAddCostBtn from "./Components/UI/ToggleAddCostBtn";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddCostBtnPressed: false,
      isAskForReportBtnPressed: false,
    };
  }

  render() {
    console.log("is asked : ", this.state.isAskForReportBtnPressed);
    return (
      <div className="App">
        <header>
          <h1>Costs Manager</h1>
        </header>
        <div>
          <ToggleAddCostBtn
            isAddCostBtnPressed={this.state.isAddCostBtnPressed}
            setIsAddCostBtnPressed={() =>
              this.setState({
                isAddCostBtnPressed: !this.state.isAddCostBtnPressed,
              })
            }
          />
          {this.state.isAddCostBtnPressed ? <AddCostForm /> : <div></div>}
        </div>
        <div className="report">
          <ToggleAskForReportCostBtn
            isAskForReportBtnPressed={this.state.isAskForReportBtnPressed}
            setIsAskForReportBtnPressed={() =>
              this.setState({
                isAskForReportBtnPressed: !this.state.isAskForReportBtnPressed,
              })
            }
          />
          {this.state.isAskForReportBtnPressed ? (
            <div className="ask-for-report-form">
              <AskForReportForm />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
