import logo from './logo.svg';
import './App.css';
import Category from './Components/Category';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import {Provider} from 'react-redux'
import { store } from './Components/Redux/Store';

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Provider store={store}>
       <Navbar/>
       <AllRoutes/>
       </Provider>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
