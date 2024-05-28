<template>
    <div class="sidebar">
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Notifications</li>
        <li>Messages</li>
        <li>Profile</li>
        <li>More</li>
      </ul>
      <button>Postar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #15202B;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar ul li {
    padding: 10px 0;
  }
  
  .sidebar button {
    margin-top: auto;
    background-color: #1DA1F2;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  </style>