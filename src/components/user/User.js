
const User = ({user}) => {
    return (
        <div>
            <h1>{user.id} --- {user.name}</h1>
            <p>{user.email}</p>

        </div>
    );
};

export default User;