import { Button, Flex, Space, Tag, Tooltip } from "antd";
import type { TableProps } from "antd";
import TableComponent from "../../Components/Table";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import DeleteConfirmModal from "../../Components/Modal";

interface DataType {
  key: string;
  category: string;
  discription: number;
  noBooks: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Discription",
    dataIndex: "discription",
    key: "discription",
  },

  {
    title: "No of Books",
    dataIndex: "noBooks",
    key: "noBooks",
    render: (noBooks) => (
      <Tag color={noBooks > 0 ? (noBooks > 3 ? "green" : "yellow") : "red"}>
        {noBooks} Books
      </Tag>
    ),
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Flex wrap gap="small">
          <Tooltip title="Edit">
            <Button
              type="link"
              shape="circle"
              icon={<BsPencilSquare style={{ color: "#00B615" }} />}
              style={{ borderColor: "#00B615" }}
              href="/categories/edit"
              className="edit-btn"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteConfirmModal />
          </Tooltip>
        </Flex>
      </Space>
    ),
  },
];

const data = [
  {
    key: "00001",
    category: "Science",
    discription: "This is a science category",
    noBooks: 5,
  },
  {
    key: "00002",
    category: "Psychology",
    discription: "This is a psychology category",
    noBooks: 1,
  },
  {
    key: "00003",
    category: "Finience",
    discription: "This is a Finence category",
    noBooks: 5,
  },
];

const CategoriesListComponent = () => {
  const navigate = useNavigate();
  const handleAddNew = () => {
    navigate("/categories/create");
  };
  return (
    <section className="user">
      <Flex justify="space-between" align="center">
        <h1
          style={{
            marginBottom: "16px",
          }}
        >
          Categories List
        </h1>
        <Button
          type="primary"
          onClick={handleAddNew}
          icon={<BsPlus size={18} />}
        >
          Add Cetegory
        </Button>
      </Flex>
      <TableComponent columns={columns} data={data} />
    </section>
  );
};

export default CategoriesListComponent;
