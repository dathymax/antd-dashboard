import React from 'react'
import { DownOutlined, PlusOutlined, SearchOutlined, VerticalAlignBottomOutlined, VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button, Input, Modal } from 'antd'
import TableEmployee from './TableEmployee'
import { useState } from 'react'
import FormUploadFile from './FormUploadFile'
const EmployeeList = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="employee-list">
            <div className="action">
                <Button type="primary">
                    <div className="action__item">
                        <PlusOutlined />
                        <span>THÊM MỚI</span>
                    </div>
                </Button>
                    
                <Button type="primary" onClick={showModal}>
                    <div className="action__item">
                        <VerticalAlignTopOutlined />
                        <span>IMPORT</span>
                    </div>
                </Button>
                <Button type="primary">
                    <div className="action__item">
                        <VerticalAlignBottomOutlined />
                        <span>EXPORT</span>
                    </div>
                </Button>
                <Modal title=" " visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <FormUploadFile/>
                </Modal>
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
