// import { Button, Modal, Space } from "antd";
// import { BsFillTrash3Fill } from "react-icons/bs";
// import React from "react";
// import "../../styles/deleteConfirmModal.scss";

// const DeleteConfirmModal: React.FC = () => {
//   const [modal, contextHolder] = Modal.useModal();

//   const handleDelete = () => {
//     console.log("Book deleted");
//   };

//   const confirm = () => {
//     modal.confirm({
//       icon: null,
//       centered: true,
//       okText: "Delete",
//       cancelText: "Cancel",
//       className: "custom-delete-modal",
//       okButtonProps: {
//         className: "confirm-btn",
//       },
//       cancelButtonProps: {
//         className: "cancel-btn",
//       },
//       title: <div className="modal-title">Do you want to Delete?</div>,
//       content: "",
//       onOk: handleDelete,
//     });
//   };

//   return (
//     <>
//       <Space>
//         <Button
//           onClick={confirm}
//           icon={<BsFillTrash3Fill />}
//           shape="circle"
//           danger
//         />
//       </Space>
//       {contextHolder}
//     </>
//   );
// };

// export default DeleteConfirmModal;

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { BsFillTrash3Fill } from "react-icons/bs";

const DeleteConfirmModal: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = () => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Do you want to delete?",
      okText: "Ok",
      cancelText: "Cancel",
      centered: true,
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
