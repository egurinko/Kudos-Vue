import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify, {
  iconfont: "mdi",
  theme: {
    primary: "#EBE9D7",
    secondary: "#FEFBE8",
    accent: "#1EB980",
    error: "#b71c1c",
    text: "#42675A"
  }
});
