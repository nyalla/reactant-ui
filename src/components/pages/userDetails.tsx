 import React, {useEffect, useState} from 'react';
import {Table, Row, Col, Button, Typography} from 'antd';
import {useHistory} from 'react-router';
import axios from 'axios';
import { message } from 'antd';

const {Title} = Typography;


const UserDetails = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);

  const error = (msg: import("history").History.PoorMansUnknown) => {
    message.error(msg);
  };

  useEffect(() => {
    axios.get(`http://nyalla:8089/management/member/addedBy/8`).then(res => {
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
      title: 'Phone',
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
     
  ];

  const data = [{
  }];

  allData.map((member: any) => {
    data.push({
     key: member.memberId,
     name: member.name,
     phone: member.phone,
     email: member.email,
     pan: member.pan,
     address: member.address,
     dob: new Date(member.dob).getFullYear(),
      
   })
   return data;
 });

  const handleClick = () => {
    history.push('/UserForm')
  }

  return (
    <div>
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>
            Member details
            </Title>
            </Col>
          <Col span={6}>
          <Button onClick={handleClick} block>Add Member</Button>
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

export default UserDetails;
