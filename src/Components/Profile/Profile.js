import { useContext } from "react"
import { AuthContext } from "../../providers/auth"

const Profile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>Olá {user.name}</h1>
        </div>
    )
}

export default Profile 