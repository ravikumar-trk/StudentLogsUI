import React, { useState } from "react";
import {
  Table,
  Input,
  InputNumber,
  Dropdown,
  Row,
  Col,
  Form,
  Select,
  Menu,
  DatePicker,
  Card,
  //Popconfirm,  Typography,
} from "antd";
import { DownOutlined, EditOutlined } from "@ant-design/icons";
import { pageSizeOptions, dateFormat } from "../../../Common/env";
// import moment from "moment";
// const originData: Item[] = require('./../../../Common/JSON/ClasswiseSummary.json');
const originData: Item[] = require("./../../CommomComponents/JSON/ClasswiseSummary.json");
const { Option } = Select;

interface Item {
  key: string;
  AdmissionNo: string;
  RollNo: string;
  Name: string;
  Status: boolean;
  LogInTime: string;
  LogOutTime: string;
  LeaveType: string;
  Remarks: string;
  phone: number;
}

function onChange(date: any, dateString: any) {
  console.log(dateString);
}

const DaywiseSummary = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

  const columns = [
    {
      title: "Admission No.",
      dataIndex: "AdmissionNo",
      width: "10%",
    },
    {
      title: "Roll No.",
      dataIndex: "RollNo",
      width: "7%",
    },
    {
      title: "Student Name",
      dataIndex: "Name",
      width: "15%",
    },
    {
      title: "Status",
      dataIndex: "Status",
      width: "5%",
      render: (_: any, record: Item) => {
        return (
          <>
            {record.Status === true ? (
              <div className="present">P</div>
            ) : (
              <div className="absent">A</div>
            )}
          </>
        );
      },
    },
    {
      title: "Login Time",
      dataIndex: "LogInTime",
      width: "8%",
      render: (_: any, record: Item) => {
        return <>{record.Status === true ? <>{record.LogInTime}</> : <>-</>}</>;
      },
    },
    {
      title: "Logout Time",
      dataIndex: "LogOutTime",
      width: "8%",
      render: (_: any, record: Item) => {
        return (
          <>{record.Status === true ? <>{record.LogOutTime}</> : <>-</>}</>
        );
      },
    },
    {
      title: "Leave Type",
      dataIndex: "LeaveType",
      width: "10%",
      render: (_: any, record: Item) => {
        return <>{record.Status === true ? <>-</> : <>{record.LeaveType}</>}</>;
      },
    },
    {
      title: "Remarks",
      dataIndex: "Remarks",
      width: "10%",
      render: (_: any, record: Item) => {
        return <>{record.Status === true ? <>-</> : <>{record.Remarks}</>}</>;
      },
    },
  ];

  return (
    <Card className="body-card">
      <Form form={form} component={false}>
        <Row gutter={16}>
          <Col className="gutter-row" xs={24} md={12} lg={6}>
            <Select
              showSearch
              defaultValue="10th Class"
              style={{ width: "50%" }}
              placeholder="Select Class"
              optionFilterProp="children"
              filterOption={(input: any, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              // filterSort={(optionA, optionB) =>
              //   optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              // }
            >
              <Option value="1">1st Class</Option>
              <Option value="2">2nd Class</Option>
              <Option value="3">3rd Class</Option>
              <Option value="4">4th Class</Option>
              <Option value="5">5th Class</Option>
              <Option value="6">6th Class</Option>
              <Option value="7">7th Class</Option>
              <Option value="8">8th Class</Option>
              <Option value="9">9th Class</Option>
              <Option value="10">10th Class</Option>
            </Select>
          </Col>
          <Col className="gutter-row" xs={24} md={12} lg={6}>
            <DatePicker
              onChange={onChange}
              // value={moment("09/04/2022", dateFormat)}
              format={dateFormat}
            />
          </Col>
          <Col className="gutter-row" xs={24} md={12} lg={6}>
            <Select
              showSearch
              style={{ width: "50%" }}
              placeholder="Select Attendence Type"
              optionFilterProp="children"
              defaultValue="All"
              filterOption={(input: any, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              // filterSort={(optionA, optionB) =>
              //   optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              // }
            >
              <Option value="1">All</Option>
              <Option value="2">Present</Option>
              <Option value="3">Absent</Option>
            </Select>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" xs={24} md={12} lg={6}>
            <span>Total Students : 100</span>
          </Col>
          <Col className="gutter-row" xs={24} md={12} lg={6}>
            <span>Present : 90</span>
          </Col>
          <Col className="gutter-row" xs={24} md={12} lg={6}>
            <span>Absent : 10</span>
          </Col>
        </Row>
        <Table
          bordered
          dataSource={data}
          columns={columns}
          // scroll={{ x: 1000, y: 340 }}
          pagination={{
            //onChange: cancel,
            pageSizeOptions: pageSizeOptions,
            showSizeChanger: true,
            defaultPageSize: 25,
            hideOnSinglePage:
              data !== undefined ? (data.length <= 25 ? true : false) : true,
          }}
        />
      </Form>
    </Card>
  );
};

export default DaywiseSummary;
