<template>
    <h1 class="login-header">LOGIN</h1>
    <p><input class="input-field-login" type="text" placeholder="Email" v-model="email" ></p>
    <p><input class="input-field-login" type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button class="sign-in-button" @click="signIn">Submit</button></p>
    <h1 class="or-text">OR</h1>
    <p><button class="google-button-login" @click="signInWithGoogle">Sign In With Google</button></p>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
  import { useRouter } from 'vue-router'
  
  const email = ref("");
  const password = ref("");
  const errMsg = ref()
  const router = useRouter()
  const user = ref(null); 
  const isDark = ref(false);
  
  const signIn = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("Successfully signed in!");
  
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
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email!';
            break;
          case 'auth/user-not-found':
            errMsg.value = 'That email is not associated with an account!';
            break;
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password!';
            break;
          default:
            errMsg.value = 'Email or password is incorrect!';
            break;
        }
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
  .input-field-login {
    padding: 10px;
    font-size: 16px;
    border-radius: 20px;
    width: 300px;
    border: 2px solid #000000; 
  }
  
  .login-header {
    color: #f88f05; 
  }
  
  .or-text {
    color: #f88f05; 
    font-size: 20px;
  }
  
  .sign-in-button {
    padding: 10px;
    font-size: 16px;
    border-radius: 20px;
    background-color: white;
    border: 2px solid #000000;
    width: 100px;
  }
  
  .sign-in-button:hover {
    transform: scale(1.1);
  }
  
  .google-button-login {
    padding: 10px;
    font-size: 16px;
    border-radius: 20px;
    background-color: white;
    border: 2px solid #000000;
  }
  
  .google-button-login:hover {
    transform: scale(1.1);
  }
  </style>