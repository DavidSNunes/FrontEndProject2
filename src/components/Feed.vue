<template>
    <div class="feed">
      <Tweet v-for="tweet in tweets" :key="tweet.id" :tweetContent="tweet.content" />
    </div>
  </template>
  
  <script>
  import Tweet from './Tweet.vue';
  
  export default {
    name: 'Feed',
    components: {
      Tweet
    },
    data() {
      return {
        tweets: [
          { id: 1, content: 'Reasons why age is not a barrier in marriage' },
          { id: 2, content: 'Top 10 Sasuke Uchiha "AURA" moments' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .feed {
    flex: 1;
    padding: 20px;
    background-color: #192734;
    height: 100vh;
    overflow-y: scroll;
  }
  </style>
  