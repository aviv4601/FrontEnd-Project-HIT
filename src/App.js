// Developers details:
// Aviv Amrusi 208665927
// Tom Vivdenko 207610718
import "./App.css";
import AddCostForm from "./Components/Form/AddCostForm";
import AskForReportForm from "./Components/Form/AskForReportForm";
import ToggleAskForReportCostBtn from "./Components/UI/ToggleAskForReportBtn";
import ToggleAddCostBtn from "./Components/UI/ToggleAddCostBtn";
import React, { Component } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

class App extends Component {
  // App c'tor
  constructor(props) {
    super(props);
    this.state = {
      isAddCostBtnPressed: false,
      isAskForReportBtnPressed: false,
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Costs Manager 🛒</h1>
        </header>
        <body>
        <div className="cost">
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
        </body>
        <footer>
          <div className="footer">
            <div className="footer-text">
              <a href="https://github.com/aviv4601"> 
              <GitHubIcon />
              </a>
              Aviv Amrusi  
            </div>
            <div className="footer-text">
              <a href="https://github.com/VTomcode">
              <GitHubIcon />
              </a>
              Tom Vivdenko 
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
