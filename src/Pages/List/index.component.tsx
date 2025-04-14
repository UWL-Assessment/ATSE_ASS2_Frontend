import { Button, Card, Col, Row, Tag } from "antd";
import book from "./../../assets/imges/book.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ReserveCalendar from "../../Layout/Home/Detail/Calendar";

const list = [
  {
    title: "Atomic Habit",
    author: "James Clear",
    image: book,
    status: "Available",
  },
  {
    title: "Atomic Habit",
    author: "James Clear",
    image: book,
    status: "Available",
  },
  {
    title: "Atomic Habit",
    author: "James Clear",
    image: book,
    status: "Available",
  },
];

const ListComponent = () => {
  return (
    <section className="list">
      <Row gutter={32}>
        {list.map((item, i) => {
          return (
            <Col xs={24} md={12} lg={8} key={i}>
              <Card>
                <img
                  src={book}
                  alt="book"
                  height={300}
                  style={{ marginBottom: "16px" }}
                />
                <h2 className="book-name">{item.title}</h2>
                <h3 className="book-author">{item.author}</h3>
                <Tag
                  icon={<BsFillCheckCircleFill />}
                  color={item.status === "Available" ? "success" : "error"}
                  style={{
                    gap: "4px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.status}
                </Tag>
                <div
                  style={{
                    marginTop: "16px",
                  }}
                >
                  <ReserveCalendar />
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default ListComponent;
