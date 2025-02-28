import { useContext, useEffect, useState } from "react";
import { Context } from "../../../App";
import { IStickyEntity, IStickyData } from "../../General/GeneralUtils";
import { ToastMessage } from "../../../Common/Components/ToastMessage";
import { Grid } from "@mui/material";
import { IUserRecords } from "../MasterDataUtils";
import { GetUserDataService } from "../../../Services/AccountServices.service";
import { ILoginDataDTO } from "../../../Common/Store/ContaxtStore";
import SLTable from "../../../Common/Components/Table/Table";


const rows = [
  {
    key: '1',
    UserName: "Hyderbad",
    EMail: "ravi1@gmail.com",
    SchoolCodes: "Active",
    Status: "Active",
  },
  {
    key: '2',
    UserName: "Hyderbad",
    EMail: "ravi2@gmail.com",
    SchoolCodes: "Active",
    Status: "Active",
  },
  {
    key: '3',
    UserName: "Hyderbad",
    EMail: "ravi3@gmail.com",
    SchoolCodes: "Active",
    Status: "Active",
  },
  {
    key: '4',
    UserName: "Hyderbad",
    EMail: "ravi4@gmail.com",
    SchoolCodes: "Active",
    Status: "Active",
  },
];

const UserTab = () => {
  const [context, setContext] = useContext<ILoginDataDTO[]>(Context);
  const [UserData, setUserData] = useState<IUserRecords[]>([]);
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

  const GetUserDataList = async () => {
    ClearSticky();
    let GetUserDataEntity = {
      isDropdown: 0,
      accountID: context.LoginAccountID,
      prefix: "",
      loginUserID: context.LoginUserID,
    };
    const res: any = await GetUserDataService(GetUserDataEntity, setContext);
    if (res.status === 200) {
      var data = JSON.parse(res.data.result);
      if (data.length === 0) {
        NoData();
      } else {
        setUserData(data);
      }
    } else {
      Error();
    }
  };

  useEffect(() => {
    // GetUserDataList();
  }, []);
  return (
    <div>
      {IStickyEntity.ShowToast ? <ToastMessage data={IStickyEntity} /> : <></>}
      <Grid container className="mt_10">
        <SLTable rows={rows} page="User" />
        {/* <div className="row m_0 w_100">
          <div className="col-3">
            <div className="myCard">
              <div className="card_header">Ravi Kumar Tyadi</div>
              <div className="divider"></div>
              <div className="card_body">ravi1@gmail.com</div>
            </div>
          </div>
        </div> */}
      </Grid>
    </div>
  );
};
export default UserTab;
