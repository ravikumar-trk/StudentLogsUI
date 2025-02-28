import { Card, Col, Row, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";

const Holidays = () => {
    const [Visible, setVisible] = useState<boolean>(false);
    const showModal = (record: any) => {
       //debugger
        setVisible(true);
    };
    return (
        <Card className="body-card">
            <Row gutter={16} className="mt_10">
                <Col className="gutter-row" xs={20} md={20} lg={20}>
                    Holidays
                </Col>
                <Col className="gutter-row" xs={4} md={4} lg={4}>
                    <Button  className="float_right" onClick={() => showModal(0)}><PlusOutlined />Add</Button>
                </Col>
            </Row>
        </Card>
    );
}
export default Holidays;