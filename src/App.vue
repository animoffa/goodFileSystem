<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Stomp } from "@stomp/stompjs";

export default defineComponent({
  name: "TheWorkSpace",
  props: {
    msg: String,
  },
  setup() {
    const ws = new WebSocket("ws://192.168.1.78:8080/websocket");
    const stompClient = Stomp.over(ws);
    stompClient.reconnect_delay = 5000;
    stompClient.heartbeat.outgoing = 5000; // client will send heartbeats every 20000ms
    stompClient.heartbeat.incoming = 5000; // 0 - client does not want to receive heartbeats from the server
    stompClient.debug = (str: any) => {
      console.log("STOMP debug: " + str);
    };

    stompClient.connect(
      {},
      (frame: any) => {
        console.log(frame);
        stompClient.subscribe("/topic/updates", (message: any) =>
          console.log("BROADCAST MSG === ", message)
        );
      },
      (error: any) => console.log("failed to connect to ws = ", error)
    );
  },
});
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

  * {
    box-sizing: border-box;
  }
</style>
