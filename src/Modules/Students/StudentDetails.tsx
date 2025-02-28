import { useContext, useState, useEffect } from "react";
import { Context } from "../../App";
import { IStickyEntity, IStickyData } from "../General/GeneralUtils";
import { GetSchoolsDropdownService } from "../../Services/AccountServices.service";
import { ILoginDataDTO } from "../../Common/Store/ContaxtStore";
import { ToastMessage } from "../../Common/Components/ToastMessage";
import { Grid } from "@mui/material";

const StudentDetails = () => {
    const [context, setContext] = useContext<ILoginDataDTO[]>(Context);
    const [IStickyEntity, setIStickyEntity] = useState<IStickyEntity>(IStickyData);

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

    const GetStudentDetails = async () => {
        ClearSticky();
        let GetStudentsListEntity = {
            isDropdown: 0,
            accountID: context.LoginAccountID,
        };
        const res: any = await GetSchoolsDropdownService(GetStudentsListEntity);
        if (res.status === 200) {
            var data = JSON.parse(res?.data?.result);
            if (data.length === 0) {
                NoData();
            } else {
            }
        } else {
            Error();
        }
    };
    useEffect(() => {
        // GetStudentsList();
    }, []);
    return (
        <div>
            {IStickyEntity.ShowToast ? <ToastMessage data={IStickyEntity} /> : <></>}
            <Grid container className="mt_10">
                <div className="row m_0 mb_12 w_100">
                    <div className="col-lg-12 col-md-12">
                        <h2>Student Details</h2>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default StudentDetails;
