/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Layout } from "antd";
import { useState, useCallback, lazy, Suspense } from "react";
import SidebarComponent from "./Sidebar/index.component";
import MainWrapper from "../Components/MainWrapper";

const { Header, Sider, Content } = Layout;
const AvatarComponent = lazy(() => import("../Components/Avatar"));
import { MdMenuOpen } from "react-icons/md";

const DashboradLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <Layout>
      <Sider
        width={collapsed ? "100px" : "260px"}
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        trigger={null}
        className="sidebar"
      >
        <SidebarComponent collapsed={collapsed} />
      </Sider>
      <Layout style={{ marginInlineStart: collapsed ? 81 : 260 }}>
        <Header className="header">
          <Flex align="center" style={{ height: "100%" }} gap={8}>
            <Button
              type="text"
              onClick={toggleCollapsed}
              icon={<MdMenuOpen size={24} />}
            ></Button>
          </Flex>
          <Flex gap={8}>
            <Suspense fallback={<div>Loading Avatar...</div>}>
              <AvatarComponent />
            </Suspense>
          </Flex>
        </Header>
        <Content>
          <MainWrapper>{children}</MainWrapper>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboradLayout;
