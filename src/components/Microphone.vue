<template>
  <v-layout justify-space-around>
    <v-flex xs12 sm3>
      <v-btn fab small @click="handleClick">
        <v-icon medium color="blue darken-2">mdi-microphone</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
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
