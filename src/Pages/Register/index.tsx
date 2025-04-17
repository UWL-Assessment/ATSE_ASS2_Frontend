import { Col, Row, FormProps, Button, Form, Input, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";

type FieldType = {
  name?: string;
  password?: string;
  confirm_password?: string;
  email?: string;
};

const Register: React.FC = () => {
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <section className="login">
      <Row gutter={24}>
        <Col xs={24} md={12} lg={6} style={{}}></Col>
        <Col xs={24} md={12} lg={12} style={{}}>
          <div className="item">
            <h1 className="title">Get Started now</h1>
            <p style={{ marginBottom: "42px" }}>
              Enter your Credentials to access your account
            </p>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item<FieldType>
                label="Name"
                name="name"
                required={false}
                rules={[{ required: true, message: "Please Enter your Name" }]}
              >
                <Input placeholder="Enter Your Name" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Email Address"
                name="email"
                required={false}
                rules={[{ required: true, message: "Please Enter your Email" }]}
              >
                <Input placeholder="Enter Your Email" />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                required={false}
                rules={[
                  { required: true, message: "Please Enter your password!" },
                ]}
              >
                <Input.Password placeholder="Enter Password" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Confirm Password"
                name="confirm_password"
                required={false}
                rules={[
                  {
                    required: true,
                    message: "Please Enter your Confirm Password",
                  },
                ]}
              >
                <Input.Password placeholder="Enter Confirm Password" />
              </Form.Item>

              <Form.Item label={null}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => handleNavigate()}
                >
                  Sign in
                </Button>
              </Form.Item>
            </Form>
            <Flex justify="center">
              <p>
                Don’t have an account? <Link to="/">Login</Link>
              </p>
            </Flex>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6} style={{}}></Col>
      </Row>
    </section>
  );
};

export default Register;
