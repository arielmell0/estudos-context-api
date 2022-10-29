import { useAuth } from "../../providers/auth"

const Profile = () => {
    const { user } = useAuth()

    return (
        <div>
            <h1>Olá {user.name}</h1>
        </div>
    )
}

export default Profile 