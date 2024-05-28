<template>
  <div class="home">
    <Sidebar />
    <div class="content">
      <Header />
      <Feed />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
import Feed from '../components/Feed.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    Header,
    Feed
  }
}
</script>

<style scoped>
.home {
  display: flex;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
