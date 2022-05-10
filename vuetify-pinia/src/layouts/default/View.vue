<template>
  <v-main>
    <Header @onClick="toggle" />
    <v-layout>
      <v-navigation-drawer
        v-model="isOpen"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="Mpilo Dlamini"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      
        <router-view />
      
    </v-layout>

   
  </v-main>
</template>

<script lang="ts" setup>
import Header from '@/components/shared/Header.vue'
import { ref } from 'vue'
 let isOpen = ref<boolean>(false)

  const toggle = () => {
    console.log("Clicked");
    console.log(isOpen);
    
    isOpen.value = !isOpen.value
    }
</script>
