import { type } from "os";
import { useNavigate } from "react-router";
import { IBoard, INews } from '../components/Common';

type props = {
    news:INews,
    board:IBoard
}

const NewsComponent: React.FC<props> = ({news, board}) => {
    const navigate = useNavigate();
    
    return (
        <div className='news-row'>
            <div className='news-title' onClick={() => navigate('news')}><h4>{news.title}</h4></div>
            <div className='news-action'>
                <button onClick={() => navigate('news-add-edit', { state: {news:news, board:board} })}>edit</button>
            </div>
        </div>
    );

}

export default NewsComponent;