import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoutes from './routes/PrivateRoutes';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="h-screen">

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />

          <Route path='/login' element={<Login/>} />
          
          <Route element={<PrivateRoutes/>}>
            <Route path='/dashboard' element={<AdminDashboard/>} />
          </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
