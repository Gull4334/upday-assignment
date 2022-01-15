import { useNavigate } from "react-router-dom";

const NewsComponent = () => {
    let navigate = useNavigate();


    const navigatePage = (path:string):void => {
        navigate('/' + path);
    }

    const deleteNews = ():void => {

    }

    return(
        <div className='news-row'>
                        <div className='news-title' onClick={() => navigatePage('news')}><h4>News From Component</h4></div>
                        <div className='news-action'>
                            <button onClick={() => navigatePage('news-add-edit')}>edit</button>
                            <button onClick={deleteNews}>delete</button>
                        </div>
                    </div>
    );

}

export default NewsComponent;