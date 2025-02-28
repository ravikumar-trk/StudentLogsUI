import { useEffect } from "react";
import { Grid } from "@mui/material";
import SLButton from "../../Common/Components/Button/Button";
import SLTable from "../../Common/Components/Table/Table";
import { NavLink } from "react-router-dom";

const rows = [
  {
    key: '1',
    TicketNo: 'TicketNo001',
    Issue: 'Issue-1',
    CreatedBy: 'Ravi Kumar Tyadi',
    CreatedOn: '10-02-2023',
    Status: 'Active',
  },
  {
    key: '2',
    TicketNo: 'TicketNo002',
    Issue: 'Issue-2',
    CreatedBy: 'Ravi Kumar Tyadi',
    CreatedOn: '10-02-2023',
    Status: 'Active',
  },
  {
    key: '3',
    TicketNo: 'TicketNo003',
    Issue: 'Issue-3',
    CreatedBy: 'Ravi Kumar Tyadi',
    CreatedOn: '10-02-2023',
    Status: 'In Progress',
  },
  {
    key: '4',
    TicketNo: 'TicketNo004',
    Issue: 'Issue-4',
    CreatedBy: 'Ravi Kumar Tyadi',
    CreatedOn: '10-02-2023',
    Status: 'Active',
  },
];


const TicketsList = () => {

  useEffect(() => {
    // GetUserDataList();
  }, []);
  return (
    <div className="mt_12">
      <Grid container>
        <Grid item md={12} sm={12} xs={12} className="btnEnd">
          <NavLink to={'/Tickets/Create'}>
            <SLButton
              className="contained"
            // handleClick={() => toggleDrawer(true)}
            >New Ticket
            </SLButton>
          </NavLink>
        </Grid>
      </Grid>

      <Grid container className="mt_10">
        <SLTable rows={rows} page='TicketHistory' />
      </Grid>

    </div>
  );
};
export default TicketsList;
