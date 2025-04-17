import { Col, Row, FormProps, Button, Checkbox, Form, Input, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
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
    navigate("/dashboard");
  };

  return (
    <section className="login">
      <Row gutter={24}>
        <Col xs={24} md={12} lg={6} style={{}}></Col>
        <Col xs={24} md={12} lg={12} style={{}}>
          <div className="item">
            <h1 className="title">Welcome back!</h1>
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
                label="Email Address"
                name="username"
                required={false}
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                required={false}
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Enter Password" />
              </Form.Item>

              <Flex
                align="center"
                justify="space-between"
                style={{
                  marginBottom: "20px",
                }}
              >
                <Form.Item<FieldType>
                  style={{ marginBottom: 0 }}
                  name="remember"
                  valuePropName="checked"
                  label={null}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="#">Forgot Password?</a>
              </Flex>

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
                Don’t have an account? <Link to="/register">Sign Up</Link>
              </p>
            </Flex>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6} style={{}}></Col>
      </Row>
    </section>
  );
};

export default Login;
