<template>
  <div class="Home-Container">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <home-bottom-bar></home-bottom-bar>
  </div>
</template>

<script>
import HomeBottomBar from "@/views/home/ChildComp/HomeBottomBar";
export default {
  name: "Home",
  components:{
    HomeBottomBar,
  },

  created() {
  }
}
</script>

<style scoped lang="less">


</style>