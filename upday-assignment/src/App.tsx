import './Custom.css';
import Home from './screens/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import News from './screens/News';
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
