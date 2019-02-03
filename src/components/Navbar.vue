<template>
  <v-toolbar app color="primary">
    <v-flex>
      <v-img :src="require('../assets/logo.png')" max-width="40"></v-img>
    </v-flex>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  height: 40px;
}
</style>
