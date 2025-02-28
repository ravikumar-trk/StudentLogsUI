import { useState, useEffect, useContext } from "react";
import { Context } from "../../../App";
import { IStickyEntity, IStickyData } from "../../General/GeneralUtils";
import { GetAccoutDataService } from "../../../Services/AccountServices.service";
import { ILoginDataDTO } from "../../../Common/Store/ContaxtStore";
import { Grid } from "@mui/material";
import SLTable from "../../../Common/Components/Table/Table";
import studentIcon from './../../../Assets/studentIcon1.png';
import schoolIcon from './../../../Assets/schoolIcon.png';
import usersIcon from './../../../Assets/usersIcon.png';

const rows = [
  {
    key: '1',
    AccountName: 'John Brown',
    AccountCode: 'hg',
    CreatedOn: '10-Aug-2023',
    PlanCode: 'S1U3',
    Status: 'Active',
  },
  {
    key: '2',
    AccountName: 'Jim Green',
    AccountCode: 'sdc',
    CreatedOn: '10-Sep-2023',
    PlanCode: 'S1U3',
    Status: 'Active',
  },
  {
    key: '3',
    AccountName: 'Joe Black',
    AccountCode: 'wcde',
    CreatedOn: '10-Mar-2023',
    PlanCode: 'S3U10',
    Status: 'InActive',
  },
  {
    key: '4',
    AccountName: 'Jim Red',
    AccountCode: 'sref',
    CreatedOn: '10-Dec-2023',
    PlanCode: 'S2U5',
    Status: 'Active',
  },
];

const AccountTab = () => {
  const [context, setContext] = useContext<ILoginDataDTO[]>(Context);
  const [AccountData, setAccountData] = useState<any[]>([]);
  const [IStickyEntity, setIStickyEntity] =
    useState<IStickyEntity>(IStickyData);



  const ClearSticky = () => {
    setIStickyEntity((prevState: any) => ({
      ...prevState,
      ShowToast: false,
    }));
  };
  const ErrorSticky = () => {
    setIStickyEntity((prevState: any) => ({
      ...prevState,
      ID: 0,
      Type: 0,
      Message: "Internal server error",
      Time: 3000,
      ShowToast: true,
    }));
  };
  const NoData = () => {
    setIStickyEntity((prevState: any) => ({
      ...prevState,
      ID: 0,
      Type: 0,
      Message: "No data found",
      Time: 3000,
      ShowToast: true,
    }));
  };

  const GetAccountDataList = async () => {
    ClearSticky();
    let GetAccountDataEntity = {
      isDropdown: 0,
      accountID: context.LoginAccountID,
      prefix: "",
      loginUserID: context.LoginUserID,
      loginUserTypeID: context.LoginUserTypeID,
    };
    const res: any = await GetAccoutDataService(
      GetAccountDataEntity,
      setContext
    );
    if (res.status === 200) {
      var data = JSON.parse(res?.data?.result);
      if (data.length === 0) {
        NoData();
      } else {
        setAccountData(data);
      }
    } else {
      ErrorSticky();
    }
  };
  useEffect(() => {
    // GetAccountDataList();
  }, []);

  return (
    <Grid container className="mt_10">
      {/* <SLTable rows={rows} page='Account' /> */}
      <div className="row w_100 mt_12">
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="labelTitle">Account Name</div>
          <div className="labelValue">Account1</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="labelTitle">Code</div>
          <div className="labelValue">AC1</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="labelTitle">Plan</div>
          <div className="labelValue">S1U5</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="labelTitle">Created On</div>
          <div className="labelValue">18-Aug-2024</div>
        </div>
      </div>
      <div className="row m_0 w_100 p_lr_16 mt_24"><hr className="w_100" /></div>
      <div className="row m_0 w_100 mt_24">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="AccountCard">
            <div className="row m_0 w_100">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="labelTitle">Schools</div>
                <div className="labelValue">3</div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 AccountImage">
                <div className="h_40">
                  <img src={schoolIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="AccountCard">
            <div className="row m_0 w_100">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="labelTitle">Users</div>
                <div className="labelValue">10</div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 AccountImage">
                <div className="h_40">
                  <img src={usersIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="AccountCard">
            <div className="row m_0 w_100">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="labelTitle">Students</div>
                <div className="labelValue">1234</div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 AccountImage">
                <div className="h_40">
                  <img src={studentIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};
export default AccountTab;
