import { Button, Card, Col, Row, Tag } from "antd";
import book from "./../../../assets/imges/book.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const category = [
  {
    title: "Atomic Habit",
    autor: "James Clear",
    image: book,
    status: "Available",
  },
  {
    title: "Atomic Habit",
    autor: "James Clear",
    image: book,
    status: "Unavailable",
  },
  {
    title: "Atomic Habit",
    autor: "James Clear",
    image: book,
    status: "Available",
  },
  {
    title: "Atomic Habit",
    autor: "James Clear",
    image: book,
    status: "Available",
  },
  {
    title: "Atomic Habit",
    autor: "James Clear",
    image: book,
    status: "Available",
  },
  {
    title: "Atomic Habit",
    autor: "James Clear",
    image: book,
    status: "Available",
  },
  {
    title: "Atomic Habit",
    autor: "James Clear",
    image: book,
    status: "Available",
  },
  {
    title: "Atomic Habit",
    autor: "James Clear",
    image: book,
    status: "Available",
  },
];
const CategoryComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/1/detail");
  };
  return (
    <section className="category">
      <Row gutter={[24, 24]}>
        {category.map((item, i) => {
          return (
            <Col xs={24} md={12} lg={6} key={i}>
              <Card onClick={() => handleClick()}>
                <img
                  src={item.image}
                  alt="book"
                  height={200}
                  style={{ marginBottom: "16px" }}
                />
                <h2 className="book-name">{item.title}</h2>
                <h3 className="book-author">{item.autor}</h3>
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
                  <Button color="primary" variant="outlined">
                    Reserve this book
                  </Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default CategoryComponent;
