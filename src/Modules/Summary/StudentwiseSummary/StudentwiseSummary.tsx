import { useState } from 'react';
import {
  Table, Row, Col, Form,  Select, DatePicker, Card
} from 'antd';
import { pageSizeOptions, dateFormat } from '../../../Common/env';

// const originData: Item[] = require('./../../../Common/JSON/StudentwiswSummary.json');
const originData: Item[] = require('./../../CommomComponents/JSON/StudentwiswSummary.json');
const { Option } = Select;
const { RangePicker } = DatePicker;

interface Item {
  key: string;
  Date: string;
  Status: boolean;
  LeaveType: string;
  LogInTime: string,
  LogOutTime: string;
  Remarks: string;
}

// const originData: Item[] = [];
// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     Date: `00${i + 1}`,
//     Status:true,
//     LeaveType: ``,
//     InTime: `${i + 1}`,
//     OutTime: `Ravi${i + 1}`,
//     Remarks: ``,
//   });
// }

const StudentwiseSummary = () => {
  ////debugger
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);



  const columns = [
    {
      title: 'Date',
      dataIndex: 'Date',
      width: '10%'
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      width: '3%',
      render: (_: any, record: Item) => {
        return (
          <>
            {
              record.Status === true ?
                <div className="present">
                  P
                </div>
                : <div className="absent">
                  A
                </div>
            }

          </>
        )
      }
    },
    {
      title: 'Login Time',
      dataIndex: 'LogInTime',
      width: '8%',
      render: (_: any, record: Item) => {
        return (
          <>
            {
              record.Status === true ?
                <>{record.LogInTime}</>
                : <>-</>
            }
          </>
        )
      },
    },
    {
      title: 'Logout Time',
      dataIndex: 'LogOutTime',
      width: '8%',
      render: (_: any, record: Item) => {
        return (
          <>
            {
              record.Status === true ?
                <>{record.LogOutTime}</>
                : <>-</>
            }
          </>
        )
      },
    },
    {
      title: 'Leave Type',
      dataIndex: 'LeaveType',
      width: '10%',
      render: (_: any, record: Item) => {
        return (
          <>
            {
              record.Status === true ?
                <>-</>
                : <>{record.LeaveType}</>
            }
          </>
        )
      },
    },
    {
      title: 'Remarks',
      dataIndex: 'Remarks',
      width: '10%',
      render: (_: any, record: Item) => {
        return (
          <>
            {
              record.Status === true ?
                <>-</>
                : <>{record.Remarks}</>
            }
          </>
        )
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
              style={{ width: 200 }}
              placeholder="Select Class"
              optionFilterProp="children"
              filterOption={(input: any, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            // filterSort={(optionA:any, optionB:any) =>
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
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select Student"
              optionFilterProp="children"
              filterOption={(input: any, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            // filterSort={(optionA:any, optionB:any) =>
            //   optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            // }
            >
              <Option value="1">Ravi 1</Option>
              <Option value="2">Ravi 2</Option>
              <Option value="3">Ravi 3</Option>
              <Option value="4">Ravi 4</Option>
              <Option value="5">Ravi 5</Option>
              <Option value="6">Ravi 6</Option>
              <Option value="7">Ravi 7</Option>
              <Option value="8">Ravi 8</Option>
              <Option value="9">Ravi 9</Option>
              <Option value="10">Ravi 10</Option>
            </Select>
          </Col>
          <Col className="gutter-row" xs={24} md={12} lg={6}>
            <RangePicker
              //defaultValue={[moment().format("DD-MM-YYYY"), moment('2015/01/01', dateFormat)]}
              format={dateFormat}
            />
          </Col>
        </Row>
        <Table
          bordered
          dataSource={data}
          columns={columns}
          // scroll={{ x: 1000, y: 380}}
          pagination={{
            // onChange: cancel,
            pageSizeOptions: pageSizeOptions,
            showSizeChanger: true,
            defaultPageSize: 25,
            hideOnSinglePage: data !== undefined ? data.length <= 25 ? true : false : true
          }}
        />
      </Form>
    </Card>
  );
};

export default StudentwiseSummary;