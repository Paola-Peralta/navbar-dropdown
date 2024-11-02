import { Menu } from 'antd'
import { AppstoreAddOutlined, AreaChartOutlined, HomeOutlined, PayCircleOutlined, SettingOutlined } from '@ant-design/icons'

const MenuList = () =>{
    return(
        <Menu className='menu-bar' style={{ backgroundColor: "#BFACC8", color: "#000" }}>
            <Menu.Item key="home" icon={<HomeOutlined/>}>
                Home
            </Menu.Item>
            <Menu.Item key='activity' icon={<AppstoreAddOutlined/>}>
                Activity
            </Menu.Item>
            <Menu.Item key='progress' icon={<AreaChartOutlined/>}>
                Progress
            </Menu.Item>
            <Menu.Item key='payment' icon={<PayCircleOutlined/>}>
                Payment
            </Menu.Item>
            <Menu.Item key='setting' icon={<SettingOutlined/>}>
                Setting
            </Menu.Item>
        </Menu>
    );
};

export default MenuList