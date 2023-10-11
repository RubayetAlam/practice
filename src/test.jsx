import { Breadcrumb, Col, Dropdown, Icon, Layout, LocaleProvider, Menu, Row } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import React from 'react';
const {Header, Sider, Content, Footer} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import { FlowRouter } from 'meteor/kadira:flow-router';

export default class App2 extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    linkTo = (item) => {
        console.log(item);
        FlowRouter.go(item.key);
    };

    render() {
        const style = {
            logoImg: {
                width: "40px",
                marginRight: "8px"
            },
            logoTitle: {
                verticalAlign: "text-bottom",
                fontSize: "16px",
                textTransform: "uppercase",
                display: "inline-block",
            }
        };

        const menuHead = (
            <Menu>
                <Menu.Item>
                    <a rel="noopener noreferrer" href="http://www.alipay.com/">Profile</a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" href="http://www.taobao.com/">Logout</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <LocaleProvider locale={enUS}>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo">
                            <img src="/antd-logo.svg" style={style.logoImg}/>
                            <span style={style.logoTitle}>
                                METEOR ANTD
                            </span>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.linkTo}>
                            <Menu.Item key="App.home">
                                <Icon type="home"/>
                                <span className="nav-text">Home</span>
                            </Menu.Item>
                            <Menu.Item key="App.form">
                                <Icon type="video-camera"/>
                                <span className="nav-text">Form</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload"/>
                                <span className="nav-text">nav 3</span>
                            </Menu.Item>

                            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                                <Menu.Item key="4">Option 1</Menu.Item>
                                <Menu.Item key="5">Option 2</Menu.Item>
                                <Menu.Item key="6">Option 3</Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub2" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="7">Option 1</Menu.Item>
                                    <Menu.Item key="8">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="9">Option 3</Menu.Item>
                                    <Menu.Item key="10">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                    </Sider>

                    <Layout>

                        <Header style={{background: '#fff', padding: 0}}>
                            <Row>
                                <Col span={12}>
                                    <Icon
                                        className="trigger"
                                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                        onClick={this.toggle}
                                    />
                                </Col>
                                <Col span={12}>
                                    <Dropdown overlay={menuHead} placement="bottomRight">
                                        <a className="ant-dropdown-link" href="#">
                                            Username <Icon type="down"/>
                                        </a>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Header>

                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '12px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>

                            <div style={{background: '#fff', padding: 24, minHeight: 360}}>

                                {this.props.content}

                            </div>

                        </Content>

                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>

                    </Layout>
                </Layout>
            </LocaleProvider>
        );
    }
}