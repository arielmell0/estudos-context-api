import React from 'react';
import { AuthContext } from '../../providers/auth';

const App = () => {
  const { user } = React.useContext(AuthContext)
  console.log(user)

  return (
  <>
    <div style={{ color: user.color }}>Olá mundo</div>
  </>
  )
}

export default App;