import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeView from '../views/HomeView.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Profile from '../views/Profile.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import UsersManagement from '../views/UsersManagement.vue';
import TweetsManagement from '../views/TweetsManagement.vue';

const routes = [
  {
    path: '/', name: 'home', component: HomeView },
  {
    path: '/about', name: 'about', component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/profile/:username', name: 'Profile', component: Profile },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/admin/users', name: 'UsersManagement', component: UsersManagement },
  { path: '/admin/tweets', name: 'TweetsManagement', component: TweetsManagement },
];



const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
