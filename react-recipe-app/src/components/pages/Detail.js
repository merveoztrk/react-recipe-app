import { Space, Card } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchDetail } from '../../apis/recipes';
import '../../style/detail.css'


const { Meta } = Card;

const Detail = ({ fetchDetail }) => {
    const [details, setDetails] = useState({})
    const [video, setVideo] = useState("")

    const { id } = useParams();

    useEffect(() => {
        fetchDetail(id)
            .then((res) => {
                setDetails(res.data.meals[0])
                console.log(details.strYoutube)
                setVideo(res.data.meals[0].strYoutube)
            })

        console.log(id)
        console.log(details)
        console.log(details.strYoutube)


    }, [])

    return (
        <div>
            <Space className='detail'>
                <div className='left_poster'>
                    <Card style={{ width: "435px", height: "652px", margin: "0px 0 0 63px" }} cover={<img alt="example" src={details.strMealThumb} />}></Card>
                </div>
                <Space className='detail_card'>
                    <Card >
                        <Meta style={{ padding: "5px" }} title={details.strMeal} description={`Recipe: ${details.strInstructions} `} />
                        <Meta style={{ padding: "15px" }} title={"Do it by watching:"} />
                        <iframe width="646" height="350"
                            src={video.replace("watch?v=", "embed/")}
                            title={details.strTags}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        >
                        </iframe>
                    </Card>
                </Space>
            </Space>
        </div >
    )
}

export default Detail;
