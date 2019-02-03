<template>
  <v-container>
    <div id="scriptContainer"></div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

let SpeechRecognition: any = (window as any).webkitSpeechRecognition;
let recognition: any;
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.interimResults = true;
}
let transcript: string = "";
let processScript: string = "";

@Component
export default class HelloWorld extends Vue {
  @Prop()
  public isListening!: boolean;

  private transcripts: string[] = [];

  @Watch("isListening")
  public isListeningOn() {
    if (this.isListening) {
      alert("音声をテキストに変化させます");

      const constraint = { audio: true };
      navigator.getUserMedia(constraint, this.handleSuccess, this.handleError);
    }
  }

  public created() {}

  public handleSuccess() {
    const divContainer = (document as any).getElementById("scriptContainer");

    const intervalSpeechId = setInterval(() => {
      let p = (document as any).createElement("p");
      p.innerHTML = transcript;
      divContainer.appendChild(p);

      transcript = "";
    }, 5000);

    this.handleSpeech();
  }

  public handleError(error: any) {
    console.log(`The following error occured: ${error.name}`);
  }

  public handleSpeech() {
    const isListening = this.isListening;
    if (isListening) {
      recognition.start();
    }

    recognition.onresult = (event: any) => {
      processScript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join("");

      if (event.results[0].isFinal) {
        if (transcript === "") {
          transcript = transcript.concat("", processScript);
        } else {
          transcript = transcript.concat("。", processScript);
        }
        console.log("TRANSCRIPT", transcript);
      }
    };

    recognition.onend = function() {
      if (isListening) {
        recognition.start();
      }
    };
  }
}
</script>
