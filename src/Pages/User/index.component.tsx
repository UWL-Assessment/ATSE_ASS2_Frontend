import { Button, Flex, Space, Tag, Tooltip } from "antd";
import type { TableProps } from "antd";
import TableComponent from "../../Components/Table";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

interface DataType {
  key: string;
  user: string;
  ReservedBook: number;
  status: string;
  ReservedDate: Date;
  ReturningDate: Date;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Reserved Book",
    dataIndex: "ReservedBook",
    key: "ReservedBook",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <Tag color={status === "Returned" ? "green" : "yellow"}>{status}</Tag>
    ),
  },
  /*{
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status: "Returned" | "Reserved") => {
      const colorStyle = {
        Returned: {
          color: "#00B615",
          borderColor: "#00B615",
          backgroundColor: "transparent",
        },
        Reserved: {
          color: "#EED80FFF",
          borderColor: "#EED80FFF",
          backgroundColor: "transparent",
        },
      };

      return (
        <Tag
          style={{
            ...colorStyle[status],
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          {status}
        </Tag>
      );
    },
  },*/

  {
    title: "Reserved Date",
    dataIndex: "ReservedDate",
    key: "ReservedDate",
  },
  {
    title: "Returning Date",
    dataIndex: "ReturningDate",
    key: "ReturningDate",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Flex wrap gap="small">
          <Tooltip title="edit">
            <Button
              type="default"
              shape="circle"
              icon={<BsPencilSquare style={{ color: "#00B615" }} />}
              style={{ borderColor: "#00B615" }}
            />
          </Tooltip>
          <Tooltip title="delete">
            <Button danger shape="circle" icon={<BsFillTrashFill />} />
          </Tooltip>
        </Flex>
      </Space>
    ),
  },
];

const data = [
  {
    key: "001",
    user: "John Brown",
    ReservedBook: 2,
    status: "Returned",
    ReservedDate: "2025-03-20",
    ReturningDate: "2025-03-25",
  },
  {
    key: "002",
    user: "Karma Gurung",
    ReservedBook: 1,
    status: "Reserved",
    ReservedDate: "2025-03-31",
    ReturningDate: "2025-04-05",
  },
  {
    key: "003",
    user: "Sam Gurung",
    ReservedBook: 2,
    status: "Returned",
    ReservedDate: "2025-03-31",
    ReturningDate: "2025-04-03",
  },
  {
    key: "003",
    user: "Ram Gurung",
    ReservedBook: 3,
    status: "Reserved",
    ReservedDate: "2025-04-01",
    ReturningDate: "2025-04-08",
  },
];

const UserComponent = () => {
  return (
    <section className="user">
      <h1
        style={{
          marginBottom: "16px",
        }}
      >
        User List
      </h1>
      <TableComponent columns={columns} data={data} />
    </section>
  );
};

export default UserComponent;
