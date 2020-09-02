 import React, {useEffect, useState} from 'react';
import {Table, Row, Col, Button, Typography} from 'antd';
import {useHistory} from 'react-router';
import axios from 'axios';

const {Title} = Typography;


const OrganisationDetails = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios.get(`http://nyalla:8089/management/organisation/organisationId/8`).then(res => {
      console.log(res.data)
      setAllData(res.data);
    });
  });

  const columns = [
    {
      title: 'orgId',
      dataIndex: 'orgId',
    },
    {
      title: 'orgName',
      dataIndex: 'orgName'
    },
    {
      title: 'legalId',
      dataIndex: 'legalId'
    },
    {
      title: 'estdDate',
      dataIndex: 'estdDate'
    },
    {
      title: 'chairmanName',
      dataIndex: 'chairmanName'
    },
    {
      title: 'userName',
      dataIndex: 'userName'
    },
  ];

  const data = [{
  }];

  allData.map((organisation: any) => {
    data.push({
     key: organisation.orgId,
     orgName: organisation.orgName,
     legalId: organisation.legalId,
     estdDate: organisation.estdDate,
     chairmanName: organisation.chairmanName,
     userName: organisation.userName,
   })
   return data;
 });

  const handleClick = () => {
    history.push('/form')
  }

  return (
    <div>
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>
            Organisation details
            </Title>
            </Col>
          <Col span={6}>
          <Button onClick={handleClick} block>Add User</Button>
          </Col>
        </Row>
        <Row gutter={[40, 0]}>
        <Col span={24}>
        <Table columns={columns} dataSource={data} />
        </Col>
        </Row>
    </div>
  );
}

export default OrganisationDetails;
