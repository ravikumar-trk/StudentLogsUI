import { Row, Col, Button, Modal } from 'antd';
import { useContext, useEffect, useState } from "react";
import { CloseOutlined,DeleteOutlined } from '@ant-design/icons';
import React from 'react';

interface IDeleteConfirmationDataModel {
    display: boolean;
    DeleteMessageTitle: string;
    DeleteMessage: string;
}

const  InitialDeleteConfirmationData : IDeleteConfirmationDataModel = { 
    display: false,
    DeleteMessageTitle: '',
    DeleteMessage: ''
}
interface IProps {
    display: boolean;
    DeleteMessageTitle: string;
    DeleteMessage: string;
    sendData: (value: boolean) => void;
}
export function DeleteConfirmation(props: any) {
    // constructor(props: IProps) {
    //     super(props)
    //    //debugger
    //     this.state = {
    //         display: this.props.display,
    //         DeleteMessageTitle: this.props.DeleteMessageTitle,
    //         DeleteMessage: this.props.DeleteMessage
    //     }
    // }
    const [data, setData] =  useState<IProps[]>([]);
    const [DeleteConfirmationData, setDeleteConfirmationData] = React.useState<IDeleteConfirmationDataModel[] | any>([InitialDeleteConfirmationData]);
    
    const handleCancel = () => {
       //debugger
        setDeleteConfirmationData((prevState: any) => ({
            ...prevState,
            display: false
        }))
        props.sendData(false);
    }

    const handleDelete = () => {
       //debugger
        setDeleteConfirmationData((prevState: any) => ({
            ...prevState,
            display: false
        }))
        props.sendData(true);
    }
    useEffect(() => {
       //debugger
        setDeleteConfirmationData((prevState: any) => ({
            ...prevState,
            display: true
        }));
    },[])
    const use = () => {
       //debugger
        setDeleteConfirmationData((prevState: any) => ({
            ...prevState,
            display: false
        }))
    }
     
        return (
            <>
                {
                    DeleteConfirmationData.display ?
                        <>
                            <Modal
                                visible={true}
                                title= 'Delete'
                                className = "Confirmation"
                                onCancel={() => handleCancel()}
                                footer={[
                                    <Button key="Cancel" className='' onClick={() => handleCancel()}>
                                        Cancel<CloseOutlined/>
                                    </Button>,
                                    <Button key="Delete" onClick={() => handleDelete()}>
                                        Delete<DeleteOutlined/>
                                    </Button>
                                ]}
                            >
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={24}>
                                        <div className="divFlex">
                                            {/* <p>{this.props.DeleteMessage}</p> */}
                                            {/* <p>Are you sure you want to delete this?</p> */}
                                        </div>
                                    </Col>
                                </Row>
                            </Modal>

                        </>
                        :
                        null
                }
            </>
        )
}
export default DeleteConfirmation