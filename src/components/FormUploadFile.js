import { CloudUploadOutlined, InboxOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd'
import Form from 'rc-field-form/es/Form'
import Select from 'rc-select';
import React from 'react'

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const FormUploadFile = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

    return (
        <div>
            <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                    <CloudUploadOutlined />
                </p>
                <p className="ant-upload-text">Drop to upload file</p>
                <p className="ant-upload-hint">or</p>
            </Upload.Dragger>
            <Upload name="logo" action="/upload.do" listType="picture">
                <Button>Browser file</Button>
            </Upload>
        </div>
    )
}

export default FormUploadFile
