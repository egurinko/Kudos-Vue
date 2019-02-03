<template>
  <v-app>
    <Navbar></Navbar>
    <v-card>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

      <v-card-title primary-title>
        <div>
          <SpeechRecognition :isListening="isListening"/>
        </div>
      </v-card-title>

      <v-card-actions>
        <Microphone :isListening="isListening" @clicked="handleMicClick"/>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import SpeechRecognition from "@/components/SpeechRecognition.vue";
import Microphone from "@/components/Microphone.vue";

@Component({
  components: {
    SpeechRecognition,
    Navbar,
    Microphone
  }
})
export default class App extends Vue {
  public isListening: boolean = false;

  public handleMicClick() {
    this.isListening = !this.isListening;
    console.log(this.isListening);
  }
}
</script>
