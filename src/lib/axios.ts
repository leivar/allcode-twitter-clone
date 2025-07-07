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
  }
};

export default api;