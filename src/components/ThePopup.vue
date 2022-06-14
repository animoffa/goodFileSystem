<template>
    <div class="popup">
        <div class="popup__close" @click="closePopup">x</div>
        dfdf
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '../store';

export default defineComponent({
  name: "HomeView",

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
.popup {
    width 70%
    padding 30px 20px
    position absolute
    top 45%
    transform translate(-50%, -50%)
    z-index 10
    background white
    border-radius: 10px
    left 61%
    box-shadow 0px 5px 20px rgba(0, 0, 0, 0.1)

    &__close {
        position absolute
        top 10px
        right 20px
        cursor pointer
    }
}
</style>