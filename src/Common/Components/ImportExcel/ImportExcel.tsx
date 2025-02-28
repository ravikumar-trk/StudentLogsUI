import FileExcelOutlined from '@ant-design/icons/lib/icons/FileExcelOutlined';
import { Button, message } from 'antd';
import React from 'react';
// import * as XLSX from "xlsx-color";

interface IState {
    sendData: (value: any, value1: string) => void;
    ClearData?: (value: any, value1: string) => void;
    btnText?:string;
    textDisable? :boolean;
}

interface IProps {
    excelData : any;
    sheetName:string
}
export default class ImportExcel extends React.Component< IState, IProps> {
    data1: any = [];
    state = {
        excelData: [],
        sheetName:""
    }
    onImportExcel = (file: { target: { files: any; }; }) => {
       //debugger
        const { files } = file.target;
        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                // const { result }: any = event.target;
                // const workbook = XLSX.read(result, { type: 'binary' });
                // const jsonOpts = {
                //     // header: 1,
                //     // defval: '',
                //     // blankrows: true,
                //     raw: false,
                //     dateNF: 'dd"/"MMM"/"yyyy' // <--- need dateNF in sheet_to_json options (note the escape chars)
                //   }
                // for (const sheet in workbook.Sheets) {
                //     if (workbook.Sheets.hasOwnProperty(sheet)) {
                //         this.data1 = this.data1.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet],jsonOpts));
                //         this.setState({ ...this.state, excelData: this.data1, sheetName:sheet });
                //     }
                // }
                //message.success(' uploaded successfully ！')
            }
            catch (e) {
                message.error(' incorrect file type ！');
            }
        };

        fileReader.readAsBinaryString(files[0]);
    }
    SendData () {
       //debugger
        this.props.sendData(this.state.excelData, this.state.sheetName);
    }
    ClearData () {
       //debugger
        this.props.sendData(this.state.excelData, this.state.sheetName);
    }

    componentDidMount() {
        if(this.props.textDisable === true) {
            const file :any= document.querySelector('.file');
            file.value = '';
            this.data1 = [];
            this.forceUpdate();
        }
    }
    componentWillReceiveProps() {
        if(this.props.textDisable === true) {
            const file :any= document.querySelector('.file');
            file.value = '';
            this.setState({excelData:[]})
        }
    }
    render() {
        //debugger
        return (
            <>
                <input type='file' className = 'file' accept='.csv,.xlsx, .xls'
                    onChange={this.onImportExcel}
                />
                <Button onClick={() => this.SendData()}>
                    {this.props.btnText}<FileExcelOutlined />
                </Button> 
            </>
        );
    }

}