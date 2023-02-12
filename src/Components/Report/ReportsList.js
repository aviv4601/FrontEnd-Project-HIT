import { Card } from "@mui/material";
import React from "react";
import CostItem from "./CostItem";
import classes from "./ReportsList.module.css";

class ReportsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.filteredData.map((data, index) => (
          <ul key={index}>
            <Card className={classes["cost-card"]}>
              <CostItem
                id={index}
                sum={data.sum}
                category={data.category}
                description={data.description}
              ></CostItem>
            </Card>
          </ul>
        ))}
      </div>
    );
  }
}

export default ReportsList;
