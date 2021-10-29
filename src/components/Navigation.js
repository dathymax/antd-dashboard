import { Dropdown, Menu } from 'antd'
import React from 'react'

// const changeTheme = (
//     <Menu>
//         <Menu.Item key="1">
//             Change theme
//         </Menu.Item>
//     </Menu>
// )

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <span className="header__action--name">Change theme</span>
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
