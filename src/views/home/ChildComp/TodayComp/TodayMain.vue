<template>
  <div class="main-container">
    <today-task></today-task>
  </div>
</template>

<script>
import TodayTask from "@/views/home/ChildComp/TodayComp/TodayTask";
export default {
  name: "TodayMain",
  components:{
    TodayTask
  }
}
</script>

<style scoped lang="less">
.main-container{
  padding-top: 49px;
  height: calc(100vh - 10vh - 49px);
  overflow: scroll;


}
</style>