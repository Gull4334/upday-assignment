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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="home/news-add-edit" element={<NewsAddEdit />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
