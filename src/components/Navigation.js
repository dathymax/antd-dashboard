import { Button, Dropdown, Menu } from 'antd'
import React from 'react'

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
        </Menu.Item>
    </Menu>
);

const Navigation = () => {
    return (
        <div className="header">
            <img src="./logo/logo.png" alt="" className="header__logo" />
            <div
                className="header__action"
            >
                <span className="header__action--hello">Xin chao</span>
                <Dropdown overlay={menu} trigger={['click']}>
                    <span className="header__action--name">Do Tuan Dat</span>
                </Dropdown>
            </div>
        </div>
    )
}

export default Navigation
