import React, { useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Space, Input, Typography } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { useState } from "react";
import '../../style/home.css'
import Footer from '../Footer';

const Home = () => {
    const [a, seta] = useState(0);
    const [b, setb] = useState(0);
    const [total, setTotal] = useState(0);

    const [search, setSearch] = useState("");
    setb(1);

    console.log("yuklendi", b)
    useEffect(() => {
        console.log("degisti")
        setTotal(a + b);
    }, [a, b])

    useEffect(() => {
        console.log("yuklendi")
    }, [])


    console.log("yuklendi")

    useEffect(() => {
        console.log("yuklendi2")
    })

    useEffect(() => {
        console.log("yuklendi")
    }, [search])


    //setTotal(a+b);


    return (

        <div className='home_container' >
            <input value={search} onChange={e => setSearch(e.target.value)} />
            <div>{counter}</div>
        </div>
    )
}

export default Home
