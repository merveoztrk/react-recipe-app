import React from 'react';
import { Dropdown, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Sidebar = () => {

    const nav = useNavigate();

    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: '0',
        },
        {
            label: <Link to="/categories">Food Category</Link>,
            key: '1',
        },
        {
            label: <Link to="/region">Dishes by region</Link>,
            key: '2',
        },
        {
            label: <Link to="/random">What should i cook today?</Link>,
            key: '3',
        },
    ];

    const onClick = (e) => {
        console.log('click', e);
    };

    return (
        <div style={{ width: "100%" }}>
            <Dropdown menu={{ items, }}
                trigger={['click']}
                placement="bottomLeft"
                arrow={{
                    pointAtCenter: true,
                }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <MenuOutlined style={{
                            fontSize: 20,
                            margin: 22,
                            color: 'black'
                        }} />
                    </Space>
                </a>
            </Dropdown>
        </div>

    )
}

export default Sidebar;
