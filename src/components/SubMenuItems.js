import { UserOutlined } from '@ant-design/icons'
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from 'react'
import { Link } from 'react-router-dom';

const SubMenuItem = () => {
    return (
        <div className="menu">
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
                <Link
                    to="/create-employee"
                >
                    <Menu.Item
                        key="item3"
                        icon={<UserOutlined />}
                    >
                        Tao tai khoan
                    </Menu.Item>
                </Link>
            </SubMenu>
        </div>
    )
}

export default SubMenuItem
