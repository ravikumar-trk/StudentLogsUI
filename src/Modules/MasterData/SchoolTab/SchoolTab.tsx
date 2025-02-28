import { useContext, useState, useEffect } from "react";
import { Context } from "../../../App";
import { IStickyEntity, IStickyData } from "../../General/GeneralUtils";
import { GetSchoolsDropdownService } from "../../../Services/AccountServices.service";
import { ILoginDataDTO } from "../../../Common/Store/ContaxtStore";
import { ToastMessage } from "../../../Common/Components/ToastMessage";
import { Grid } from "@mui/material";
import SLTable from "../../../Common/Components/Table/Table";

const rows = [
  {
    key: '1',
    SchoolName: "Snowsdfc",
    SchoolCode: "Jon",
    Location: "Hyderbad",
    CreatedOn: "",
    Status: "Active",
  },
  {
    key: '2',
    SchoolName: "Lannister",
    SchoolCode: "Cersei",
    Location: "Hyderbad",
    CreatedOn: "",
    Status: "Active",
  },
  {
    key: '3',
    SchoolName: "Lannister",
    SchoolCode: "Jaime",
    Location: "Hyderbad",
    CreatedOn: "",
    Status: "Active",
  },
  {
    key: '4',
    SchoolName: "Stark",
    SchoolCode: "Arya",
    Location: "Hyderbad",
    CreatedOn: "",
    Status: "Active",
  },
  {
    key: '5',
    SchoolName: "Targaryen",
    SchoolCode: "Daenerys",
    Location: "Hyderbad",
    CreatedOn: "",
    Status: "Active",
  },
];

const SchoolTab = () => {
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
        <SLTable rows={rows} page='School' />
      </Grid>
    </div>
  );
};
export default SchoolTab;
