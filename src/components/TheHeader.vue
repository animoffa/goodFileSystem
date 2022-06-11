<template>
  <div class="header">
    <img src="../assets/user.png" />
    <img src="../assets/exit.png" />
  </div>
</template>

<style lang="stylus" scoped>
.header {
    position fixed
    top 0
    left 0
    width 100%
    display flex
    justify-content flex-end
    padding 15px 25px
    box-shadow 0px 5px 20px rgba(0, 0, 0, 0.1)

    img {
        width 25px
        height 25px
        margin-left 15px
        cursor pointer
    }

}
</style>
