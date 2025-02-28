import { useState } from 'react';
import {
  Row, Col, Form,  Select, DatePicker, Card
} from 'antd';
import AbsentImg from './../../../Assets/cross-circle.svg'
import PresentImg from './../../../Assets/checkmark-circle.svg'

// const originData = require('./../../../Common/JSON/MonthlyAttendence.json');
const originData = require('./../../CommomComponents/JSON/MonthlyAttendence.json');
const { Option } = Select;
const { RangePicker } = DatePicker;
const keydata = ['RollNo', 'AdmissionNo', 'StudentName', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];


const MonthwiseSummary = () => {
 //debugger
  const [form] = Form.useForm();
  const [keys, setKeys] = useState(keydata);
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

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
            <DatePicker
              ///onChange={onChange} 
              picker="month"
            />
          </Col>
        </Row>
        <div className="scroll">
          <table className="table" style={{ tableLayout: "auto" }}>
            <thead className="ant-table-thead">
              <tr>
                {

                  keys ?
                    keys.map((colName: any, i: any) =>
                      <>
                        {
                          colName === "Key" ? null
                            : colName !== "AdmissionNo" ?
                              <th key={i}>{colName}</th>
                              : null
                        }
                      </>
                    ) : null

                }
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {
                data.map((rowData: any, i: any) => {
                 //debugger
                  return (
                    <tr key={i}>
                      {
                        keys ?
                          keys.map((colName: any, i: any) => {
                            return (
                              <>
                                {
                                  colName === "Key" || colName === "AdmissionNo" ? null
                                    : colName === "RollNo" || colName === "StudentName" ? <td key={i}>{rowData[colName]}</td>
                                      : <td key={i}>{rowData[colName] === true ? <img src={PresentImg} width="20px" />
                                        : <img src={AbsentImg} width="20px" />}</td>

                                }
                              </>
                            )
                          }
                          ) : null

                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </Form>
    </Card>
  );
};

export default MonthwiseSummary;