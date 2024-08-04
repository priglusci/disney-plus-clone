import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Detail from './Components/Detail';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Login />}>
          </Route>
          <Route path='/home' element={<Home />}>
          </Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
