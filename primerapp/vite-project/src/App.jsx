import { useState } from 'react';
import { Collapse, Layout } from 'antd';
import { Button, theme } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'; // Cambia MenufoldOutlined a MenuFoldOutlined


const { Header, Sider } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState (false)

  const{
    token: {colorBgContainer},
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider collapsed={collapsed} collapsible className='sidebar' style={{ backgroundColor: "#BFACC8" }}>
          <Logo/>
          <MenuList/>

        </Sider>
        <Layout>
          <Header style={{ padding: 0 , background:
             colorBgContainer}}>
            <Button 
              type='text'
              className='toggle'
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : 
              <MenuFoldOutlined/> }
            />
          </Header>
        </Layout>
      </Layout>
    </>
  )
}

export default App
