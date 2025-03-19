import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router';
import { fetchUserById } from '../userService';
import UserInfo from '../components/UserInfo/UserInfo';

export default function UserDetailsPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchUserById(userId);
        setUser(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, [userId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>

      {isLoading && <b>Loading...</b>}
      {error && <b>Error...</b>}
      {user && <UserInfo user={user} />}

      <ul>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="todos">Todos</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading posts or todos</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
