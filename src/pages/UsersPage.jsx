import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useDebounce } from 'use-debounce';
import UserList from '../components/UserList/UserList';
import { fetchUsers } from '../userService';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchText = (event) => {
    const nextParams = new URLSearchParams(searchParams);

    if (event.target.value !== '') {
      nextParams.set('query', event.target.value);
    } else {
      nextParams.delete('query');
    }

    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchUsers(debouncedQuery);
        setUsers(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, [debouncedQuery]);

  return (
    <>
      <input type="text" value={query} onChange={changeSearchText} />
      {isLoading && <b>Loading users...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}
      {users.length > 0 && <UserList users={users} />}
    </>
  );
}
