import { UserAddOutlined, UserOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
import Menu from 'rc-menu/lib/Menu'
import React from 'react'

const MenuComponent = () => {
    return (
        <div className="menu">
            <Menu
                mode="inline"
            >
                <SubMenu
                    className="submenu"
                    icon={<UserOutlined />}
                    title="Quan ly tai khoan"
                >
                    <Menu.Item
                        className="menu__item"
                        key="item1"
                        icon={<UserOutlined className="menu__item--icon" />}
                    >
                        Import danh sach tai khoan
                    </Menu.Item>
                    <Menu.Item
                        className="menu__item"
                        key="item2"
                        icon={<UserOutlined className="menu__item--icon" />}
                    >
                        Export danh sach tai khoan
                    </Menu.Item>
                    <Menu.Item
                        className="menu__item"
                        key="item3"
                        icon={<UserAddOutlined className="menu__item--icon" />}
                    >
                        Tao tai khoan
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default MenuComponent
