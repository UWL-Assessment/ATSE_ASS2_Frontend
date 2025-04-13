import { Card, Col, Row, Tag } from "antd";
import book from "./../../../assets/imges/book.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ReserveCalendar from "./Calendar";

const Detail = () => {
  return (
    <section className="category">
      <Row gutter={48}>
        <Col xs={24} md={12} lg={6}>
          <Card>
            <img
              src={book}
              alt="book"
              height={200}
              style={{ marginBottom: "16px" }}
            />
            <h2 className="book-name">Atomic Habit</h2>
            <h3 className="book-author">James Clear</h3>
            <Tag
              icon={<BsFillCheckCircleFill />}
              color="success"
              style={{
                gap: "4px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              success
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
        <Col xs={24} md={12} lg={16}>
          <p className="line-height-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            distinctio maiores repellat voluptate, quibusdam pariatur minima
            explicabo. Laudantium accusantium illo quidem repellat, perspiciatis
            autem cum? Delectus enim voluptate rem, temporibus error quasi quam
            labore exercitationem dicta ut? Numquam quas incidunt fuga molestiae
            dolorem esse sequi magni totam fugiat sed tenetur quidem
            voluptatibus, quibusdam accusamus eum recusandae quaerat ipsa? Qui,
            sequi architecto! Voluptatibus beatae magnam repellat suscipit
            doloremque nesciunt, corrupti tempore. Quae consectetur hic magni
            exercitationem. Atque itaque cumque excepturi ut pariatur molestias
            nisi modi explicabo rem at quisquam, numquam alias quidem harum
            facilis ipsam, fuga repudiandae sapiente qui. Saepe facilis
            similique rerum eveniet doloremque enim fuga totam ad consectetur
            mollitia tempore nam hic eos earum itaque iste dolor illo natus
            adipisci fugit, a libero. Tempore, consectetur dolore. Ipsam rem
            eveniet facere? Dolor reprehenderit accusantium quas quidem ullam
            quisquam ea aliquam a distinctio enim. Mollitia sapiente iste animi
            sunt, magni aperiam enim. Delectus id obcaecati ipsa, eius voluptas
            praesentium? Nam dolor, voluptate, doloremque ipsum amet aliquam
            repellat libero qui incidunt recusandae quam, eius error atque omnis
            sint voluptas est necessitatibus unde odit expedita provident iure
            ex deleniti? Nesciunt perspiciatis facere explicabo similique
            quibusdam nam ullam quaerat voluptatum eos voluptatem, et quia.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Detail;
