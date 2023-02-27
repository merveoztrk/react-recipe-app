import React from 'react'
import { Space, Card } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRandomRecipe } from '../../apis/recipes';
import '../../style/detail.css'

const { Meta } = Card;
const Random = () => {
    const [details, setDetails] = useState({})
    const [video, setVideo] = useState("")

    const { id } = useParams();


    useEffect(() => {
        fetchRandomRecipe(id)
            .then((res) => {
                setDetails(res.data.meals[0])
                setVideo(res.data.meals[0].strYoutube)
            })
    }, [])

    return (
        <div>
            <Space className='detail'>
                <div className='left_poster'>
                    <Card style={{ width: "435px", height: "652px", margin: "20px 0 0 63px" }} cover={<img alt="example" src={`${details.strMealThumb}`} />}></Card>
                </div>
                <Space className='detail_card'>
                    <Card>
                        <Meta style={{ padding: "5px" }} title={`${details.strMeal}`} description={`Recipe: ${details.strInstructions} `} />
                        <Meta style={{ padding: "15px" }} title={`Area: ${details.strArea}`} />
                        <Meta style={{ padding: "15px" }} title={"Do it by watching:"} />
                        <iframe width="646" height="350" src={video.replace("watch?v=", "embed/")}
                            title={`${details.strTags}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </Card>
                </Space>
            </Space>

        </div>
    )
}

export default Random
