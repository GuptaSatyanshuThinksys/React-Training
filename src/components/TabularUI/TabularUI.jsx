import React, { useState } from "react";
import axios from "axios";

export const TabularUI = () => {
  const [tableData, setTableData] = useState([]);

  const fetchTableData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setTableData(response.data);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };


  return (
    <>
      {tableData.length ? (
        <div style={{padding: "5rem"}}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <b>{item.id}</b>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1 className="my-5">No data Available!!!</h1>
          <span type="button" className="button" onClick={fetchTableData}>
            <b>Fetch Data</b>
          </span>
        </div>
      )}
    </>
  );
};
