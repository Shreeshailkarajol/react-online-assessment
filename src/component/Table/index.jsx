import React, { useEffect, useState } from "react";
import "./index.css";

const Table = (props) => {
  const { rows, columns } = props;
  const [tableRows, setTableRows] = useState(rows);

  useEffect(() => {
    setTableRows(rows);
  }, [rows]);

  const sortData = (columnName) => {
    let sortedData = [...tableRows];
    if (columnName === "Name") {
      sortedData = sortedData.sort((a, b) => {
        let x = a.name.toLowerCase(),
          y = b.name.toLowerCase();

        if (x < y) {
          return -1;
        }

        if (x > y) {
          return 1;
        }
        return 0;
      });
    } else {
      sortedData = sortedData.sort((a, b) => {
        return a.age - b.age;
      });
    }
    setTableRows(sortedData);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((item) => (
              <th key={item} onClick={(e) => sortData(item)}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
