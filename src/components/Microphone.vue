<template>
  <v-flex align-self-center="true">
    <v-btn v-if="!isListening" fab small @click="handleClick" color="accent">
      <v-icon medium color="black">mdi-microphone</v-icon>
    </v-btn>
    <v-btn v-if="isListening" fab small @click="handleClick" color="accent">
      <v-icon medium color="black">mdi-microphone-off</v-icon>
    </v-btn>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class Microphone extends Vue {
  @Prop()
  public isListening!: boolean;

  @Emit()
  public clicked() {}

  public handleClick() {
    this.clicked();
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
</style>
