import React from 'react';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { ClusterOutlined,TeamOutlined ,ReadOutlined   } from '@ant-design/icons';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import {useHistory}  from 'react-router';

const SideNav = () => {
    const history = useHistory();

    const handleUserClick = () => {
        history.push('/list');
    }
    const handleRegisterClickClick = () => {
        history.push('/register');
    }
    const handleOrganisationDetailsClick = () => {
        history.push('/organisationDetails');
    }
    const handleOrganiserClick = () => {
        history.push('/OrganiserForm');
    }

  return (
      <div>
        <div style={{height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px"}}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={handleRegisterClickClick}>
                    <UserOutlined />
                    <span> Organisation</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleOrganisationDetailsClick}>
                    <UploadOutlined />
                    <span> Organisation Details</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleOrganiserClick}>
                    <UserOutlined />
                    <span> Organisers</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={handleUserClick}>
                    <UserOutlined />
                    <span> Users</span>
                </Menu.Item>      
            </Menu>
        </div>
  );
}

export default SideNav;
