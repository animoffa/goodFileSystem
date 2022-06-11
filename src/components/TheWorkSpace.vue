<template>
  <div class="hello">erer</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "../store";

export default defineComponent({
  name: "TheWorkSpace",
  props: {
    msg: String,
  },
  setup() {
    const store = useStore(key);
  },
});
</script>

<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>

function useStore(key: any) { throw new Error("Function not implemented."); }
function useStore(key: any) { throw new Error("Function not implemented."); }
function useStore(key: any) { throw new Error("Function not implemented."); }
