<template>

    <div>
    
      <label class="switch">
      <input type="checkbox" v-model="isDark" @click="toggleDarkMode">
      <span class="slider round"></span>
      <span class="symbol sun">&#9728;</span> 
      <span class="symbol moon">&#9790;</span>
    </label>
    
    </div>
    
    </template>
    
    <script setup>
   
    import { ref, watch, onMounted, defineExpose } from 'vue'
    import { inject } from 'vue'
    
    const user = inject('user');
  
    const isDark = ref(false);
  
    const applyDarkMode = () => {
      console.log('Dark mode:', isDark.value)
      if (isDark.value) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      if (user.value) {
        localStorage.setItem(`darkmode-${user.value.uid}`, JSON.stringify(isDark.value));
      }
    };
  
    const emit = defineEmits(['dark-mode-changed']);
  
    watch(isDark, (newValue, _, onInvalidate) => {
      applyDarkMode();
    
      onInvalidate(() => {
        emit('dark-mode-changed', newValue);
      });
    });
  
    watch(user, (newUser) => {
      if (newUser) {
        const storedDarkMode = JSON.parse(localStorage.getItem(`darkmode-${newUser.uid}`));
        if (storedDarkMode !== null) {
          isDark.value = storedDarkMode;
        }
        applyDarkMode();
      }
    });
  
    onMounted(() => {
      if (user.value) {
        const storedDarkMode = JSON.parse(localStorage.getItem(`darkmode-${user.value.uid}`));
        if (storedDarkMode !== null) {
          isDark.value = storedDarkMode;
        }
      }
      applyDarkMode();
    });
    defineExpose({
      isDark
    });
    
    
    </script>
    
  <style>
  .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      
  }
    
    
  .switch input[type="checkbox"] {
    opacity: 0;
    width: 60px;
    height: 34px;
  }
    
    
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f88f05;
    -webkit-transition: .4s;
    transition: .4s;
  }
    
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: rgb(0, 0, 0);
    -webkit-transition: .4s;
    transition: .4s;
  }
    
  input:checked + .slider {
    background-color: #147deb;
  }
    
  input:focus + .slider {
    box-shadow: 0 0 1px #147deb;
  }
    
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
    
  
  .slider.round {
    border-radius: 34px;
  }
    
  .slider.round:before {
    border-radius: 50%;
  }
    
  body {
    background-color: rgb(228, 228, 228);
    color: rgb(0, 0, 0);
  }
  
  body.dark {
    background-color: rgb(57, 57, 57) !important;
    color: white !important;
  }
  
  body.dark, .text.dark {
    color: white !important;
  }
  
  .dark-mode {
    background-color: rgb(57, 57, 57);
    color: white;
  }
  
  .light-mode {
    background-color: rgb(228, 228, 228);
    color: black;
  }
  
  .symbol {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: rgb(0, 0, 0);
  }
  
  .sun {
    left: 15%;
  }
  
  .moon {
    right: 15%;
    
  }
  
  
    
  </style>