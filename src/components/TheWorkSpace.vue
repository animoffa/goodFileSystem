<template>
	<div class="workspace">{{ files }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '../store';

export default defineComponent({
	name: 'TheWorkSpace',
	props: {
		msg: String,
	},
	setup() {
		const store = useStore(key);
		const getFiles = async () => {
			await store.dispatch('fetchFiles', store.state.currentFileSystemID);
		};
		const files = computed(() => store.state.file.files);
		onMounted(getFiles);

    return {files};
	},
});
</script>

<style scoped lang="stylus">
.workspace {
  width: 78%;
  margin: 0 0px 0 22%;
}
</style>
