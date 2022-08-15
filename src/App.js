//import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import {Route, Routes} from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage.component';


const Hat =()=>{
  return ( <h1>this is hates page</h1>)
}
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<HomePage />} exact={true} ></Route>
        <Route path='/shop' element={<ShopPage/>} ></Route>
      </Routes>
   
    </div>
  );
}

export default App;
