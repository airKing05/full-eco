//import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import {Route, Routes} from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage.component';
import Navbar from './components/header/Navbar.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.component';


const Hat =()=>{
  return ( <h1>this is hates page</h1>)
}
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} exact={true} ></Route>
        <Route path='/shop' element={<ShopPage/>} ></Route>
        <Route path='/sign-in' element={<SignInAndSignUp />} ></Route>
      </Routes>
   
    </div>
  );
}

export default App;
