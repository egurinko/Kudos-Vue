<template>
  <v-toolbar app>
    <v-flex>
      <v-img :src="require('../assets/logo.svg')" height="30" width="30"></v-img>
    </v-flex>
    <v-spacer></v-spacer>
    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">Latest Release</span>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>
