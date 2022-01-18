import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IBoard, INews } from '../components/Common';
import { actionCreator, State } from '../state';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

type props = {
    news: INews,
    board: IBoard
}

const NewsAddEdit = () => {
    
    const location = useLocation();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const myReduxState = useSelector((state: State) => state.user);
    const boardsList: IBoard[] = myReduxState.boards;
    const { UpdateNews, AddNews } = bindActionCreators(actionCreator, dispatch);

    let idTemp = 0, titleTemp = '', boardTitleTemp = '', boardIdTemp = 0, filteredNews: INews[], filteredBoard: IBoard;

    if (location.state) {
        const { news, board } = location.state as props;
        idTemp = news ? news.id : idTemp;
        titleTemp = news ? news.title : titleTemp;
        boardTitleTemp = board ? board.title : "";
        boardIdTemp = board ? board.id : 0;
    }
    const [newsObject, setNewsObject] = useState({ id: idTemp, title: titleTemp, boardTitle: boardTitleTemp });

    const updateNews = () => {
        filteredNews = boardsList.filter(board => board.id === boardIdTemp)[0].newsList.filter(news => news.id === idTemp && news.title === titleTemp);
        filteredNews[0].title = newsObject.title;
        UpdateNews(myReduxState);
        navigate(`/home`);
    }

    const addNewsObject = () => {
        filteredNews = boardsList.filter(board => board.id === boardIdTemp)[0].newsList;
        filteredNews.push({ id: parseInt(Math.random().toString().slice(-7)), title: newsObject.title });
        AddNews(myReduxState);
        navigate(`/home`);
    }

    const addNewBoard = () => {
        boardsList.push(
            {
                id: parseInt(Math.random().toString().slice(-7)),
                title: newsObject.title,
                newsList: []
            }
        )
        AddNews(myReduxState);
        navigate(`/home`);
    }


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewsObject({
            ...newsObject,
            title: e.target.value
        }
        );

    }


    return (
        <div className='main-container'>
            <div className='base-color login-container'>
                {idTemp ?
                    <>
                        <h1>Update News of {newsObject.boardTitle}</h1>
                        <div className='box'>
                        <textarea cols={60} rows={10} value={newsObject.title} onChange={(e) => handleChange(e)}></textarea>
                            
                            </div>
                        <div className='box'>
                            <button className='button add-button' onClick={updateNews}>Update</button>
                            <button className='button cancel-button' onClick={() => navigate(`/home`)}>Cancel</button>
                        
                        </div>
                    </>
                    :
                    location.state ?
                        <><h1>Add News of {newsObject.boardTitle}</h1>
                            <div className='box'>
                            <textarea cols={60} rows={10} value={newsObject.title} onChange={(e) => handleChange(e)}></textarea>
                                
                                </div><div className='box'>
                                <button className='button add-button' onClick={addNewsObject}>Save</button>
                                <button className='button cancel-button' onClick={() => navigate(`/home`)}>Cancel</button>
                            
                            </div>
                        </>
                        :
                        <><h1>Add Board</h1>
                            <h1>{newsObject.boardTitle}</h1>
                            <div className='box'>                                
                                <textarea cols={60} rows={10} value={newsObject.title} onChange={(e) => handleChange(e)}></textarea>
                                </div><div className='box'>
                                <button className='button add-button' onClick={addNewBoard}>Save</button>
                                <button className='button cancel-button' onClick={() => navigate(`/home`)}>Cancel</button>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}

export default NewsAddEdit;