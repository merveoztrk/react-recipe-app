import React from 'react'
import { Table, Space, Button, } from "antd";
import { useState, useEffect } from "react";
import 'antd/dist/antd.min.css';
import { useNavigate } from "react-router-dom";
import { fetchRecipeCategories, fetchRecipeCategoriesFilter, fetchRecipeSearch } from '../../apis/recipes';
import { useParams } from 'react-router-dom'
import '../../style/search.css'
import Categories from './Categories';
import { Link } from 'react-router-dom'



const SearchResult = () => {

    const [searchRecipe, setSearchRecipe] = useState([]);
    const [categorieslist, setCategorieslist] = useState([]);
    const [sortedInfo, setSortedInfo] = useState({});
    const [filteredInfo, setFilteredInfo] = useState({});
    // const { currentUser } = useContext(AuthContext)

    const { term } = useParams();


    const nav = useNavigate();

    const handleChange = (filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const columns = [
        {
            title: 'Category',
            dataIndex: 'strMeal',
            key: 'category',
            sorter: (a, b) => a.category.length - b.title.length,
            sortOrder: sortedInfo.columnKey === 'title' ? sortedInfo.order : null,
            ellipsis: true,
            render: (record, _) =>
                // (currentUser &&)
                <Link to={`/details/${_.idMeal}`}>{record}</Link>
        },
        {
            title: 'Image',
            dataIndex: 'strMealThumb',
            key: 'image',
            sorter: (a, b) => a.description.length - b.description.length,
            sortOrder: sortedInfo.columnKey === 'description' ? sortedInfo.order : null,
            render: (theImageURL, _) => <img style={{ width: 200, height: 200 }} alt={theImageURL} src={theImageURL} onClick={() => nav(`/details/${_.idMeal}`)} />

        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type='primary'
                    //  onClick={() => { nav(`/edit/${record._id}`) }}
                    >Edit</Button>
                    <Button type='danger'
                    // onClick={() => { nav(`/delete/${record._id}`) }}
                    >Delete</Button>
                </Space>
            )
        }
    ]

    useEffect(() => {

        fetchRecipeCategoriesFilter(term)
            .then(res => {
                setSearchRecipe(res.data.meals)
                console.log(res)
            });
    }, []);

    console.log(searchRecipe)
    //console.log(categorieslist)

    return (
        <div>
            {/* <Sidebar /> */}
            <Space className='table'>
                <Table
                    columns={columns}
                    dataSource={searchRecipe}
                    onChange={handleChange}
                // onRow={(record, rowIndex) => {
                //     return {
                //         onClick: event => { nav(`/details/${record.idMeal}`) }
                //     }
                // }}
                />
            </Space>
        </div>
    )
}

export default SearchResult;
