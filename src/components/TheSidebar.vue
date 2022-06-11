<template>
  <div class="sidebar">
    <p class="sidebar__title">Столы</p>
    <div class="sidebar__divider"></div>
    <ul class="sidebar__items">
      <li class="sidebar__item">Стол 1</li>
      <li class="sidebar__item">Стол 2</li>
      <li class="sidebar__item">Фото</li>
    </ul>
  </div>
</template>

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
