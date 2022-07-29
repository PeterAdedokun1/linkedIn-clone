import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Container';
import Container from './components/Container';
import { useEffect } from 'react';
function App(props) {


  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container/>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App

//17:09hrs