import React, { useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Space, Input, Typography } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { useState } from "react";
import '../../style/home.css'
import Footer from '../Footer';
import { fetchByIngrediant } from '../../apis/recipes';

const Home = () =>
{

    const [ term, setTerm ] = useState( '' );
    const [ meals, setMeals ] = useState( [] );

    // const getAllMeals = async () =>
    // {
    //     setAllMeals( ( await fetchAllMeals() ).data.meals )
    // } //verimdeki tüm meals bilgisini çektim

    // useEffect( () =>
    // {
    //     getAllMeals();
    //     console.log( "getAllMeals", questionCount )
    // }, [ questionCount ] ) //girilen soru sayısı değiştiğinde yemek listesi çekiliyor


    const getMeals = async () =>
    {
        const resp = await fetchByIngrediant( term );//term'e göre fetch yapılacak onu da setter'ım içine attım
        setMeals( resp.data.meals );
    }

    useEffect( () =>
    {
        console.log( "meals", meals )
    }, [ meals ] )

    useEffect( () =>
    {
        if ( term !== "" )
            getMeals();
    }, [ term ] )


    const nav = useNavigate();

    const onsubmit = event =>
    {
        event.preventDefault();
        // console.log();
        nav( `/search_by_ingredient/${ term }` )
    };

    //const array =[1, 2, 3].map(item => item + 1)
    const [ counter, setCounter ] = useState( 0 );
    //const counterRef = useRef(counter);
    const firstRenderDoneRef = useRef( false );
    //useRef'in döneceği current nesnesinin başlangıç değerini verdik
    /* useRef renderlar arasında değerleri kalıcı hale getirmemizi sağlıyor.
    Güncellendiğinde yeniden işlemeye gerek kalmayan değiştirilebilir
    değer depolamaya yarayan useRef değişkeni oluşturduk ve global değişken kullanmadık.*/
    useEffect( () =>
    {
        if ( firstRenderDoneRef.current ) return;
        firstRenderDoneRef.current = true;
        //useRef current nesnesini döndürür
        //console.log("asdasd")
        setInterval( () =>
        {
            //setCounter(counter + 1)
            // counterRef.current++;
            //setCounter(counterRef.current);
            setCounter( ( oldCounter ) => { return oldCounter + 1 } )
            // console.log('counter', counter)
        }, 1000 )
    }, [] )




    // function Timer() {
    //     const [count, setCount] = useState(0);
    //     useEffect(() => {
    //         setTimeout(() => {
    //             setCount((count) => count + 1);
    //         }
    //             , 1000);
    //     });
    //     return <h1>{count}</h1>;
    // }

    /*useParams, React Router kütüphanesinin bir parçası olan Hooks'tur. React Router kütüphanesi, bir web uygulamasında
    sayfalar arası geçişleri yönetmek için kullanılır.
    useParams, bir React Router kullanımında URL'den gelen parametreleri okumak ve kullanmak için kullanılır. 
    Örneğin, bir React Router kullanımında <Route path="/users/:id" /> şeklinde bir rota tanımlanmışsa, 
    useParams ile id parametresinin değeri okunabilir ve bu değere göre uygulama işlemleri yapılabilir. 
    Bu sayede URL'den gelen parametrelerin değerleri ile uygulama işlemleri birbirine bağlanabilir.*/
    return (

        <div className='home_container' >

            {/* <Button type="primary" onClick={() => nav("/authhome")}>Sign In</Button>
            <Button type="primary" onClick={() => nav("/login")}>Log In</Button> */}
            <Space className="searchBar">
                <form onSubmit={ onsubmit } style={ { marginRight: "100px" } } >
                    <div style={ { fontSize: 60, paddingLeft: "80px", color: "white", orientation: "center" } }>Find a Recipe</div>
                    <div style={ { borderRadius: 8, backgroundColor: 'white', marginLeft: "100px" } }>
                        <SearchOutlined className='search-icon' onClick={ onsubmit }
                            style={ { marginLeft: '3px', width: 25 } }
                        /><Input placeholder="Search by main ingredient..." onChange={ ( e ) => setTerm( e.target.value ) } style={ { borderRadius: 8, padding: 8, width: "480px", border: 'none' } } />
                        {/* <Button type="primary" icon={<SearchOutlined />} onClick={onsubmit} style={{ padding: 8 }} >Search</Button> */ }
                    </div>
                </form>
            </Space>
            {
                meals?.map( meal =>
                {
                    return <div>{ meal.strMeal }</div>
                } )
            }
            <Footer />
        </div>
    )
}

export default Home
