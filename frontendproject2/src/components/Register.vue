<template>
    <h1 class="register-header" >CREATE AN ACCOUNT</h1>
    <p><input class="input-field-register" type="text" placeholder="Email" v-model="email" ></p>
    <p><input class="input-field-register" type="password" placeholder="Password" v-model="password" /></p>
    <p><button class="register-button" @click="register">Submit</button></p>
    <h1 class="or-text">OR</h1>
    <p><button class="google-button-register" @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from 'vue-router'

const email = ref("");
const password = ref("");
const router = useRouter()
const user = ref(null); 
const isDark = ref(false);

const register = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("Successfully registered!");

        user.value = auth.currentUser;

        console.log(auth.currentUser);

        const storedDarkMode = JSON.parse(localStorage.getItem(`darkmode-${user.value.uid}`));
        if (storedDarkMode !== null) {
          isDark.value = storedDarkMode;
        }
        
        router.push('/feed')
      })
      .catch((error) => {
        console.error(error.code);
        alert(error.message);
      });
      
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push('/feed')
    })
    .catch((error) => {
      console.error(error.code);
      alert(error.message);
    });

}
</script>

<style scoped>
.input-field-register {
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
  width: 300px;
  border: 2px solid #000000; 
}

.register-header {
  color: #f88f05; 
}

.or-text {
  color: #f88f05; 
  font-size: 20px;
}

.register-button {
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
  background-color: white;
  border: 2px solid #000000;
  width: 100px;
}

.register-button:hover {
  transform: scale(1.1);
}

.google-button-register {
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
  background-color: white;
  border: 2px solid #000000;
}

.google-button-register:hover {
  transform: scale(1.1);
}

</style>