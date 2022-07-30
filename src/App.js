
import './App.scss';
import Login from './components/Pages/Login';
import BaseLogin from './components/imports/BaseLogin';
import RegisterForm from './components/imports/RegisterForm';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginForm from './components/imports/LoginForm';
import Register from './components/Pages/Register';
import Home from './components/Pages/Home';
import AdminLogin from './components/Pages/AdminLogin';
import AdminHome from './components/Pages/AdminHome';
import AddUser from './components/Pages/AddUser';


function App() {
const user=localStorage.getItem("token");

  return (
<BrowserRouter>
<Routes>

  <Route path="/" element={<Home/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/signup" element={<Register/>}></Route>
<Route path="/admin" element={<AdminLogin/>}></Route>
<Route path="/admin/home" element={<AdminHome/>}></Route>
<Route path="/add-user" element={<AddUser></AddUser>}></Route>
</Routes>
</BrowserRouter> 
  
  );
}

export default App;
