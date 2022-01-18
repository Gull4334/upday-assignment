import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { bindActionCreators } from 'redux';
import { IBoard } from '../components/Common';
import NewsComponent from '../components/NewsComponent';
import { actionCreator, State } from '../state';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myReduxState = useSelector((state:State) => state.user);
    const boardsList:IBoard[] = myReduxState.boards;
    const { DeleteNews } = bindActionCreators(actionCreator, dispatch);
   
    const [boards, setBoards] = useState(myReduxState.boards);

    const deleteBoard = (boardId:number) => {
        debugger;
        let filteredBoard:IBoard[] = boardsList.filter(board => board.id !== boardId);
        DeleteNews({...myReduxState, boards:filteredBoard});
        setBoards(filteredBoard);
        navigate(`/home`);
    }

    const updateRedux = () => {
        setBoards(boards);
    }

    return (
        
        <>
            <div className='base-color home-header'>
                <div className='home-header-title'>
                    <h3>News Boards</h3>
                </div>
                <div className='home-header-action'>
                    <button className='button add-button' type='button' onClick={() => navigate('news-add-edit')}>Add Board</button>
                </div>
            </div>
            <div className='main-container'>
                <div className='boards-area'>

                    {boards.map((board, boardIndex) => (

                        <div className='base-color board-box' key={'board-' + boardIndex}>
                            <div className='board-title'>
                                <div className='board-title-text'>{board.title}</div>
                                <div>
                                    <button className='button add-button' onClick={() => navigate('news-add-edit', { state: { news: null, board: board, type: "news" } })}>Add News</button>
                                    <button className='button delete-button' type='button' onClick={() => deleteBoard(board.id)}>Delete</button>
                                </div>
                            </div>
                            <div className='board-news-area'>
                                {board.newsList.map((news) => (
                                    <NewsComponent news={news} board={board} update={updateRedux} />
                                ))}
                            </div>
                        </div>

                    ))}

                </div>




            </div>
        </>
    );
}

export default Home;