import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchUserPosts } from '../../userService';
import styles from './UserPosts.module.css';

export default function UserPosts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const data = await fetchUserPosts(userId);
      setPosts(data);
    }

    getPosts();
  }, [userId]);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>User Posts</h3>
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.body}>{post.body}</p>
          </div>
        ))}
    </div>
  );
}
