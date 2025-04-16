import { Card, Col, Row, Tag } from "antd";
import book from "./../../assets/imges/book.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ReserveCalendar from "../../Layout/Home/Detail/Calendar";

const list = [
  {
    title: "Innovations in Governmental Accounting",
    author: "Vicente Montesinos, José Manuel Vela",
    image:
      "https://books.google.com/books/content?id=rqzwBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "Accounting 101",
    author: "Michele Cagan",
    image:
      "https://books.google.com/books/content?id=_ZHGDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "Financial & Managerial Accounting",
    author: "Jan R. Williams",
    image:
      "https://books.google.com/books/content?id=DViFNQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    status: "Available",
  },
  {
    title: "Accounting Information Systems",
    author: "Leslie Turner, Andrea B. Weickgenannt",
    image:
      "https://books.google.com/books/content?id=mJYEKkush38C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "Radically Simple Accounting",
    autor: "Madeline Bailey",
    image:
      "https://books.google.com/books/content?id=PWm-BIlsxGMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
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
                  src={item.image}
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
