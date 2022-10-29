import { useAuth } from "../../providers/auth"

const Login = () => {
    const { setUser } = useAuth()

    const handleLogin = () => {
        const user = {name: 'Ariel'}
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login