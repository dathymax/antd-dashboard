import "./App.scss";
import React, { useState } from "react";
import { Breadcrumb, Button, Layout, Menu } from "antd";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import ContentComponent from "./components/ContentComponent";

const { Header, Sider, Footer, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState()

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className="App">
            <Layout>
                <Header>
                    <img src="./logo/logo.png" alt="" className="header__logo" />
                    <span
                        className="header__action"
                    >
                        <span className="header__action--hello">Xin chao</span>
                        <span className="header__action--name">Do Tuan Dat</span>
                    </span>
                </Header>
                <Layout>
                    <Sider 
                        trigger={null} 
                        collapsible 
                        collapsed={collapsed}
                    >
                        <Button 
                            className="btn" 
                            type="primary" 
                            onClick={toggleCollapsed}
                        >
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </Button>
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
                    </Sider>
                    <Layout>
                        <Content >
                            <Breadcrumb>
                                <Breadcrumb.Item>Quan ly tai khoan</Breadcrumb.Item>
                            </Breadcrumb>
                            <div 
                                className="container"
                            >
                                <ContentComponent/>
                            </div>
                        </Content>
                        <Footer>
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
};

export default App;
