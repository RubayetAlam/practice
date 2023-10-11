import { Breadcrumb, Button, Image, theme } from 'antd';
import React, { useState } from 'react';
// import Displaymg from './assets/sampleImage.webp';
export default function HomeText() {
  const [visible, setVisible] = useState(false);  
  const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    
    <div>
      <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
      <Button type="primary" onClick={() => setVisible(true)}>
        show image preview
      </Button>
           <Image
           style={{display:'none'}}
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
    preview={{
      visible,
      src:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      onVisibleChange: (value) => {
        setVisible(value);
      },
    }}
  />
          </div>
    </div>
  )
}
