import React, { useState } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        name: 'Ariel'
    })

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            { props.children }
        </AuthContext.Provider>
    )
}

// hook customizado
export const useAuth = () => React.useContext(AuthContext)