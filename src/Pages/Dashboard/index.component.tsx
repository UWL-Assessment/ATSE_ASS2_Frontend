/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Col, Row } from "antd";
import path from "path";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DashboardComponent = () => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      <Row gutter={24}>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            size="small"
            style={{ textAlign: "center" }}
            onClick={() => handleClick("/user")}
          >
            <div className="icon-holder">
              <MdOutlinePeopleAlt size={42} />
            </div>
            <p className="content-holder">Users</p>
            <h1 className="number-holder">12</h1>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            size="small"
            style={{ textAlign: "center" }}
            onClick={() => handleClick("/books")}
          >
            <div className="icon-holder">
              <MdMenuBook size={42} />
            </div>
            <p className="content-holder">Books</p>
            <h1 className="number-holder">12</h1>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            bordered={false}
            size="small"
            style={{ textAlign: "center" }}
            onClick={() => handleClick("/categories")}
          >
            <div className="icon-holder">
              <MdCategory size={42} />
            </div>
            <p className="content-holder">Categories</p>
            <h1 className="number-holder">12</h1>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardComponent;
