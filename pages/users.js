
const users = ({ users }) => {
    return <>
        <h1>List of users</h1>
        {
            users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>User Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                )
            })
        }
    </>
}

export default users

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()
    console.log(data);

    return {
        props: {
            users: data,
        }
    }
}