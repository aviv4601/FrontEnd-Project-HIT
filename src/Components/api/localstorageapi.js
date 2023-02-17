var localstorageapi = {};

localstorageapi.addCost = (cost) => {
  return new Promise((resolve) => {
    let existingData = JSON.parse(localStorage.getItem("costs"));
    if (!existingData) {
      existingData = [];
    }

    existingData.push(cost);
    localStorage.setItem("costs", JSON.stringify(existingData));
    console.log("Cost added to local storage: ", cost);
    resolve();
  });
};

localstorageapi.getReport = (year, month) => {
  return new Promise((resolve, reject) => {
    let data = JSON.parse(localStorage.getItem("costs"));
    let filteredData = [];

    if (!data) {
      reject("No data found in local storage.");
    } else {
      for (let i = 0; i < data.length; i++) {
        let itemDate = new Date(data[i].date);
        let itemYear = itemDate.getFullYear();
        let itemMonth = itemDate.getMonth() + 1;
        if (itemYear === year && itemMonth === month) {
          filteredData.push(data[i]);
        }
      }
      resolve(filteredData);
    }
  });
};

export default localstorageapi;
