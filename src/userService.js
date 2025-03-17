import axios from 'axios';

export const fetchUsers = async () => {
  const resp = await axios.get('https://dummyjson.com/users');
  return resp.data.users;
};

export const fetchUserById = async (userId) => {
  const resp = await axios.get(`https://dummyjson.com/users/${userId}`);
  return resp.data;
};

export const fetchUserPosts = async (userId) => {
  const resp = await axios.get(`https://dummyjson.com/users/${userId}/posts`);
  return resp.data.posts;
};
