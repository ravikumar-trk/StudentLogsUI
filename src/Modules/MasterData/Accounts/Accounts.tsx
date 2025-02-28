import { useContext, useState, useEffect } from "react";
import { Context } from "../../../App";
import { IStickyEntity, IStickyData } from "../../General/GeneralUtils";
import { GetSchoolsDropdownService } from "../../../Services/AccountServices.service";
import { ILoginDataDTO } from "../../../Common/Store/ContaxtStore";
import { ToastMessage } from "../../../Common/Components/ToastMessage";
import { Grid } from "@mui/material";
import SLTable from "../../../Common/Components/Table/Table";
import SLButton from "../../../Common/Components/Button/Button";
import { PlusOutlined } from '@ant-design/icons';

const rows = [
    {
        key: '1',
        AccountName: "AC1",
        AccountCode: "Jon",
        PlanCode: "S1U3",
        CreatedOn: "18-Aug-2023",
        Status: "Active",
    },
    {
        key: '2',
        AccountName: "AC2",
        AccountCode: "Cersei",
        PlanCode: "S2U5",
        CreatedOn: "23-Sep-2023",
        Status: "Active",
    },
    {
        key: '3',
        AccountName: "AC3",
        AccountCode: "Jaime",
        PlanCode: "S3U10",
        CreatedOn: "10-Dec-2024",
        Status: "Active",
    },
];

const Accounts = () => {
    const [context, setContext] = useContext<ILoginDataDTO[]>(Context);
    const [SchoolData, setSchoolData] = useState<any[]>([]);
    const [IStickyEntity, setIStickyEntity] =
        useState<IStickyEntity>(IStickyData);

    const Error = () => {
        setIStickyEntity((prevState) => ({
            ...prevState,
            ID: 0,
            Type: 0,
            Message: "Internal server error",
            Time: 3000,
            ShowToast: true,
        }));
    };

    const NoData = () => {
        setIStickyEntity((prevState) => ({
            ...prevState,
            ID: 0,
            Type: 0,
            Message: "No data found",
            Time: 3000,
            ShowToast: true,
        }));
    };

    const ClearSticky = () => {
        setIStickyEntity((prevState) => ({
            ...prevState,
            ShowToast: false,
        }));
    };

    const GetSchoolsList = async () => {
        ClearSticky();
        let GetSchoolsListEntity = {
            isDropdown: 0,
            accountID: context.LoginAccountID,
        };
        const res: any = await GetSchoolsDropdownService(GetSchoolsListEntity);
        debugger;
        if (res.status === 200) {
            var data = JSON.parse(res?.data?.result);
            if (data.length === 0) {
                NoData();
            } else {
                setSchoolData(data);
            }
        } else {
            Error();
        }
    };
    useEffect(() => {
        // GetSchoolsList();
    }, []);
    return (
        <div>
            {IStickyEntity.ShowToast ? <ToastMessage data={IStickyEntity} /> : <></>}
            <Grid container className="mt_10">
                <div className="row m_0 w_100">
                    <div className="col-12 mb_10 p_0">
                        <SLButton className="contained float_right" >
                            <PlusOutlined /> &nbsp; Add Account
                        </SLButton>
                    </div>
                </div>

                <SLTable rows={rows} page='Account' />
            </Grid>
        </div>
    );
};
export default Accounts;
