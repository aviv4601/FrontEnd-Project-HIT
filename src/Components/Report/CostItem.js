import React from "react";
import classes from "./CostItem.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import CategoryIcon from "@mui/icons-material/Category";

class CostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.id}>
        <div className={classes["report-cost-item"]}>
          <span className={classes["cost-item-line"]}>
            <h3>$ . Sum: {this.props.sum}</h3>
          </span>
          <span className={classes["cost-item-line"]}>
            <CategoryIcon
              fontSize="xxsmall"
              className={classes["cost-item-icon"]}
            ></CategoryIcon>
            <h3> . Category: {this.props.category}</h3>
          </span>
          <span className={classes["cost-item-line"]}>
            <DescriptionIcon
              fontSize="xxsmall"
              className={classes["cost-item-icon"]}
            ></DescriptionIcon>
            <h3> . Description: {this.props.description}</h3>
          </span>
        </div>
      </li>
    );
  }
}

export default CostItem;
