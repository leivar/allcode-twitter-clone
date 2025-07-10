import axios from "axios";

const api = {
  getCurrentUser: async () => {
    const { data } = await axios.get('/api/current-user');
    return data;
  },
  getUser: async (userId: string) => {
    const { data } = await axios.get('/api/user/' + userId);
    return data;
  },
  followUser: async (userId: string) => {
    const { data } = await axios.post('/api/follow-user/' + userId);
    return data;
  },
  createPost: async (postData: {content: string }) => {
    const { data } = await axios.post('/api/post', postData);
    return data;
  },
  getPosts: async () => {
    const { data } = await axios.get('/api/feed');
    return data;
  },
  getUserPosts: async (userId: string) => {
    const { data } = await axios.get('/api/user-posts/' + userId);
    return data;
  },
  getPost: async (postId: string ) => {
    const { data } = await axios.get('/api/post/' + postId);
    return data;
  },
  likePost: async (postId: string ) => {
    const { data } = await axios.post('/api/like/' + postId);
    return data;
  },
  replyPost: async (postId: string, content: { content: string }) => {
    const { data } = await axios.post('/api/reply/' + postId, content);
    return data;
  }
};

export default api;