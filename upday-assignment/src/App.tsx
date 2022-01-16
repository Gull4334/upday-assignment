import './Custom.css';
import Home from './screens/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import News from './screens/News';
import Login from './screens/Login';
import NewsAddEdit from './screens/NewsAddEdit';
import { IBoard, INews } from './components/Common';

type propsss = {
  news:INews,
  board:IBoard
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news-add-edit" element={<NewsAddEdit />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
