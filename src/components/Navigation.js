import { Avatar, Button, Divider, Dropdown, Menu } from 'antd'
import {
    SettingFilled,
  } from '@ant-design/icons'
import React from 'react'

const onClick = ({ e }) => {
    e.preventDefault();
};

const colors = ['red', 'green', 'blue', 'yellow']

const handleChangeTheme = (e) => {
    const color = e.target.dataset.theme;
    document.documentElement.style.setProperty('--primary-color',color);
    localStorage.setItem('--primary-color',JSON.stringify(color));
}

const menuTheme = (
    <Menu
        className="menu__color"
    >
        {colors.map(color => (
            <button 
                data-theme={color}
                className="color"
                style={{backgroundColor: color, margin: '10px', display: 'inline-block'}}
                onClick={handleChangeTheme} 
            >
            </button>
        ))}
    </Menu>
)

const menu = (
    <Menu
        style={{padding: '30px 0', border: '1px solid #edf2f9', borderRadius: '5px'}}
        onClick={onClick}
    >
        <div className="avatar">
            <Avatar size={50}>D</Avatar>
        </div>
        <div className="avatar">
            <div>Do Tuan Dat</div>
            <div>datdt@dogoo.vn</div>
        </div>
        <Divider />
        <Menu.Item>
            <SettingFilled />
            <span className="action__dropdown">Doi mat khau</span>
        </Menu.Item>
        <Divider />
        <Dropdown
            overlay={menuTheme}
        >
            <Menu.Item
                onClick={e => e.preventDefault()}
            >
                <div className="color" style={{backgroundColor: 'var(--primary-color)'}}></div>
                <span className="action__dropdown">Change theme</span>
                
            </Menu.Item>
        </Dropdown>
        <Divider />
        <div className="logout">
            <Button>Dang xuat</Button>
        </div>
        <Divider />
    </Menu>
);

const Navigation = () => {
    

    return (
        <div className="header" style={{backgroundColor: 'var(--primary-color)', padding: '0 25px'}}>
            <img src="./logo/logo.png" alt="" className="header__logo" />
            <div
                className="header__action"
            >
                <span className="header__action--hello">Xin chao</span>
                <Dropdown
                    placement="bottomRight" 
                    arrow
                    className="dropdown" 
                    overlay={menu} 
                    trigger={['click']}
                >
                    <Button 
                        type="text" 
                        className="header__action--name" 
                    >
                        Do Tuan Dat
                    </Button>
                </Dropdown>
            </div>
        </div>
    )
}

export default Navigation
