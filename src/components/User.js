

const User = ({user,showUser}) => {
    return (
        <div>
            <h1>{user.id} -- {user.name}</h1>
            <button onClick={() => showUser(user)}>Click</button>
        </div>
    );
};

export default User;