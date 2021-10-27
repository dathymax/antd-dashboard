import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";
import Menu from "rc-menu/lib/Menu";


const columns = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Họ và tên",
        dataIndex: "name",
    },
    {
        title: "",
        dataIndex: "action",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Phone",
        dataIndex: "phone",
    },
    {
        title: "Quyền",
        dataIndex: "role",
    },
    {
        title: "Trạng thái",
        dataIndex: "state",
    },
];

const employees = [
    {
        key: "1",
        id:"#1",
        name: "Do Tuan Dat",
        email: "dathymax@gmail.com",
        phone: "0984193954",
        role: "Nhân viên",
        state: "Active",
    },
    {
        key: "2",
        id:"#2",
        name: "Do Tuan Dat",
        email: "dathymax@gmail.com",
        phone: "0984193954",
        role: "Nhân viên",
        state: "Active",
    },
    {
        key: "3",
        id:"#3",
        name: "Do Tuan Dat",
        email: "dathymax@gmail.com",
        phone: "0984193954",
        role: "Nhân viên",
        state: "Active",
    },
    {
        key: "4",
        id:"#4",
        name: "Do Tuan Dat",
        email: "dathymax@gmail.com",
        phone: "0984193954",
        role: "Nhân viên",
        state: "Active",
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
        );
    },

    getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User",
        // Column configuration not to be checked
        name: record.name,
    }),
};

const menu = (
    <Menu>
      <Menu.Item>Sua tai khoan</Menu.Item>
      <Menu.Item>Xoa tai khoan</Menu.Item>
      <Menu.Item>Email</Menu.Item>
    </Menu>
);

function setDataTable (){

    return (employees.map((item,index) => {
        return (
            {
                key : item.id,
                id:item.id,
                name: item.name,
                action :  <span className="action-3dot" onClick={ () => alert("Hello " + item.id) } > ...</span>,
                email: item.email,
                phone: item.phone,
                role: item.role,
                state: item.state,
            }
        )
    }))
}

const data = setDataTable()

const TableEmployee = () => {

    const [selectionType, setSelectionType] = useState("checkbox");
    
    return (
        <div>
            <Table
                rowSelection={{
                type: selectionType,
                ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
            <span className="total-record">Total: 10</span>
        </div>
    );
};

export default TableEmployee;
