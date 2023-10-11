import { Layout, theme } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContent from '../HomeContent';
const { Header, Content, Footer, Sider } = Layout;
export default function HomeText() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    
    <div>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              marginLeft:256
            }}
          />
          <Content
            style={{
              margin: '0 16px',
              marginLeft:256
            }}
          >
              <Routes>
                <Route path='booking1' element={<HomeContent/>}/>
              </Routes>
              
           
            
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Test Design ©2023 Created for Test Purpose
          </Footer>
       
    </div>
  )
}
