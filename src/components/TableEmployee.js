import React, { useState } from "react";
import { Table, Radio, Divider, Dropdown } from "antd";
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

const data = [
    {
        key: "1",
        id:"#1",
        name: "Do Tuan Dat",
        email: "dathymax@gmail.com",
        phone: "0984193954",
        role: "Dev",
        state: "Active",
    },
]; // rowSelection object indicates the need for row selection

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
            <span className="total-record">Total: 200</span>
        </div>
    );
};

export default TableEmployee;
