import "./App.scss";
import React, { useState } from "react";
import { Breadcrumb, Button, Layout, Menu, Tabs } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Container from "./components/Container";

const { Header, Sider, Footer, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState()

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Router>
            <Layout>
                <Header>
                    <Navigation/>
                </Header>
                <Layout>
                    <div className="sider">
                        <Sider 
                            trigger={null} 
                            collapsible 
                            collapsed={collapsed}
                        >
                            <div className="btn">
                                <Button 
                                    className="btn" 
                                    type="primary" 
                                    onClick={toggleCollapsed}
                                >
                                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                </Button>
                            </div>
                            <SideBar/>
                        </Sider>
                    </div>
                    <Layout>
                        <Content >
                            <Breadcrumb>
                                <Breadcrumb.Item>Quản lý tài khoản</Breadcrumb.Item>
                            </Breadcrumb>
                            <Container/>
                        </Content>
                        <Footer>
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
