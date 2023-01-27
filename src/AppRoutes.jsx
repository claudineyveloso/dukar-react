import React, { useContext  } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,

} from 'react-router-dom';

//import Headers from "./components/ui/headers"
import Login from './pages/Login'
import Error from './pages/Error'
import { AuthProvider, AuthContext  } from './contexts/auth';

const AppRoutes = () => {
  const Private = ({ children  }) => {
    console.log('Claudiney Veloso')
    const  { loading  } = useContext(AuthContext);
    if (loading){
      return <div className='loading'>Carregando...</div>
    }

    if(localStorage.getItem('user') == null && localStorage.removeItem('token') == null){
      return <Navigate to='/login' />;
    }

    return children;
  }
  
  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            exact path='/login'
            element={
              <Login />
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes;
