import { Table } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then((res)=>{
        setLoading(false);
        setState(
          res.data.map(row => ({
            Name: row.name,
            Email: row.email,
            Body:row.body,
            id: row.id
          }))
        );
      }
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      width: 150
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: 150
    },{
        title: "Body",
        dataIndex: "Body",
        width: 200
      }
  ];

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <Table
          columns={columns}
          dataSource={state}
          pagination={{ pageSize: 50 }}
        //   scroll={{ y: 240 }}  
        />
      )}
    </div>
  );
}

export default FetchData;