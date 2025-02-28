import { Suspense } from "react";
import { Layout } from "antd";
import { Routes, Route } from 'react-router-dom';

import Account from "../MasterData/Account";
import Accounts from "../MasterData/Accounts";

import Summary from "../Summary/Summary";
import StudentwiseSummary from "../Summary/StudentwiseSummary/StudentwiseSummary";
import MonthwiseSummary from "../Summary/MonthwiseSummary/MonthwiseSummary";
import DaywiseSummary from "../Summary/DaywiseSummary/DaywiseSummary";

import Settings from "../Settings/Settings";
import ClassCodes from "../Settings/ClassCodes";
import Holidays from "../Settings/Holidays";
import UpgradeClass from "../Settings/UpgradeClass";
import Adjustment from "../Settings/Adjustment";
import AdjustmentHistory from "../Settings/AdjustmentHistory";

import Dashboard from "../Dashboard/Dashboard";
import TicketsList from "../Tickets/TicketsList";
import CreateTickets from "../Tickets/CreateTickets/CreateTickets";
import AddStudents from "../Tickets/CreateTickets/AddStudents";
import AddUsers from "../Tickets/CreateTickets/AddUsers";
import Students from "../Students";
import StudentDetails from "../Students/StudentDetails";


const { Content } = Layout;

const BodyComponent = () => {
  return (
    <Content style={{ margin: "0 0", overflow: "initial" }}>
      <div className="site-layout-background" style={{ minHeight: 360 }}>
        <Suspense
          fallback={
            <div className="site-layout-background layout_height">
              loading...
            </div>
          }
        >
          <Routes>

            <Route path={"/Account"} element={<Account />} />
            <Route path={"/Accounts"} element={<Accounts />} />
            <Route path={"/Students"} element={<Students />} />
            <Route path={"/StudentDetails/:id"} element={<StudentDetails />} />

            <Route path={"/Summary"} element={<Summary />} />
            <Route
              path={"/StudentwiseSummary"}
              element={<StudentwiseSummary />}

            />
            <Route
              path={"/MonthwiseSummary"}
              element={<MonthwiseSummary />}

            />
            <Route path={"/DaywiseSummary"} element={<DaywiseSummary />} />
            <Route path={"/Settings"} element={<Settings />} />
            <Route path={"/ClassCodes"} element={<ClassCodes />} />
            <Route path={"/Holidays"} element={<Holidays />} />
            <Route path={"/UpgradeClass"} element={<UpgradeClass />} />
            <Route
              path={"/AdjustmentHistory"}
              element={<AdjustmentHistory />}

            />
            <Route path={"/Adjustment"} element={<Adjustment />} />
            <Route path={"/Dashboard"} element={<Dashboard />} />

            <Route path={"/Tickets"} element={<TicketsList />} />
            <Route path={"/Tickets/Create"} element={<CreateTickets />} />
            <Route path={"/Tickets/AddStudents"} element={<AddStudents />} />
            <Route path={"/Tickets/AddUsers"} element={<AddUsers />} />
            <Route path={"/"} element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Content>
  );
};
export default BodyComponent;
