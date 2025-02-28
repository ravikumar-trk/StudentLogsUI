import { Tabs } from "antd";
import AccountTab from "./AccountTab";
import UsersTab from "./UserTab";
import SchoolTab from "./SchoolTab";
import { useContext } from "react";
import { Context } from "../../App";
const { TabPane } = Tabs;

const Account = () => {
  const [context, setContext] = useContext<any>(Context);
  return (
    <div>
      <ul>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Account" key="1">
            <AccountTab />
          </TabPane>
          <TabPane tab="Schools" key="2">
            <SchoolTab />
          </TabPane>
          <TabPane tab="Users" key="3">
            <UsersTab />
          </TabPane>
        </Tabs>
      </ul>
    </div>
  );
};
export default Account;
