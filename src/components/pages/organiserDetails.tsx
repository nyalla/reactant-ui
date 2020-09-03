 import React, {useEffect, useState} from 'react';
import {Table, Row, Col, Button, Typography} from 'antd';
import {useHistory} from 'react-router';
import axios from 'axios';
import { message } from 'antd';

const {Title} = Typography;


const OrganiserDetails = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);

  const error = (msg: import("history").History.PoorMansUnknown) => {
    message.error(msg);
  };

  useEffect(() => {
    axios.get(`http://nyalla:8089/management/organiser/orgId/8`).then(res => {
      console.log(res.data.data)
      setAllData(res.data.data);
    }).catch(err => {
      // what now?
      error("Error contacting API")
  });
  },[]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Experience in Field',
      dataIndex: 'ageInField'
    },
    {
      title: 'phone',
      dataIndex: 'phone'
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'PAN',
      dataIndex: 'pan'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
      title: 'DOB',
      dataIndex: 'dob'
    },
    {
      title: 'Joined On',
      dataIndex: 'doj'
    },
  ];

  const data = [{
  }];

  allData.map((organiser: any) => {
    data.push({
     key: organiser.organiserId,
     name: organiser.name,
     orgName: organiser.orgName,
     ageInField: organiser.ageInField,
     phone: organiser.phone,
     email: organiser.email,
     pan: organiser.pan,
     address: organiser.address,
     dob: new Date(organiser.dob).getFullYear(), 
     doj: new Date(organiser.doj).getFullYear(), 
 
   })
   return data;
 });

  const handleClick = () => {
    history.push('/OrganiserForm')
  }

  return (
    <div>
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>
            Organiser  Details
            </Title>
            </Col>
          <Col span={6}>
          <Button onClick={handleClick} block>Add Organiser</Button>
          </Col>
        </Row>
        <Row gutter={[40, 0]}>
        <Col span={24}>
        <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
        </Row>
    </div>
  );
}

export default OrganiserDetails;
