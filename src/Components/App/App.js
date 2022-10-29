import React from 'react';
import { useAuth } from '../../providers/auth';
import Login from '../Login';
import Profile from '../Profile';

const App = () => {
  const { user, setUser } = useAuth()
  console.log(user)

  return (
  <>
    <div>Olá mundo</div>
    <input type="text" onChange={(e) => setUser({ name: e.target.value })} />
    <Profile />
    <Login />
  </>
  )
}

export default App;