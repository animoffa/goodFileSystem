<template>
	<div class="sidebar">
		<p class="sidebar__title">Столы</p>
		<div class="sidebar__divider"></div>
		<ul class="sidebar__items">
			<li
				v-for="system of fileSystems"
				:key="system.id"
				class="sidebar__item"
        :class="{'-active': $store.state.currentFileSystemID == system.id}"
				@click="$store.state.currentFileSystemID !== system.id && changeWorkspace(system.id)"
			>
				{{ system.name }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '../store';

export default defineComponent({
	name: 'TheSidebar',
	props: {
		msg: String,
	},
	setup() {
		const store = useStore(key);

		// let fileSys = ref<FileSystem[]>([]);
		const getFileSystems = async () => {
			await store.dispatch('fetchFileSystems');
		};
    const setInitValue = async () => {
      await getFileSystems().then(() => changeWorkspace(fileSystems.value[0].id))
    };
		const changeWorkspace = (id: string) => {
			store.commit('changeCurrentFileSystemID', id);
		};

    const fileSystems = computed(() => store.state.file.fileSystems);
    
		onMounted(setInitValue);

		return { changeWorkspace, fileSystems };
	},
});
</script>

<style scoped lang="stylus">
.sidebar{
    width 22%
    height 100%
    padding 30px 20px
    position fixed
    top 0
    z-index 2
    background white
    left 0
    box-shadow 0px 5px 20px rgba(0, 0, 0, 0.1)

    &__title {
        font-weight 600
        font-size 20px
    }

    &__divider {
        width 100%
        border-bottom 1px solid gray
        margin 30px 0 25px 0
    }

    &__item {
        font-size 16px
        margin-bottom 25px
        list-style-type none
        cursor pointer

        &.-active {
          font-weight bold
          cursor default
        }
    }

    &__items {
        padding 0;
    }

}
</style>
