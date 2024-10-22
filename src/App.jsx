import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import { Home } from './components/Home';
import { PublicPage } from './components/PublicPage';
import { Dashboard } from './components/Dashboard';
import { ProtectedPage } from './components/ProtectedPage';
import { Login } from './components/Login';


const fakeAuth={
  isAuthenticated:false,
  login(cb){
    this.isAuthenticated=true;
    cb();
  },
  logout(cb){
    this.isAuthenticated=false;
    cb();
  }
}

const PrivateRoute=({children})=>{
  return fakeAuth.isAuthenticated?children:<Navigate to="/login" />
}

const ProtectedRoute=({children})=>{
  const userHasPermission=true;
  return userHasPermission?children:<Navigate to="/" />
}


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/public' element={<PublicPage />} />

        <Route
                path='/dashboard'
                element={
                  <PrivateRoute>
                    <Dashboard fakeAuth={fakeAuth}/>
                  </PrivateRoute>
                }
        />

        <Route
                path='/protected'
                element={
                  <ProtectedRoute>
                    <ProtectedPage/>
                  </ProtectedRoute>
                }
        />

        <Route
                path='/login'
                element={<Login fakeAuth={fakeAuth} />}
        />
      </Routes>
    </Router>
  )
}

export default App
