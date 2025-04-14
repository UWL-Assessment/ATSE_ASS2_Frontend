/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormProps } from "antd";
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import { BsCloudPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type FieldType = {
  category?: string;
  description?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const { TextArea } = Input;

const CategoriesComponent = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/categories");
  };
  return (
    <section className="books">
      <Card>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Row gutter={48}>
            <Col xs={24} md={12} lg={24}>
              <Form.Item<FieldType>
                label="Category"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Category",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col xs={24} md={12} lg={24}>
              <Form.Item label="Description">
                <TextArea rows={14} />
              </Form.Item>
            </Col>
          </Row>

          {/* <Form.Item label={null}>
            <Flex gap={16}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button danger htmlType="reset">
                Cancel
              </Button>
            </Flex>
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#00B615",
                borderColor: "#00B615",
                marginRight: 8,
              }}
            >
              Submit
            </Button>
            <Button
              onClick={handleCancel}
              type="default"
              style={{
                backgroundColor: "#FF2B30",
                borderColor: "#FF2B30",
                color: "white",
              }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  );
};

export default CategoriesComponent;
