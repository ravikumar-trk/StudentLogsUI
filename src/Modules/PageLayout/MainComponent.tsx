import React from 'react';
import { Layout } from 'antd';
import { IMenuLinks, IState } from './MainUtils';
import HeaderComponent from './HeaderComponent'
import SideBar from './SideBar';
import BodyComponent from './BodyComponent';

class MainComponent extends React.PureComponent<any, IState, IMenuLinks> {
    render() {
        return (
            <Layout>
                {/* <HeaderComponent /> */}
                <Layout hasSider>
                    <SideBar />
                    <Layout style={{ height: '100vh', overflowY: 'auto' }}>
                        <HeaderComponent />
                        <BodyComponent />
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
export default MainComponent