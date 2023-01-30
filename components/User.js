
const User = ({ user }) => {
    return (
        <>
            <p>User Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </>
    )
}

export default User