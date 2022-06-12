<template>
  <div class="sidebar">
    <p class="sidebar__title">Столы</p>
    <div class="sidebar__divider"></div>
    <ul class="sidebar__items">
      <li
        v-for="system of fileSys"
        :key="system.id"
        class="sidebar__item"
        @click="changeWorkspace(system.id)"
      >
        {{ system.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { key } from "../store";
import { FileSystem } from "../store/file";

export default defineComponent({
  name: "TheSidebar",
  props: {
    msg: String,
  },
  setup() {
    const store = useStore(key);

    let fileSys = ref<FileSystem[]>([]);
    const getFileSystems = async () => {
      await store.dispatch("fetchFileSystems");
      fileSys.value = await store.state.file.fileSystems;
    };
    onMounted(getFileSystems);

    const changeWorkspace = (id: string) => {
      store.commit("changeCurrentFileSystemID", id);
    };

    return { fileSys, changeWorkspace };
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
    }

    &__items {
        padding 0;
    }

}
</style>
