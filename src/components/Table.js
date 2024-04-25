import { useState } from "react";

const Table = ({ data }) => {
  const [sortAsc, setSortAsc] = useState(true);
  const handleHeaderSort = (e) => {
    if (sortAsc) {
      data.sort((a, b) => (a.month < b.month ? -1 : 1));
    } else {
      data.sort((a, b) => (a.month > b.month ? -1 : 1));
    }
    setSortAsc(!sortAsc);
  };

  const thead = (
    <thead onClick={handleHeaderSort}>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
    </thead>
  );
  const trows = (
    <tbody>
      {data.map((item, i) => {
        return (
          <tr key={i} style={{ textAlign: "center" }}>
            <td>{item.month}</td>
            <td>{item.savings}</td>
          </tr>
        );
      })}
      <tr>
        <td>--</td>
        <td>-------</td>
      </tr>
    </tbody>
  );
  const tfoot = (
    <tfoot>
      <tr>
        <td>Totals </td>
        <td>
          {data.reduce(
            (accumulator, currentValue) => accumulator + currentValue.savings,
            0
          )}
        </td>
      </tr>
    </tfoot>
  );
  return (
    <table className="customTable">
      {thead}
      {trows}
      {tfoot}
    </table>
  );
};

export default Table;
