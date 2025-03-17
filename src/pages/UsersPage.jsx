import { useEffect, useState } from 'react';
import UserList from '../components/UserList/UserList';
import { fetchUsers } from '../userService';

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getUsers() {
            try {
                setIsLoading(true);
                setError(false);
                const data = await fetchUsers();
                setUsers(data);
            } catch {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getUsers();
    }, []);

    return (
        <>
            {isLoading && <b>Loading users...</b>}
            {error && <b>Whoops there was an error, plz reload the page...</b>}
            {users.length > 0 && <UserList users={users} />}
        </>
    );
}
