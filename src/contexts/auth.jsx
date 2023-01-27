import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSession } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const recoveredUser = localStorage.getItem('user'); 
    const token = localStorage.getItem('token');
    if (recoveredUser && token) {
      setLoggedUser(JSON.parse(recoveredUser));
      setName(JSON.parse(recoveredUser).name);
      setEmail(JSON.parse(recoveredUser).email);
      api.defaults.headers.Authorization = token;
      //api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);

  }, [email, name]);

  useEffect(() => {
    if (loggedUser != null) {
      localStorage.setItem('user', JSON.stringify(loggedUser));
    }
  }, [loggedUser]);

  const login = async (email, password) => {
    const response = await createSession(email, password);
    const token = response.headers.authorization
    const user = {
      id: response.data.dataUser.id,
			name: response.data.dataUser.name,
      email
    }
    localStorage.setItem('token', token);
    localStorage.setItem('business_id', user.defaultBusiness);
    api.defaults.Authorization = `Bearer ${token}`

    setLoggedUser(user);
    navigate('/');
    window.location.reload()
  }

   const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.Authorization = null;
    setLoggedUser(null);
    navigate('/login');
    window.location.reload()
  }

  return(
    <AuthContext.Provider 
      value={{authenticated: !!loggedUser, loggedUser, email, name, setLoggedUser}}
    >
      { children }
    </AuthContext.Provider>
  )
}
