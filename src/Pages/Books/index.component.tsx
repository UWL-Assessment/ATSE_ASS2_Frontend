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
  bookName?: string;
  authorName?: string;
  noBook?: number;
  description?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const BooksComponent = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/books");
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
            <Col xs={24} md={12} lg={12}>
              <Row>
                <Col span={24}>
                  <Form.Item<FieldType>
                    label="Book Name"
                    name="bookName"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Book Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item<FieldType>
                    label="Author Name"
                    name="authorName"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Author Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item<FieldType>
                    label="No. of Book"
                    name="noBook"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter No. of Book!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Select Category">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="demo">Demo2</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload action="/upload.do" listType="picture-card">
                      <button
                        style={{
                          color: "inherit",
                          cursor: "inherit",
                          border: 0,
                          background: "none",
                        }}
                        type="button"
                      >
                        <BsCloudPlus />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col xs={24} md={12} lg={12}>
              <Form.Item label="Description">
                <TextArea rows={22} />
              </Form.Item>
            </Col>
          </Row>

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

export default BooksComponent;
