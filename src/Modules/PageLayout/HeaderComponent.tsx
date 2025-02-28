import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Settings"><NotificationsActiveOutlinedIcon /></NavLink>
        </li>
        <li>
          <NavLink to="/Settings"><SettingsOutlinedIcon /></NavLink>
        </li>
        <li>
          <NavLink to="/Tickets"><PowerSettingsNewIcon /></NavLink>
        </li>
        <li>
          <a><div className="profile_div">RT</div></a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent