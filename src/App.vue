<template>
  <v-app>
    <Navbar></Navbar>
    <v-card class="recognition-container" color="secondary">
      <v-img src="https://picsum.photos/500/750/?random" aspect-ratio="1.5"></v-img>

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

<style>
#app,
body {
  background-color: #fefbe8;
}

p {
  color: #42675a;
}

.recognition-container {
  background-color: #37373f;
  margin: 104px 40px 40px 40px;
}
</style>
