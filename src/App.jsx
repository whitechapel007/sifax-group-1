import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UpSquareOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Input } from "antd";
import Container from "./Container";
const { Search } = Input;
import Headers from "./Headers";
import { items1 } from "./exports";
import "./App.css";
// import Search from "./Search";
import Buttons from "./Button";
import Notification from "./Notification";
import Avatar from "./Avatar";
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `${
    index == 0
      ? "Dashboard"
      : index == 1
      ? "Projects"
      : index == 2
      ? "My Tasks"
      : index == 3
      ? "Message"
      : "Analytics"
  }`,
}));
const App = () => (
  <Layout hasSider>
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "white",
      }}
    >
      <div
        className="logo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontSize: "20px",
          marginTop: "10px",
        }}
      >
        <UpSquareOutlined style={{ fontSize: "30px", color: "#3232a8" }} />{" "}
        Tuscot
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
        display: "flex",
      }}
    >
      <Headers style={{ display: "flex" }} />
      <Content
        style={{
          margin: "24px 16px 0",
          overflow: "initial",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Container />
        <Container />
        <Container />
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  </Layout>
);
export default App;
