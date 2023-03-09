import logo from './logo.svg';
import './App.css';
import Category from './Components/Category';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Navbar/>
       <AllRoutes/>
       </BrowserRouter>
    </div>
  );
}

export default App;
