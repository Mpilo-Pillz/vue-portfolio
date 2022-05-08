<template>
  <v-app>
    <v-main>
      <Header @onClick="toggle" />
      <NavigationDrawer  :isOpen="isOpen"/>
      <HelloWorld />

    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import Header from '@/components/shared/Header.vue'
  import NavigationDrawer from '@/components/shared/NavigationDrawer.vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import { ref } from 'vue'

  let isOpen = ref<boolean>(false)
  const toggle = () => isOpen.value = !isOpen.value
</script>
