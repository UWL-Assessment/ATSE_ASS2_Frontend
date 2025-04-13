/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Flex, Menu, MenuProps } from "antd";
import logo from "./../../assets/imges/dummy-logo-02.png";
import { siderbarConstant } from "./../../Utils/sidebarConstant";
import { useNavigate } from "react-router-dom";

interface sidebarComponentProps {
  collapsed?: boolean;
}

const SidebarComponent: React.FC<sidebarComponentProps> = (props) => {
  const { collapsed } = props;
  const items = siderbarConstant;
  const navigate = useNavigate();

  const handleMenuClick: MenuProps["onClick"] = (info: any) => {
    const selectedItem = siderbarConstant
      .flatMap((item: any) => (item.children ? item.children : item))
      .find((item) => item.key === info.key);

    if (selectedItem && selectedItem.path) {
      navigate(selectedItem.path);
    }
  };

  return (
    <section>
      <Flex
        justify="center"
        align="center"
        gap={8}
        style={{ padding: "10px 0 20px" }}
      >
        <img
          src={logo}
          alt="img"
          width={collapsed ? 50 : 60}
          className="text-center"
        />
      </Flex>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
        theme="light"
        items={items}
        onClick={handleMenuClick}
      />
    </section>
  );
};

export default SidebarComponent;
