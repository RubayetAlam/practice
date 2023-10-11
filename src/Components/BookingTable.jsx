import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Table } from "antd";
import { useState } from "react";

function InfoTable() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [address, setAddress] = useState('');
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Karim",
      email: "karim@gmail.com",
      address: "Dhanmondi",
    },
    {
      id: 2,
      name: "Ali",
      email: "ali@gmail.com",
      address: "Farmgate",
    },
    {
      id: 3,
      name: "Alam",
      email: "alam@gmail.com",
      address: "Mirpur",
    },
    {
      id: 4,
      name: "rabi",
      email: "rabi@gmail.com",
      address: "Uttara",
    },
    {
      id: 5,
      name: "Rahim",
      email: "rahim@gmail.com",
      address: "rahim ahmed",
    },
  ]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    setDataSource((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        name: name,
        email:email,
        address:address,
      },
    ]);

    setName('');
    setEmail('');
    setAddress('');

    // Close the modal
    setIsEditing(false);
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((prevData) => {
          return prevData.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onAddStudent}>Add a new Student</Button>
        {/* add New Items */}
        <Form>
          <Form.Item label="Item Name">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Add New Name"
            />
            </Form.Item>
            <Form.Item label="Item Email">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Add New Email"
            />
            </Form.Item>
            <Form.Item label="Item Address">
             <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Add New Address"
            />
          </Form.Item>
        </Form>
        <Table columns={columns} dataSource={dataSource} key={Math.random()}></Table>
        

        <Modal
          title="Edit Student"
          open={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((prevData) => {
              return prevData.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((prev) => {
                return { ...prev, address: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default InfoTable;
