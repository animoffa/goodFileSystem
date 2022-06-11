<template>
  <div class="home">
    <TheHeader />
    <TheSidebar />
    <img alt="Vue logo" src="../assets/logo.png" />
    <TheWorkSpace msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheWorkSpace from "@/components/TheWorkSpace.vue"; // @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TheWorkSpace,
    TheHeader,
    TheSidebar,
  },
});
</script>
