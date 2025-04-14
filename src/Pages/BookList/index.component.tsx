/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Flex, Space, Tag, Tooltip } from "antd";
import type { TableProps } from "antd";
import TableComponent from "../../Components/Table";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import DeleteConfirmModal from "../../Components/Modal";

interface DataType {
  key: string;
  bookName: string;
  authorName: string;
  category: string;
  available: number;
}

const handelUpdate = () => {
  const navigate = useNavigate();
  return navigate("/books/edit");
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Book Name",
    dataIndex: "bookName",
    key: "bookName",
  },
  {
    title: "Author",
    dataIndex: "authorName",
    key: "authorName",
  },

  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Available",
    dataIndex: "available",
    key: "available",
    render: (available) => (
      <Tag color={available > 0 ? (available > 3 ? "green" : "yellow") : "red"}>
        {available} Books
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
              href="/books/edit"
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
    key: "0001",
    bookName: "Atomic Habits",
    authorName: "James Clear",
    category: "Pysology",
    available: 5,
  },
  {
    key: "0002",
    bookName: "The Big Data",
    authorName: "Dr. Chen",
    category: "Science",
    available: 0,
  },
  {
    key: "0003",
    bookName: "Research Methodology",
    authorName: "Dr. Julie",
    category: "Engineering",
    available: 3,
  },
];

const BookListComponent = () => {
  const navigate = useNavigate();
  const handleAddNew = () => {
    navigate("/books/create");
  };

  return (
    <section className="user">
      <Flex justify="space-between" align="center">
        <h1
          style={{
            marginBottom: "16px",
          }}
        >
          Book List
        </h1>
        <Button
          type="primary"
          onClick={handleAddNew}
          icon={<BsPlus size={18} />}
        >
          Add Book
        </Button>
      </Flex>
      <TableComponent columns={columns} data={data} />
    </section>
  );
};

export default BookListComponent;
