import React, { useState } from "react";
import { Button, Flex, Modal } from "antd";
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import dayjs, { Dayjs } from "dayjs";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const ReserveCalendar: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2017-01-25"));
  const { token } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (newValue: Dayjs) => {
    setSelectedValue(newValue);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    marginBottom: "16px",
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Reserve this book
      </Button>
      <Modal
        title="Choose Date"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <div style={wrapperStyle}>
          <Calendar
            fullscreen={false}
            onPanelChange={onPanelChange}
            onSelect={handleSelect}
          />
        </div>
        <Flex
          justify="space-between"
          align="center"
          style={{ marginBottom: "16px" }}
        >
          <div>
            <p>Returning Date</p>
            <p>{selectedValue?.format("DD, MMMM, YYYY")}</p>
          </div>
          <Button key="submit" type="primary" onClick={handleOk}>
            Reserve
          </Button>
        </Flex>
        <Flex justify="center">
          <p>Allowed Max 7 days only</p>
        </Flex>
      </Modal>
    </>
  );
};

export default ReserveCalendar;
