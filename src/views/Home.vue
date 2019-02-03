<template>
  <div class="home">
    <SpeechRecognition msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SpeechRecognition from "@/components/SpeechRecognition.vue";
import Microphone from "@/components/Microphone.vue";

@Component({
  components: {
    SpeechRecognition,
    Microphone
  }
})
export default class Home extends Vue {}
</script>
