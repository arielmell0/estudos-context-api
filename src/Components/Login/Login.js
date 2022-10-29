import { useState } from "react"
import { useAuth } from "../../providers/auth"

const Login = () => {
    const [input, setInput] = useState({
        name: ''
    })
    const { setUser } = useAuth()

    const handleLogin = () => {
        localStorage.setItem('user', JSON.stringify(input))
        setUser(input)
    }

    return (
        <div>
            <input type="text" onChange={(e) => setInput({ name: e.target.value })} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login