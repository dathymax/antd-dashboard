import { UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import React from 'react'
import {
    BrowserRouter as Router,
    NavLink
 } from 'react-router-dom'

const SideBar = () => {
    return (
        <div>
            <div className="menu">
                <Menu
                    mode="inline"
                >
                    <SubMenu
                        icon={<UserOutlined />}
                        title={
                            <NavLink
                                exact
                                to="/"
                            >
                                Quan ly tai khoan
                            </NavLink>
                        }
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
                       
                        <NavLink 
                            exact
                            to="/create-employee" 
                            > <Menu.Item
                            key="item3"
                            icon={<UserOutlined />}
                        >
                            Tao tai khoan
                        </Menu.Item>
                        </NavLink>
                    </SubMenu>
                </Menu>
            </div>
        </div>
    )
}

export default SideBar
