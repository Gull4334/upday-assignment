import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IBoard } from '../components/Common';
import NewsComponent from '../components/NewsComponent';
import News from './News';

const Home = () => {
    const navigate = useNavigate();

    const apiData: IBoard[] =
        [{
            id: 1,
            title: 'Sports',
            newsList: [
                { id: 1, title: 'Shoaib Malik opens a cafe in DHA' },
                { id: 2, title: 'Hafeez accounce a retirement from ODI' }]
        },
        {
            id: 2,
            title: 'Entertainment',
            newsList: [
                { id: 3, title: 'Science Meuseam catches attraction of Karachi' },
                { id: 4, title: 'This quiz will tell you how big a movie buff you are' }]
        },
        {
            id: 3,
            title: 'LifeStyle',
            newsList: [
                { id: 3, title: 'Zodiac alert: What’s in store for Capricorns in 2022?' },
                { id: 4, title: 'He lost fingers in an accident. Now it’s inspiring his art.' }]
        },
        {
            id: 4,
            title: 'Opinion',
            newsList: [
                { id: 3, title: 'Motherhood question: No, I’d rather not' },
                { id: 4, title: 'How women cadets benefit the army' }]
        }
        ];

    const [boards, setBoards] = useState(apiData);

    return (
        <div className='main-container'>
            <div className='home-header'>
                <div className='home-header-title'>News Boards</div>
                <div className='home-header-action'>
                    <button type='button' onClick={() => navigate('news-add-edit')}>+ Add New</button>
                </div>
            </div>

            <div className='boards-area'>

                {boards.map((board) => (

                    <div className='board-box'>
                        <div className='board-title'>
                            <div className='board-title-text'>{board.title}</div>
                            <div>
                                <button onClick={() => navigate('news-add-edit', { state: {news:null, board:board} })}>Add News</button>
                                <button type='button' onClick={() => navigate('news-add-edit')}>Delete</button>
                            </div>
                        </div>
                        <div className='board-news-area'>
                            {board.newsList.map((news) => (
                                <NewsComponent news={news} board={board} />
                            ))}
                        </div>
                    </div>

                ))}

            </div>




        </div>
    );
}

export default Home;