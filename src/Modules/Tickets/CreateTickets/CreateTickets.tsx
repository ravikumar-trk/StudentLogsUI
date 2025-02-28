import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { NavLink } from "react-router-dom";

const CreateTickets = () => {
  return (
    <>
      {/* <div className="row createTicket m_0">
          <div className="createTicket_SideNav mt_12">
            <div className="step1_disable">Students</div>
            <div className="step2">Add</div>
            <div className="step2">Remove</div>
            <div className="step2">Modify</div>
            <div className="step1_disable">Students</div>
            <div className="step2">Students</div>
            <div className="step1">Students</div>
          </div>
          <div className="createTicket_Body"></div>
        </div> */}
      {/* <div className="row w_100 m_0 mt_12">
        <div className="col-4">
          <div className="create_ticket_card">
            <div className="header">
              Users
            </div>
            <div className="body">
              <div className="item">Add Users</div>
              <div className="item">(or)</div>
              <div className="item">Edit Users</div>
              <div className="item">(or)</div>
              <div className="item">Remove Users</div>
              <div className="item pb_18">
                <SLButton
                  className="contained"
                // handleClick={() => toggleDrawer(true)}
                >Click Here
                </SLButton>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="create_ticket_card">
            <div className="header">
              Schools
            </div>
            <div className="body">
              <div className="item">Add Schools</div>
              <div className="item">(or)</div>
              <div className="item">Edit Schools</div>
              <div className="item">(or)</div>
              <div className="item">Remove Schools</div>
              <div className="item pb_18">
                <SLButton
                  className="contained"
                // handleClick={() => toggleDrawer(true)}
                >Click Here
                </SLButton>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="create_ticket_card">
            <div className="header">
              Students
            </div>
            <div className="body">
              <div className="item">Add Students</div>
              <div className="item">(or)</div>
              <div className="item">Edit Students</div>
              <div className="item">(or)</div>
              <div className="item">Remove Students</div>
              <div className="item pb_18">
                <SLButton
                  className="contained"
                // handleClick={() => toggleDrawer(true)}
                >Click Here
                </SLButton>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row w_100 mt_12">
        <div className="col-4">
          <div className="create_ticket_card">
            <div className="header">
              Users
            </div>
            <div className="body">
              <NavLink to={'/Tickets/AddUsers'}>
                <div className="item"><AddRoundedIcon className="item_icon" />Add Users</div>
              </NavLink>
              <div className="item"><CreateOutlinedIcon className="item_icon" />Edit Users</div>
              <div className="item"><DeleteOutlineRoundedIcon className="item_icon" />Remove Users</div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="create_ticket_card">
            <div className="header">
              Schools
            </div>
            <div className="body">
              <div className="item"><AddRoundedIcon className="item_icon" />Add Schools</div>
              <div className="item"><CreateOutlinedIcon className="item_icon" />Edit Schools</div>
              <div className="item"><DeleteOutlineRoundedIcon className="item_icon" />Remove Schools</div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="create_ticket_card">
            <div className="header">
              Students
            </div>
            <div className="body">
              <NavLink to={'/Tickets/AddStudents'}>
                <div className="item"><AddRoundedIcon className="item_icon" />Add Students</div>
              </NavLink>
              <div className="item"><CreateOutlinedIcon className="item_icon" />Edit Students</div>
              <div className="item"><DeleteOutlineRoundedIcon className="item_icon" />Remove Students</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTickets;
