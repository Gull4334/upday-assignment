import React from 'react';
import { useNavigate } from "react-router-dom";
import NewsComponent from '../components/NewsComponent';

const Home = () => {
    let navigate = useNavigate();


    const navigatePage = (path:string):void => {
        navigate('/' + path);
    }

    const deleteNews = ():void => {

    }

    return (
        <div className='main-container'>
            <div className='home-header'>
                <div className='home-header-title'>News Boards</div>
                <div className='home-header-action'>
                    <button type='button'>+ Add New</button>
                </div>
            </div>
            <div className='board-box'>
                <div className='board-title'>Sports</div>
                <div className='board-news-area'>
                    <NewsComponent />
                </div>
            </div>
            <div className='board-box'>
                <div className='board-title'>Sports</div>
                <div className='board-news-area'>
                    <NewsComponent />
                </div>
            </div>
            <div className='board-box'>
                <div className='board-title'>Sports</div>
                <div className='board-news-area'>
                    <NewsComponent />
                </div>
            </div>
            <div className='board-box'>
                <div className='board-title'>Sports</div>
                <div className='board-news-area'>
                    <NewsComponent />
                </div>
            </div>
        </div>
    );
}

export default Home;