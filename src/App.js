import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Schange from './Components/Schange';
import Schangeclass from './Components/Schangeclass';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Forms from './Components/Forms';
import Useref from './Components/Useref';
import Prasad from './Components/Prasad';





function App() {
  return (
    
    
    <div className="App">
      
      <Forms/>
      <Useref/>
      
      
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<About/>}></Route>
        <Route  path='/prasad' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
      

      
      {/* <Home name="it job"/>
      <About name="it jobs employees"/>
      <About interest="i want to become a CEO of MNC companys"/> */}
      <Schange/>
      <Schangeclass/>
      <Prasad/>
      

    </div>
  );
}

export default App;
