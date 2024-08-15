
<template>
  <v-card>
    <v-layout>
      <v-app-bar color="green-darken-1" class="mb-1">
        <v-icon>mdi-account</v-icon> <!-- Directly use the icon name -->
        <v-toolbar-title class="font-weight-bold">Jobs App</v-toolbar-title>
      <v-btn class="text-none" text to="/">Home</v-btn>
      <v-btn class="text-none" text to="/jobs">Jobs</v-btn>
      <v-btn class="text-none" text to="/addjob">Add Job</v-btn>
      </v-app-bar>
      <v-main class="mt-1">
        <router-view/>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
// import AppBody from './components/body.vue'
export default {
  name: 'App',
  setup(){
    
  }
}
</script>
