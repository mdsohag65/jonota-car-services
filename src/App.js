import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MangeServices from './Pages/ManageServices/MangeServices';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='checkout' element={<RequireAuth>
          <CheckOut />
        </RequireAuth>}></Route>
        <Route path='addservice' element={<RequireAuth>
          <AddService />
        </RequireAuth>}></Route>
        <Route path='manage' element={<RequireAuth>
          <MangeServices />
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
