import React from 'react'
import { Card, Typography, Space, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { countrylist } from '../Countries';


const Region = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };

    const nav = useNavigate();


    const { Meta } = Card;

    const list = countrylist

    return (
        <div>
            <Space className="title">
                <Typography.Text style={{ fontSize: 60, paddingLeft: "80px" }} orientation="center">Dishes by Region</Typography.Text>
            </Space>
            <Row justify='space-around' align="middle" gutter={[48, 24]} style={{ paddingLeft: "80px" }}>
                {list.map((item) => (
                    <Col className='card' span={6}>
                        <Card onClick={() => nav(`/search/a=${item.strArea}`)} style={{ width: 240 }} cover={<img alt="example" style={{ borderStyle: 'solid', borderColor: 'black' }} src={`https://countryflagsapi.com/png/${item.strName}`} />}>
                            <Meta title={`${item.strArea}`} />
                        </Card>
                    </Col >
                ))}
            </Row>

        </div>
    )
}

export default Region
