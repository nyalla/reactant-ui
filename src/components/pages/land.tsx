import React, { useState, useEffect } from 'react';
import { Result, Button } from 'antd';
import ApplicationRoutes from "../../config/ApplicationRoutes";
import { Layout, Avatar } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

const Land = () => {


  return (
    <Layout>
      <Content style={{  padding: 200, background: "#fff" }}>

        
        <Result
           
          title="Please introduce yourself to the Chitfor"
          subTitle="One stop place for all your financial management.....!"
          extra={[
            <Button type="primary" >
              Register
      </Button>,
            <Button key="login">Login</Button>,
          ]}
        />
      </Content>
      <Footer style={{ textAlign: 'center' }}>A design by Highlancers team</Footer>
    </Layout>
  );
};

export default Land;