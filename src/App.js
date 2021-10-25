import "./App.scss";
import React, { useState } from "react";
import { Breadcrumb, Button, Layout, Menu } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import LoginForm from "./components/LoginForm";

const { Header, Sider, Footer, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState()

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className="App">
            <LoginForm/>
            {/* <Layout>
                <div className="header">
                    <Header>
                        <img src="./logo/logo.png" alt="" className="header__logo" />
                        <span
                            className="header__action"
                        >
                            <span className="header__action--hello">Xin chao</span>
                            <span className="header__action--name">Do Tuan Dat</span>
                        </span>
                    </Header>
                </div>
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
                            <div className="menu">
                                <Menu
                                    mode="inline"
                                    inlineCollapsed={collapsed}
                                >
                                    <SubMenu
                                        icon={<UserOutlined />}
                                        title="Quan ly tai khoan"
                                    >
                                        <Menu.Item
                                            key="item1"
                                            icon={<UserOutlined />}
                                        >
                                            Import danh sach tai khoan
                                        </Menu.Item>
                                        <Menu.Item
                                            key="item2"
                                            icon={<UserOutlined />}
                                        >
                                            Export danh sach tai khoan
                                        </Menu.Item>
                                        <Menu.Item
                                            key="item3"
                                            icon={<UserOutlined />}
                                        >
                                            Tao tai khoan
                                        </Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </Sider>
                    </div>
                    <Layout>
                        <Content >
                            <Breadcrumb>
                                <Breadcrumb.Item>Quản lý tài khoản</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="container">
                                <EmployeeList/>
                                <CreateEmployee/>
                            </div>
                        </Content>
                        <Footer>
                        </Footer>
                    </Layout>
                </Layout>
            </Layout> */}
        </div>
    );
};

export default App;
