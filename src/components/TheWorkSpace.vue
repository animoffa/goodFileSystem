<template>
	<div class="workspace">
    <div v-for="file of files" :key="file.id" class="workspace__item" @click="openFolder">
      <img v-if="file.type === 'DIRECTORY'" src="../assets/folder.png"/>
      <img v-else src="../assets/file.png"/>
      <p class="workspace__item-name">{{file.name}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch, toRef } from 'vue';
import { useStore } from 'vuex';
import { key } from '../store';

export default defineComponent({
	name: 'TheWorkSpace',
	props: {
		msg: String,
	},
	setup() {
		const store = useStore(key);
		const currentFSId = toRef(store.state , 'currentFileSystemID');
		const getFiles = async () => {
      if (currentFSId.value) {
			  await store.dispatch('fetchFiles', currentFSId.value);
      }
		};
		const files = computed(() => store.state.file.files);
		watch(currentFSId, () => {
			getFiles();
		});

		onMounted(getFiles);

    const openFolder = async () => {
      store.commit('changePopupOpened');
      // await store.dispatch('fetchFiles', currentFSId.value);
    };

		return { files, currentFSId, openFolder };
	},
});
</script>

<style scoped lang="stylus">
.workspace {
  width 78%
  min-height 80vh
  margin 0 0px 0 22%
  display flex
  justify-content flex-start
  align-items flex-start
  flex-wrap wrap
  padding 15px

  &__item {
    margin-right 20px
    margin-bottom 20px
    cursor pointer

    &-name {
      font-size 14px
      margin 10px 0 0 0
    }
  }
}
</style>
