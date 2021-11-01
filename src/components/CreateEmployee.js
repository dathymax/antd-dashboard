import React from 'react'
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
  } from 'antd';
import { useState } from 'react';
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 12,
        },
        sm: {
            span: 3,
        },
    },
    wrapperCol: {
        xs: {
            span: 16,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 12,
            offset: 0,
        },
        sm: {
            span: 8,
            offset: 4,
        },
    },
};

const CreateEmployee = () => {
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const [form] = Form.useForm();

      const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

      const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    
      const onWebsiteChange = (value) => {
        if (!value) {
          setAutoCompleteResult([]);
        } else {
          setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
      };
    
      const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
      }));
    return (
        <div className="create-employee">
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Họ và tên"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Name!',
                    },
                    ]}
                >
                    <Input placeholder="Nhập Họ Tên"/>
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                >
                    <Input placeholder="Nhập Email"/>
                </Form.Item>

                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    ]}
                >
                    <Input placeholder="Nhập Username"/>
                </Form.Item>
        
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Nhập Password"/>
                </Form.Item>
        
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                    ]}
                >
                    <Input
                        placeholder="Nhập số điện thoại"
                    />
                </Form.Item>
        
                <Form.Item
                    name="department"
                    label="Phòng ban"
                    rules={[
                    {
                        required: true,
                        message: 'Please select department!',
                    },
                    ]}
                >
                    <Select>
                        <Option value="business">Kinh doanh</Option>
                    <Option value="develop">Phát triển</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="role"
                    label="Chức vụ"
                    rules={[
                    {
                        required: true,
                        message: 'Please select role!',
                    },
                    ]}
                >
                    <Select>
                    <Option value="admin">Admin</Option>
                    <Option value="employee">Nhân viên</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="choose-role"
                    label="Phân quyền"
                >
                    <div className="choose-role">
                        <div className="space"></div>
                        <Checkbox>
                            Chọn quyền
                        </Checkbox>
                        <Checkbox>
                            Chọn quyền
                        </Checkbox>
                        <Checkbox>
                            Chọn quyền
                        </Checkbox>
                        <Checkbox>
                            Chọn quyền
                        </Checkbox>
                    </div>
                </Form.Item>

                <Form.Item>
                    <div className="btn-submit">
                        <Button type="primary" htmlType="submit">
                            Tạo mới
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CreateEmployee
