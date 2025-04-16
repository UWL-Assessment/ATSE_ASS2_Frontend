import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { BsFillTrash3Fill } from "react-icons/bs";

const DeleteConfirmModal: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();
  const navigate = useNavigate();

  // Action to perform on confirm
  const handleDelete = () => {
    console.log("Book deleted");
    navigate("/dCategories");
  };

  // Show confirmation modal
  const confirm = () => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Do you want to delete?",
      okText: "Ok",
      cancelText: "Cancel",
      centered: true,
      onOk: handleDelete,
    });
  };

  return (
    <>
      <Space>
        <Button
          onClick={confirm}
          icon={<BsFillTrash3Fill />}
          shape="circle"
          danger
        />
      </Space>
      {contextHolder}
    </>
  );
};

export default DeleteConfirmModal;
