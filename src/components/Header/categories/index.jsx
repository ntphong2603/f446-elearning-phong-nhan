import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";

export default class Categories extends Component {
  render() {
    function handleClick(e) {
      console.log("click", e);
    }
    const { SubMenu } = Menu;
    const menu = (
      <Menu
        onClick={handleClick}
        style={{ width: 256, marginTop: 20 }}
        mode="vertical"
      >
        <SubMenu key="sub1" title="Development">
          <Menu.Item>All Development</Menu.Item>
          <SubMenu key="sub12" title="Web Development">
            <p style={{ fontWeight: 700, margin: 10, color: "#73726c" }}>
              Popular Topics
            </p>
            <Menu.Item>All Web Development</Menu.Item>
            <Menu.Item>JavaScript</Menu.Item>
            <Menu.Item>React</Menu.Item>
            <Menu.Item>Angular</Menu.Item>
            <Menu.Item>CSS</Menu.Item>
            <Menu.Item>PHP</Menu.Item>
            <Menu.Item>Node.JS</Menu.Item>
            <Menu.Item>Python</Menu.Item>
            <Menu.Item>Vue JS</Menu.Item>
          </SubMenu>
          <SubMenu key="sub13" title="Data Science">
            <p style={{ fontWeight: 700, margin: 10, color: "#73726c" }}>
              Popular Topics
            </p>
            <Menu.Item>All Data Science</Menu.Item>
            <Menu.Item>Python</Menu.Item>
            <Menu.Item>Machine Learning</Menu.Item>
            <Menu.Item>Deep Learning</Menu.Item>
            <Menu.Item>Data Analysis</Menu.Item>
            <Menu.Item>Artificial Intelligence</Menu.Item>
            <Menu.Item>R</Menu.Item>
            <Menu.Item>TensorFlow</Menu.Item>
            <Menu.Item>Neural Networks</Menu.Item>
          </SubMenu>
          <SubMenu key="sub14" title="Mobile Development"></SubMenu>
          <SubMenu key="sub15" title="Programming Languages"></SubMenu>
          <SubMenu key="sub16" title="Game Development"></SubMenu>
          <SubMenu key="sub17" title="Database Design & Development"></SubMenu>
          <SubMenu key="sub18" title="Software Testing"></SubMenu>
          <SubMenu key="sub19" title="Software Engineering"></SubMenu>
          <SubMenu key="sub20" title="Development Tools"></SubMenu>
          <SubMenu key="sub21" title="No-Code Development"></SubMenu>
        </SubMenu>
        <SubMenu key="sub2" title="Business"></SubMenu>
        <SubMenu key="sub3" title="Finance & Accounting"></SubMenu>
        <SubMenu key="sub4" title="IT & Softwware"></SubMenu>
        <SubMenu key="sub5" title="Office Productivity"></SubMenu>
        <SubMenu key="sub6" title="Personal Development"></SubMenu>
        <SubMenu key="sub7" title="Design"></SubMenu>
        <SubMenu key="sub8" title="Marketing"></SubMenu>
        <SubMenu key="sub9" title="Lifestyle"></SubMenu>
        <SubMenu key="sub10" title="Photography & Video"></SubMenu>
        <SubMenu key="sub11" title="Health & Fitness"></SubMenu>
        <SubMenu key="sub12" title="Music"></SubMenu>
        <SubMenu key="sub13" title="Teaching & Academics"></SubMenu>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <span
          className="ant-dropdown-link"
          style={{ cursor: "pointer", marginLeft: 20 }}
        >
          Categories
        </span>
      </Dropdown>
    );
  }
}
