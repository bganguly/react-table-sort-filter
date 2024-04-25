import "./styles.css";
import Filter from "./components/Filter";
import Table from "./components/Table";
import { useState } from "react";

const App = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const initialTableData = months.map((month) => ({
    month: month,
    savings: Math.ceil(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1),
  }));
  const [tableData, setTableData] = useState(initialTableData);
  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter.length) {
      setTableData(
        initialTableData.filter((item) =>
          item.month.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setTableData(initialTableData);
    }
  };

  return (
    <div className="App">
      <Filter onChange={handleChange} />
      <Table data={tableData} />
    </div>
  );
};

export default App;
