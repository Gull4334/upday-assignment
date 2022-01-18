import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { bindActionCreators } from "redux";
import { IBoard, INews } from '../components/Common';
import { actionCreator, State } from "../state";

type props = {
    news:INews,
    board:IBoard,
    update:Function
}

const NewsComponent: React.FC<props> = ({news, board, update}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myReduxState = useSelector((state:State) => state.user);
    const boardsList:IBoard[] = myReduxState.boards;
    const { DeleteNews } = bindActionCreators(actionCreator, dispatch);

    const deleteNews = (newsId:number, boardId:number) => {
        let filteredBoard:IBoard[] = 
        boardsList.filter(board => board.id === boardId);
        filteredBoard[0].newsList = filteredBoard[0].newsList.filter(newss => newss.id !== newsId);
        DeleteNews({...myReduxState, boards:boardsList});
        update();
    }
    
    return (
        <div className='news-row' key={'news-'+news.id}>
            <div className='news-title' onClick={() => navigate('news')}>
                <p>{news.title}</p>
                </div>
            <div className='news-action'>
                <button className='button edit-button' onClick={() => navigate('news-add-edit', { state: {news:news, board:board, type: "news"} })}>edit</button>
                <button className='button delete-button' onClick={() => deleteNews(news.id, board.id)}>Delete</button>
            </div>
        </div>
    );

}

export default NewsComponent;