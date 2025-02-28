import { Link, useLocation } from "react-router-dom";
import dashboardIcon from '../../Assets/SideNavIcons/dashboard.png';
import holidaysIcon from '../../Assets/SideNavIcons/holidays.png';
import studentsIcon from '../../Assets/SideNavIcons/students.png';
import ticketsIcon from '../../Assets/SideNavIcons/tickets.png';
import summaryIcon from '../../Assets/SideNavIcons/summary.png';
import accountIcon from '../../Assets/SideNavIcons/account.png';
import { useContext } from "react";
import { Context } from "../../App";

const MainComponent = () => {
  const location = useLocation();
  const [context, setContext] = useContext<any>(Context);
  const { IsAdmin, IsUser, IsStudent } = context.Permissions;
  const AdminMenuData = ["Dashboard", "Accounts", "Students", "Summary", "Holidays", "Tickets"];
  const UserMenuData = ["Dashboard", "Account", "Students", "Summary", "Holidays", "Tickets"];
  const StudentMenuData = ["Dashboard", "Students", "Summary", "Holidays", "Tickets"];

  // const AdminMenuData = [
  //   {
  //     text: "Dashboard",
  //     link: "Dashboard",
  //     icon: <img src={dashboardIcon} />,
  //     status: location.pathname === "/Dashboard" ? "active" : "",
  //   },
  //   {
  //     text: "Accounts",
  //     link: "Accounts",
  //     icon: <img src={accountIcon} />,
  //     status: location.pathname === "/Accounts" ? "active" : "",
  //   },
  //   {
  //     text: "Students",
  //     link: "Students",
  //     icon: <img src={studentsIcon} />,
  //     status: location.pathname === "/Students" ? "active" : "",
  //   },
  //   {
  //     text: "Summary",
  //     link: "Summary",
  //     icon: <img src={summaryIcon} />,
  //     status: location.pathname === "/Summary" ? "active" : "",
  //   },
  //   {
  //     text: "Holidays",
  //     link: "Holidays",
  //     icon: <img src={holidaysIcon} />,
  //     status: location.pathname === "/Holidays" ? "active" : "",
  //   },
  //   {
  //     text: "Tickets",
  //     link: "Tickets",
  //     icon: <img src={ticketsIcon} />,
  //     status: location.pathname === "/Tickets" ? "active" : "",
  //   },
  // ];
  // const UserMenuData = [
  //   {
  //     text: "Dashboard",
  //     link: "Dashboard",
  //     icon: <img src={dashboardIcon} />,
  //     status: location.pathname === "/Dashboard" ? "active" : "",
  //   },
  //   {
  //     text: "Account",
  //     link: "Account",
  //     icon: <img src={accountIcon} />,
  //     status: location.pathname === "/Account" ? "active" : "",
  //   },
  //   {
  //     text: "Students",
  //     link: "Students",
  //     icon: <img src={studentsIcon} />,
  //     status: location.pathname === "/Students" ? "active" : "",
  //   },
  //   {
  //     text: "Summary",
  //     link: "Summary",
  //     icon: <img src={summaryIcon} />,
  //     status: location.pathname === "/Summary" ? "active" : "",
  //   },
  //   {
  //     text: "Holidays",
  //     link: "Holidays",
  //     icon: <img src={holidaysIcon} />,
  //     status: location.pathname === "/Holidays" ? "active" : "",
  //   },
  //   {
  //     text: "Tickets",
  //     link: "Tickets",
  //     icon: <img src={ticketsIcon} />,
  //     status: location.pathname === "/Tickets" ? "active" : "",
  //   },
  // ];
  // const StudentMenuData = [
  //   {
  //     text: "Dashboard",
  //     link: "Dashboard",
  //     icon: <img src={dashboardIcon} />,
  //     status: location.pathname === "/Dashboard" ? "active" : "",
  //   },
  //   {
  //     text: "Account",
  //     link: "Account",
  //     icon: <img src={accountIcon} />,
  //     status: location.pathname === "/Account" ? "active" : "",
  //   },
  //   {
  //     text: "Students",
  //     link: "Students",
  //     icon: <img src={studentsIcon} />,
  //     status: location.pathname === "/Students" ? "active" : "",
  //   },
  //   {
  //     text: "Summary",
  //     link: "Summary",
  //     icon: <img src={summaryIcon} />,
  //     status: location.pathname === "/Summary" ? "active" : "",
  //   },
  //   {
  //     text: "Holidays",
  //     link: "Holidays",
  //     icon: <img src={holidaysIcon} />,
  //     status: location.pathname === "/Holidays" ? "active" : "",
  //   },
  //   {
  //     text: "Tickets",
  //     link: "Tickets",
  //     icon: <img src={ticketsIcon} />,
  //     status: location.pathname === "/Tickets" ? "active" : "",
  //   },
  // ];

  var data = IsAdmin ? AdminMenuData
    : IsUser ? UserMenuData
      : IsStudent ? StudentMenuData
        : [];

  const menuData = data.map((item: any) => (
    <Link to={item} key={item}>
      <li>
        <div className={location.pathname === `/${item}` ? "active" : ""}>
          {item === 'Dashboard' && <img src={dashboardIcon} />}
          {(item === 'Account' || item === 'Accounts') && <img src={accountIcon} />}
          {item === 'Students' && <img src={studentsIcon} />}
          {item === 'Summary' && <img src={summaryIcon} />}
          {item === 'Holidays' && <img src={holidaysIcon} />}
          {item === 'Tickets' && <img src={ticketsIcon} />}
          <br />
          <span>{item}</span>
        </div>
      </li>
    </Link >
  ));

  return (
    <aside>
      <ul>{menuData || <></>}</ul>
    </aside>
  );
};
export default MainComponent;
