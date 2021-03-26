<template>
  <div class="more-container">
    <more-top-bar/>
    <more-main/>

  </div>
</template>

<script>
import MoreTopBar from "@/views/home/ChildComp/MoreComp/MoreTopBar";
import MoreMain from "@/views/home/ChildComp/MoreComp/MoreMain";
export default {
  name: "HomeMore",
  components:{
    MoreTopBar,
    MoreMain
  }
}
</script>

<style scoped lang="less">
.more-container {
  height: 90vh;
  width: 100vw;
  padding: 49px 1em 0;
  box-sizing: border-box;

}
</style>