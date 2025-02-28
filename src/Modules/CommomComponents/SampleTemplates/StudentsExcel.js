import { Button } from 'antd';
import StudentsApplicationForm from './../../../Assets/Documents/StudentsApplicationForm.xlsx';
import { DownloadOutlined } from '@ant-design/icons';
export const  StudentsExcel =() => {
    //debugger
    return (
        <>
            <Button><a href={StudentsApplicationForm} download="StudentsApplicationForm">Sample Template <DownloadOutlined /></a></Button>
        </>
    );
}