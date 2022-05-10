<template>
    <v-app-bar
        >
          <template v-slot:prepend>
            <v-app-bar-nav-icon
            @click.stop="$emit('onClick')"
            ></v-app-bar-nav-icon>
          </template>
  
          <v-app-bar-title>Utility Management</v-app-bar-title>
  
          <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-app-bar>
</template>
<script setup lang="ts">

</script>