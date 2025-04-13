/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout } from "antd";
import HomeHeader from "./Home/Header";

const { Header } = Layout;

const HomeLayout = ({ children }: any) => {
  return (
    <Layout>
      <Header className="home-header">
        <HomeHeader />
      </Header>
      <div className="home-wrapper">{children}</div>
    </Layout>
  );
};

export default HomeLayout;
