import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { CarOutlined, BoxPlotOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import OnBoardNewParkingLot from './Components/OnBoardNewParkingLot';
import AvailableSlots from "./Components/AvailableSlots";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [availableSlots, setAvailableSlots] = useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    fetch("http://localhost:8000/slots")
      .then((res) => res.json())
      .then((data) => setAvailableSlots(data.slots));
  }, []);

  return (
    <Router>
      <Layout>
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="1">
              <BoxPlotOutlined />
                <span>Add New Lot</span>
                  <Link to="/addNewParkingLot" />
            </Menu.Item>
            <Menu.Item key="2">
              <CarOutlined />
                <span>Available Slots</span>
                  <Link to="/" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ paddingTop: '-5px', background: colorBgContainer, textAlign: "center", fontSize: '30px', fontWeight: '700' }} >Parking Lot Management Service</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 420, background: colorBgContainer }}>
              <Routes>
                <Route exact path="/addNewParkingLot" element={<OnBoardNewParkingLot />} />
                <Route path="/" element={<AvailableSlots slots={availableSlots} />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Parking Lot Management Service ©2023 Created by Suraj Patil</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;