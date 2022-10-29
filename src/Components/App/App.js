import React from 'react';
import { AuthContext } from '../../providers/auth';

const App = () => {
  const { user, setUser } = React.useContext(AuthContext)
  console.log(user)

  return (
  <>
    <div>Olá mundo</div>
    <input type="text" onChange={(e) => setUser({ name: e.target.value })} />
  </>
  )
}

export default App;