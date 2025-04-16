import { Card, Col, Row, Tag, Button } from "antd";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ReservedDetail = () => {
  return (
    <section className="category">
      <Row gutter={48}>
        <Col xs={24} md={12} lg={6}>
          <Card>
            <img
              src="https://books.google.com/books/content?id=rqzwBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt="book"
              height={200}
              style={{ marginBottom: "16px" }}
            />
            <h2 className="book-name">
              Innovations in Governmental Accounting
            </h2>
            <h3 className="book-author">
              Vicente Montesinos, José Manuel Vela
            </h3>
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
              Available
            </Tag>

            <div style={{ marginTop: "16px" }}>
              <Button type="default" disabled>
                Book has been reserved
              </Button>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={16}>
          <p className="line-height-base">
            Innovations in Governmental Accounting explores the evolution and
            modernization of public sector accounting practices, focusing on
            transparency, accountability, and performance-based financial
            reporting. The book discusses key reforms in governmental accounting
            systems across various countries, addressing how these innovations
            support better decision-making, financial management, and governance
            in the public sector. It also covers the implementation of accrual
            accounting, harmonization with international standards, and the
            challenges of integrating new technologies and frameworks into
            traditional accounting models. This work is particularly valuable
            for researchers, policymakers, and public administration
            professionals seeking to understand the theoretical and practical
            advances in public financial management.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default ReservedDetail;
