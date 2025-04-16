import { Button, Card, Col, Row, Tag } from "antd";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const category = [
  {
    title: "Innovations in Governmental Accounting",
    autor: "Vicente Montesinos, José Manuel Vela",
    image:
      "https://books.google.com/books/content?id=rqzwBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "The Complete Idiot's Guide to Social Security and Medicare",
    autor: "Lita Epstein",
    image:
      "https://books.google.com/books/content?id=q8o0e_MGzYwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Unavailable",
  },
  {
    title: "Accounting 101",
    autor: "Michele Cagan",
    image:
      "https://books.google.com/books/content?id=_ZHGDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "Financial & Managerial Accounting",
    autor: "Jan R. Williams",
    image:
      "https://books.google.com/books/content?id=DViFNQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    status: "Available",
  },
  {
    title: "The Portfolio Theorists",
    autor: "C. Read",
    image:
      "https://books.google.com/books/content?id=YZd9DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "Accounting Information Systems",
    autor: "Leslie Turner, Andrea B. Weickgenannt",
    image:
      "https://books.google.com/books/content?id=mJYEKkush38C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "Introduction to Financial Accounting",
    autor: "Charles T. Horngren, Gary L. Sundem, John A. Elliott",
    image:
      "https://books.google.com/books/content?id=ORaaAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    status: "Available",
  },
  {
    title: "Financial Accounting and Reporting",
    autor: "Barry Elliott, Jamie Elliott",
    image:
      "https://books.google.com/books/content?id=aSSjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },

  {
    title: "Encyclopedia of Finance",
    autor: "Cheng-Few Lee",
    image:
      "https://books.google.com/books/content?id=I6BH-RKYVG4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "Corporate Reporting",
    autor: "G. K. Everingham, Suresh Parbhoo Kana",
    image:
      "https://books.google.com/books/content?id=vI9Mo3bQ5J8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Unavailable",
  },
  {
    title: "Radically Simple Accounting",
    autor: "Madeline Bailey",
    image:
      "https://books.google.com/books/content?id=PWm-BIlsxGMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "Global Financial Meltdown",
    autor: "C. Read",
    image:
      "https://books.google.com/books/content?id=x5p_DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    status: "Available",
  },
  {
    title: "A History of Accounting and Accountants",
    autor: "Richard Brown",
    image:
      "https://books.google.com/books/content?id=iBpaLgaatnYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    status: "Unavailable",
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
