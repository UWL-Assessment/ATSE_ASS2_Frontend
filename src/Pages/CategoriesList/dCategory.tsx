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
    render: () => (
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
    category: "Accounting",
    discription:
      "Explore financial systems, reporting standards, and the language of business through accounting principles.",
    noBooks: 8,
  },
  {
    key: "00002",
    category: "Art",
    discription:
      "Dive into human creativity and expression through visual masterpieces, history, and artistic movements.",
    noBooks: 0,
  },
  {
    key: "00003",
    category: "Biology",
    discription:
      "Uncover the science of life, from cellular structures to complex ecosystems and human anatomy.",
    noBooks: 0,
  },
  {
    key: "00004",
    category: "Business",
    discription:
      "Gain insights into entrepreneurship, management, marketing, and the dynamics of the global economy.",
    noBooks: 2,
  },
];

const CategoriesDComponent = () => {
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

export default CategoriesDComponent;
