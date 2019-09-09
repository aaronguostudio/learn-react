import * as React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu;

interface IProps {

}

const DefaultLayout: React.FC<IProps> = ({children}) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        className="header"
        style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '1px solid #1890ff' }}
      >
        <div style={{ color: '#FFF', marginRight: '20px' }}>
          <img style={{ width: '120px' }} src='/payload-logo.png' />
        </div>
        {/* <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/hello">
              Hello
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/documents">
              Documents
            </Link>
          </Menu.Item>
        </Menu> */}
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          theme='light'
        >
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to='/'>
                <Icon type="pie-chart" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/company'>
                <Icon type="desktop" />
                <span>Company</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/users'>
                <Icon type="desktop" />
                <span>Users</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Documents</span>
                </span>
              }
            >
              <Menu.Item
                key="4"
              >
                <Link to='/documents/inprogress'>
                  In Progress
                </Link>
              </Menu.Item>
              <Menu.Item
                key="5"
              >
                <Link to='/documents/processed'>
                  Processed
                </Link>
              </Menu.Item>
              <Menu.Item
                key="6"
              >
                <Link to='/documents/history'>
                  History
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
