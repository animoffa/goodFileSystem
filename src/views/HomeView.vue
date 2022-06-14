<template>
  <div class="home">
    <TheHeader />
    <TheSidebar @click="closePopup"/>
    <TheWorkSpace @click.self="closePopup"/>
    <template v-if="$store.state.isPopupOpen">
    <ThePopup />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '../store';
import TheWorkSpace from "@/components/TheWorkSpace.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import ThePopup from "@/components/ThePopup.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TheWorkSpace,
    TheHeader,
    TheSidebar,
    ThePopup,
  },
  setup() {
		const store = useStore(key);

    const closePopup = async () => {
      if (store.state.isPopupOpen) {
        store.commit('changePopupOpened');
      }
    };

		return { closePopup };
	},
});
</script>

<style scoped lang="stylus">
 .home {
  position relative
 }
</style>
