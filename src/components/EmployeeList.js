import React from 'react'
import { DownOutlined, PlusOutlined, SearchOutlined, VerticalAlignBottomOutlined, VerticalAlignTopOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import TableEmployee from './TableEmployee'

const EmployeeList = () => {
    return (
        <div className="employee-list">
            <div className="action">
                <div className="action__item">
                    <PlusOutlined />
                    <span>THÊM MỚI</span>
                </div>
                <div className="action__item">
                    <VerticalAlignTopOutlined />
                    <span>IMPORT</span>
                </div>
                <div className="action__item">
                    <VerticalAlignBottomOutlined />
                    <span>EXPORT</span>
                </div>
            </div>
            <div className="categories">
                <div className="seach">
                    <SearchOutlined />
                    <Input placeholder="Tìm kiếm theo họ tên hoặc Email"/>
                </div>
                <div className="categories__item">
                    <span>HỌ VÀ TÊN</span>
                    <DownOutlined />
                </div>
                <div className="categories__item">
                    <span>EMAIL</span>
                    <DownOutlined />
                </div>
                <div className="categories__item">
                    <span>PHONE</span>
                    <DownOutlined />
                </div>
            </div>
            <TableEmployee/>
        </div>
    )
}

export default EmployeeList
