import { Layout } from 'antd'
import React from 'react'

const Navigation = () => {
    return (
        <div className="header">
            <img src="./logo/logo.png" alt="" className="header__logo" />
                <span
                    className="header__action"
                >
                    <span className="header__action--hello">Xin chao</span>
                <span className="header__action--name">Do Tuan Dat</span>
            </span>
        </div>
    )
}

export default Navigation
