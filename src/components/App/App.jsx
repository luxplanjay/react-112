import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import AppHeader from '../AppHeader/AppHeader';
import NotFoundPage from '../../pages/NotFoundPage';
import css from './App.module.css';

const UsersPage = lazy(() => import('../../pages/UsersPage'));
const UserDetailsPage = lazy(() => import('../../pages/UserDetailsPage'));
const HomePage = lazy(() => import('../../pages/HomePage'));
const UserPosts = lazy(() => import('../UserPosts/UserPosts'));
const UserTodos = lazy(() => import('../UserTodos/UserTodos'));

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />

      <Suspense
        fallback={
          <p>
            <b>Loading page...</b>
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<UsersPage />} />
          <Route path="/dashboard/:userId" element={<UserDetailsPage />}>
            <Route path="posts" element={<UserPosts />} />
            <Route path="todos" element={<UserTodos />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
