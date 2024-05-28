<template>
    <div class="tweet">
      <p>{{ tweetContent }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tweet',
    props: {
      tweetContent: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .tweet {
    background-color: #253341;
    color: white;
    padding: 15px;
    margin: 10px 0;
    border-radius: 10px;
  }
  </style>
  