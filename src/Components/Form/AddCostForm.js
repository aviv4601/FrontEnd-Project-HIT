import React from "react";
import classes from "./AddCostForm.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import localstorageapi from "../api/localstorageapi";

class AddCostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sumValue: "",
      categoryValue: "Food",
      descriptionValue: "",
      isValidSumEntered: true,
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

  async handleSubmit(event) {
    event.preventDefault();

    this.setState({ isLoading: true });

    await this.ensureValidation();

    const isValid = this.state.isValidSumEntered;

    if (!isValid) {
      console.log("Wrong data entered!");
      alert("Something went wrong.. :)");
      this.setState({ isLoading: false });
      return;
    }

    const cost = {
      sum: this.state.sumValue,
      category: this.state.categoryValue,
      description: this.state.descriptionValue,
      date: new Date(),
    };

    try {
      await localstorageapi.addCost(cost);
      console.log("Data successfully saved to local storage.");
      alert("Data saved to local storage");
      this.cleanUpFunction();
    } catch (error) {
      console.error("Error while saving data to local storage: ", error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  ensureValidation() {
    this.setState({
      isValidSumEntered: true,
    });

    if (this.state.sumValue < 0 || this.state.sumValue === "") {
      this.setState({ isValidSumEntered: false });
    }
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
                <option value={"Food"}>Food</option>
                <option value={"Transportation"}>Transportation</option>
                <option value={"Entertainment"}>Entertainment</option>
                <option value={"Housing"}>Housing</option>
                <option value={"Other"}>Other</option>
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
