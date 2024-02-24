import 'react-router-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy } from "react"
import AdminLayout from './pages/admin/adminlayout.jsx';
import UserLayout from './pages/user/userlayout';
import LazyLayout from './components/LazyLayout';
const LazyLogin =lazy(()=>import("./pages/auth/Login.jsx"))
const LazyRegister = lazy(()=>import("./pages/auth/Register"))
// import './App.css'; // Import global styles
const LazyHome = lazy(()=> import("./pages/user/homepage.jsx"))
const LazyDashboard = lazy(()=> import("./pages/admin/dashboard.jsx"))
const LazyProfile = lazy(()=> import("./pages/user/profile.jsx"))
const LazyContact = lazy(()=> import("./pages/user/contact.jsx"))
const LazyProducts = lazy(()=> import("./pages/user/products.jsx"))
const LazyAbout = lazy(()=> import("./pages/user/about.jsx"))

// import { Dashboard } from './pages/admin/dashboard.jsx';


const UserRoutes = () => {
  return(
    <UserLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
      <Route path="/profile" element={<LazyLayout component={LazyProfile}/>}/>
      <Route path="/contact" element={<LazyLayout component={LazyContact}/>}/>
      <Route path="/products" element={<LazyLayout component={LazyProducts}/>}/>
      <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
      
      
    </Routes>
    </UserLayout>
  )
}

const AdminRoutes = () => {
  return(
    <AdminLayout>
    <Routes>
      <Route path="/dashboard" element={<LazyLayout component={LazyDashboard}/>}/>
    </Routes>
    </AdminLayout>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/giftvibes/login"/>}/>
      <Route path="/giftvibes/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/giftvibes/register" element={<LazyLayout component={LazyRegister}/>}/>
      <Route path="/giftvibes/user/*" element={<UserRoutes/>}/>
      <Route path="/giftvibes/admin/*" element={<AdminRoutes/>}/>

      {/* <Route path="/giftvibes/admin" element={<Dashboard/>}/> */}
    </Routes>
  );
};

export default App;
