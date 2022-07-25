import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'

import { ContextHolder } from '@frontegg/rest-api';
import { AdminPortal, useAuth, useLoginWithRedirect } from "@frontegg/react";
import PokemonPage from './components/pages/PokemonPage'

function App() {

  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  // admin user

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          
          <PokemonPage/>
        </div>
      ): 
      (
        <div>
        <button 
        onClick={() => loginWithRedirect()}
        className="button">
        Click me to login
        </button>
        </div>
      ) }
    </div>
  );
}

export default App;