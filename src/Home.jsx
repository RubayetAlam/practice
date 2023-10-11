import {
  BranchesOutlined,
  HomeOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Booking from './Components/Booking';
import HomeContent from './HomeContent';
// const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Configuration', 'sub1', <SettingOutlined/>,[
  getItem('Service', '3'),
  getItem('Controller', '4'),
  getItem('Component', '5'),
]),
  getItem('Export', 'sub2', <BranchesOutlined />, [
    getItem('Booking', '6'),
    getItem('PI Registration', '7'),
    getItem('Payment', '8'),
  ]),
];
const Home = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div>
    <Menu
      onClick={onClick}
      style={{
        width: 256,
        display:'block'
        
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['1']}
      mode="inline"
      items={items}
    />
    <Routes>
      <Route path="booking/*" element={<Booking/>}>
      <Route path="booking1" element={<HomeContent/>} />
      </Route>
    </Routes>
    </div>
  );
};
export default Home;
