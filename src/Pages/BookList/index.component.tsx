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
              href="/ubooks"
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
    bookName: "Innovations in Governmental Accounting",
    authorName: "Vicente Montesinos, José Manuel Vela",
    category: "Finance",
    available: 10,
  },
  {
    key: "0002",
    bookName: "The Complete Idiot's Guide to Social Security and Medicare",
    authorName: "Lita Epstein",
    category: "Finance",
    available: 0,
  },
  {
    key: "0003",
    bookName: "Accounting 101",
    authorName: "Michele Cagan",
    category: "Finance",
    available: 15,
  },
  {
    key: "0004",
    bookName: "Financial & Managerial Accounting",
    authorName: "Jan R. Williams",
    category: "Finance",
    available: 2,
  },
  {
    key: "0005",
    bookName: "The Portfolio Theorists",
    authorName: "C. Read",
    category: "Finance",
    available: 1,
  },
  {
    key: "0006",
    bookName: "Accounting Information Systems",
    authorName: "Leslie Turner, Andrea B. Weickgenannt",
    category: "Finance",
    available: 5,
  },
  {
    key: "0007",
    bookName: "Introduction to Financial Accounting",
    authorName: "Charles T. Horngren, Gary L. Sundem, John A. Elliott",
    category: "Finance",
    available: 6,
  },
  {
    key: "0008",
    bookName: "Financial Accounting and Reporting",
    authorName: "Barry Elliott, Jamie Elliott",
    category: "Finance",
    available: 4,
  },
  {
    key: "0009",
    bookName: "Encyclopedia of Finance",
    authorName: "Cheng-Few Lee",
    category: "Finance",
    available: 3,
  },
  {
    key: "0010",
    bookName: "Corporate Reporting",
    authorName: "G. K. Everingham, Suresh Parbhoo Kana",
    category: "Finance",
    available: 0,
  },
  {
    key: "0011",
    bookName: "Radically Simple Accounting",
    authorName: "Madeline Bailey",
    category: "Finance",
    available: 0,
  },
  {
    key: "0012",
    bookName: "Global Financial Meltdown",
    authorName: "C. Read",
    category: "Finance",
    available: 13,
  },
  {
    key: "0013",
    bookName: "A History of Accounting and Accountants",
    authorName: "Richard Brown",
    category: "Finance",
    available: 2,
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
