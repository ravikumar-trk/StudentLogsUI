import FileExcelOutlined from '@ant-design/icons/lib/icons/FileExcelOutlined';
import { Button, message } from 'antd';
import React from 'react';
import * as XLSX from "xlsx-color";
// import { LoginStoreCreation } from '../../Modules/General/Login/LoginStore.store';


interface IState {
    sendData: (value: any, value1: string) => void;
    ClearData?: (value: any, value1: string) => void;
    btnText?: string;
    textDisable?: boolean;
}

interface IProps {
    excelData: any;
    sheetName: string
}
export default class ImportExcel extends React.Component<IState, IProps> {
    data1: any = [];
    public myRef: any;
    state = {
        excelData: [],
        sheetName: ""
    }
    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
    }
    onImportExcel = (file: { target: { files: any; }; }) => {

        // LoginStoreCreation.SpinLoading(true)
        const { files } = file.target;
        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                const { result }: any = event.target;
                const workbook = XLSX.read(result, { type: 'binary' });
                const jsonOpts = {
                    // header: 1,
                    // defval: '',
                    // blankrows: true,
                    raw: false,
                    dateNF: 'dd"/"MMM"/"yyyy' // <--- need dateNF in sheet_to_json options (note the escape chars)
                }
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // this.data1 = this.data1.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet],jsonOpts));
                        // this.setState({ ...this.state, excelData: this.data1, sheetName:sheet });
                        var data = this.data1.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet], jsonOpts));
                        this.setState({ ...this.state, excelData: data, sheetName: sheet });
                    }
                }
                //message.success(' uploaded successfully ！')
            }
            catch (e) {
                message.error(' incorrect file type ！');
                this.myRef.current.value = ""
            }
        };

        fileReader.readAsBinaryString(files[0]);
        // LoginStoreCreation.SpinLoading(false)
    }
    SendData() {

        this.props.sendData(this.state.excelData, this.state.sheetName);
        this.myRef.current.value = ""
        this.setState({ ...this.state, excelData: [], sheetName: "" })
    }
    ClearData() {

        this.props.sendData(this.state.excelData, this.state.sheetName);
    }

    componentDidMount() {

        if (this.props.textDisable === true) {
            const file: any = document.querySelector('.file');
            file.value = '';
            this.data1 = [];
            this.forceUpdate();
        }
    }
    componentWillReceiveProps() {

        if (this.props.textDisable === true) {
            const file: any = document.querySelector('.file');
            file.value = '';
            this.setState({ excelData: [] })
        }
    }
    render() {
        // 
        return (
            <>
                <input type='file' ref={this.myRef} className='file' accept='.csv,.xlsx, .xls'
                    onChange={this.onImportExcel}
                />
                <Button onClick={() => this.SendData()}>
                    {this.props.btnText}<FileExcelOutlined />
                </Button>
            </>
        );
    }

}