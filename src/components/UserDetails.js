
const UserDetails = ({user}) => {
    return (
        <div>
            <h1>{user.name} -- {user.email}</h1>
        </div>
    );
};

export default UserDetails;