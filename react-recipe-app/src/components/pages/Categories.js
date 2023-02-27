import { Card, Typography, Space, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRecipeCategories } from '../../apis/recipes';

const { Meta } = Card;

const Categories = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };

    const nav = useNavigate();
    const [categorieslist, setCategorieslist] = useState([])

    useEffect(() => {
        fetchRecipeCategories()
            .then((res) => setCategorieslist(res.data.categories))
    }, [])


    return (
        <div>
            <Space className="title">
                <Typography.Text style={{ fontSize: 60, paddingLeft: "80px" }} orientation="center">Categories</Typography.Text>
            </Space>
            <Row justify='space-around' align="middle" gutter={[48, 24]} style={{ paddingLeft: "80px" }}>
                {categorieslist.map((item) => (
                    <Col className='card' span={6}>
                        <Card onClick={() => nav(`/search/c=${item.strCategory}`)} style={{ width: 240 }} cover={<img alt="example" src={item.strCategoryThumb} />}>
                            <Meta title={`${item.strCategory}`} />
                        </Card>
                    </Col >
                ))}
            </Row>
        </div>
    )
}

export default Categories
