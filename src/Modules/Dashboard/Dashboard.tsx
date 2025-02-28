import { Card, Col, Row, Select, Progress, TreeSelect } from "antd";
import { useState } from "react";
import DahboardPieChart1 from "./DahboardPieChart1";
import DahboardPieChart2 from "./DahboardPieChart2";

const { Option } = Select;
const { SHOW_PARENT } = TreeSelect;
const treeData = [
    {
        title: 'FST',
        value: '0-0',
        key: 'FST',
        children: [
            {
                title: 'FST-S1',
                value: '0-0-0',
                key: 'FST-S1',
            },
            {
                title: 'FST-S2',
                value: '0-0-0',
                key: 'FST-S2',
            }
        ],
    },
    {
        title: 'SEC',
        value: '0-1',
        key: 'SEC',
        children: [
            {
                title: 'SEC-S1',
                value: '0-1-0',
                key: 'SEC-S1',
            },
            {
                title: 'SEC-S2',
                value: '0-1-1',
                key: 'SEC-S2',
            },
            {
                title: 'SEC-S3',
                value: '0-1-2',
                key: 'SEC-S3',
            },
        ],
    },
];


const Dashboard = () => {
    const [value, setValue] = useState<any>(['0-1-1']);
    const onChange = (newValue: string[]) => {
        console.log('onChange ', newValue);
        setValue(newValue);
    };
    const tProps = {
        treeData,
        value,
        onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Select Class',
        style: {
            width: '100%',
        },
    };
    return (
        <div className="Dashboard">
            <h2>Dashboard</h2>
            {/* <Row>
                <Col span={6}>
                    <Card>
                        <div className="card_head">
                            <h3>School</h3>
                            <Select defaultValue="lucy" >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <div className="card_body">
                            <DahboardPieChart1 />
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <div className="card_head">
                            <h3>School</h3>
                            <TreeSelect {...tProps} />
                        </div>
                        <div className="card_body">
                            <DahboardPieChart2 />
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <div className="card_head">
                            <h3>School</h3>
                            <Select defaultValue="lucy">
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <div className="card_body">
                            <Progress type="circle" percent={55} status="exception"/>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <div className="card_head">
                            <h3>School</h3>
                            <Select defaultValue="lucy"  >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <div className="card_body">
                            <Progress type="circle" percent={95} />
                        </div>
                    </Card>
                </Col>
            </Row> */}
        </div>
    );
}
export default Dashboard;