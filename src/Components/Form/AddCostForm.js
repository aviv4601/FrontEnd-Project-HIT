import React from "react";
import classes from "./AddCostForm.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import localstorageapi from "../localstorageapi";

class AddCostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sumValue: "",
      categoryValue: "",
      descriptionValue: "",
      isValidSumEntered: true,
      isValidCategoryEntered: true,
      isLoading: false,
    };

    this.sumHandleChange = this.sumHandleChange.bind(this);
    this.descriptionHandleChange = this.descriptionHandleChange.bind(this);
    this.categoryHandleChange = this.categoryHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sumHandleChange(event) {
    this.setState({ sumValue: event.target.value });
  }

  descriptionHandleChange(event) {
    this.setState({ descriptionValue: event.target.value });
  }

  categoryHandleChange(event) {
    this.setState({ categoryValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ isLoading: true });
    this.ensureValidation();

    const cost = {
      sum: this.state.sumValue,
      category: this.state.categoryValue,
      description: this.state.descriptionValue,
      date: new Date(),
    };

    setTimeout(() => {
      // to ensure the validation we had to use a timer,
      // else the data will be sent to local storage before the validation is over.
      if (!this.state.isValidSumEntered || !this.state.isValidCategoryEntered) {
        console.log("Wrong data entered!");
        this.setState({ isLoading: false });
        return;
      } else {
        localstorageapi
          .addCost(cost)
          .then(() => {
            console.log("Data successfully saved to local storage.");
            alert("Data saved to local storage");
            this.cleanUpFunction();
            this.setState({ isLoading: false });
          })
          .catch((error) => {
            console.error("Error while saving data to local storage: ", error);
          });
      }
    }, 500);
  }

  ensureValidation() {
    // const categories = ["food", "transportation", "entertainment", "other"];

    this.setState({
      isValidSumEntered: true,
      isValidCategoryEntered: true,
    });

    if (this.state.sumValue < 0 || this.state.sumValue === "") {
      this.setState({ isValidSumEntered: false });
    }

    // if (
    //   !categories.includes(this.state.categoryValue.toLowerCase()) ||
    //   this.state.categoryValue === ""
    // ) {
    //   this.setState({ isValidCategoryEntered: false });
    // }
  }

  cleanUpFunction() {
    this.setState({ sumValue: "", categoryValue: "", descriptionValue: "" });
  }

  render() {
    return (
      <div className={classes["center-form"]}>
        <form onSubmit={this.handleSubmit}>
          <div className={classes["input-line"]}>
            <label>
              Sum:
              <input
                type="number"
                value={this.state.sumValue}
                onChange={this.sumHandleChange}
                className={
                  !this.state.isValidSumEntered
                    ? classes["invalid-input"]
                    : classes["input-field"]
                }
              />
            </label>
          </div>
          <div>
            <label>
              Category:
              <select
                value={this.state.categoryValue}
                onChange={this.categoryHandleChange}
                className={classes["select-category"]}
              >
                <option value={"food"}>Food</option>
                <option value={"Transportation"}>Transportation</option>{" "}
                <option value={"entertainment"}>Entertainment</option>
                <option value={"housing"}>Housing</option>
                <option value={"other"}>Other</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Description:
              <input
                type="text"
                value={this.state.descriptionValue}
                onChange={this.descriptionHandleChange}
                className={classes["input-field"]}
              />
            </label>
          </div>
          <div className={classes["submit-btn"]}>
            {this.state.isLoading ? (
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
              >
                Save
              </LoadingButton>
            ) : (
              <Button type="submit" variant="contained">
                Sumbit
              </Button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default AddCostForm;
