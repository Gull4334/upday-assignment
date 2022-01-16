import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IBoard, INews } from '../components/Common';

type props = {
    news: INews,
    board: IBoard
}

const NewsAddEdit = () => {

    const location = useLocation();
    
    let idTemp = 0, titleTemp = '', boardTitleTemp = '';

    if (location.state) {
        const { news, board } = location.state as props;
        idTemp = news ? news.id : idTemp;
        titleTemp = news ? news.title : titleTemp;
        boardTitleTemp = board.title
    }


    const [newsObject, setNewsObject] = useState({ id: idTemp, title: titleTemp, boardTitle: boardTitleTemp });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewsObject({
            ...newsObject,
            title: e.target.value
        }
        );

    }
    return (
        <div>
            {idTemp ?
                <>
                    <h1>News Edit News</h1>
                    <h1>{newsObject.boardTitle}</h1>
                    <div>
                        <input type='text' onChange={handleChange} value={newsObject.title} />
                        <button>Update</button>
                    </div>
                </>
                :
                <><h1>News Add News</h1>
                    <h1>{newsObject.boardTitle}</h1>
                    <div>
                        <input type='text' onChange={handleChange} value={newsObject.title} />
                        <button>Save</button>
                    </div>
                </>
            }
        </div>
    );
}

export default NewsAddEdit;