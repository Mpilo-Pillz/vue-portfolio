<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="props.isOpen"
          temporary
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/man/78.jpg"
            title="Mpilo Dlamini"
          ></v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px">
          <div class="d-flex justify-center align-center h-100">
            <v-btn
              color="primary"
            >
              Toggle
            </v-btn>
          </div>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    isOpen: Boolean
})
</script>