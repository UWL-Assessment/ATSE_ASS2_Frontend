/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
interface DataType {
  key: string;
  name: string;
  book: string;
}

const TableComponent = ({ data, columns }: any) => {
  return <Table<DataType> columns={columns} dataSource={data} />;
};

export default TableComponent;
