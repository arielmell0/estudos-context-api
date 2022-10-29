import React from 'react';
import { useAuth } from '../../providers/auth';
import Login from '../Login';
import Profile from '../Profile';

const App = () => {
  const { user } = useAuth()
  console.log(user)

  return (
  <>
    <div>Olá mundo</div>
    <Profile />
    <Login />
  </>
  )
}

export default App;