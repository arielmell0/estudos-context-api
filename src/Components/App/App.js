import React from 'react';
import { AuthContext } from '../../providers/auth';
import Profile from '../Profile';

const App = () => {
  const { user, setUser } = React.useContext(AuthContext)
  console.log(user)

  return (
  <>
    <div>Olá mundo</div>
    <input type="text" onChange={(e) => setUser({ name: e.target.value })} />
    <Profile />
  </>
  )
}

export default App;