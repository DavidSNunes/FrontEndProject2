import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    tweets: [],
    users: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTweets(state, tweets) {
      state.tweets = tweets;
    },
    setUsers(state, users) {
      state.users = users;
    },
    addTweet(state, tweet) {
      state.tweets.push(tweet);
    },
    addUser(state, user) {
      state.users.push(user);
    },
    likeTweet(state, tweetId) {
      const tweet = state.tweets.find(t => t.id === tweetId);
      if (tweet) {
        tweet.likes++;
      }
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      // Adicione lógica de autenticação aqui
    },
    async register({ commit }, { username, email, password }) {
      // Adicione lógica de registro aqui
    },
    async fetchTweets({ commit }) {
      // Adicione lógica para buscar tweets aqui
    },
    async fetchUsers({ commit }) {
      // Adicione lógica para buscar usuários aqui
    },
  },
  getters: {
    getUser: state => state.user,
    getTweets: state => state.tweets,
    getUsers: state => state.users,
  },
});
