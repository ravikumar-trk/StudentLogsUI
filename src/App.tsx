import './App.css';
import './bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './Modules/Login/Login';
import { ILoginData } from './Common/Store/ContaxtStore';
import React, { useState } from 'react';
import { Spin } from 'antd';
import MainComponent from './Modules/PageLayout/MainComponent';

export const Context = React.createContext<any>([]);

function App() {
  const [context, setContext] = useState<any>(ILoginData);
  const LoginDataTemp: any = sessionStorage.getItem('UserData');
  if (LoginDataTemp === undefined || LoginDataTemp === null || LoginDataTemp === "") {
    sessionStorage.setItem('UserData', JSON.stringify(ILoginData));
  }
  else {
    const LoginDataTempPasre: any = JSON.parse(LoginDataTemp);
    if (LoginDataTempPasre.LoginUserID !== 0 && context.LoginUserID === 0) {
      setContext(LoginDataTempPasre);
    }
  }
  return (
    <Context.Provider value={[context, setContext]}>
      <div>
        <Spin tip="Loading..." spinning={context.Spin}>
          <BrowserRouter>
            {
              // context.LoginUserID !== 0 ? 
              <MainComponent />
              // : <Login />
            }
            {/* <Layout/> */}
          </BrowserRouter>
        </Spin>
      </div>
    </Context.Provider>
  );
}
export default App;