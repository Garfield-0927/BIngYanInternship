<template>
  <div class="habit-container">
    <habit-top-bar/>

    <div class="main">
      <habit-swiper/>
    </div>



  </div>
</template>

<script>
import HabitTopBar from "@/views/home/ChildComp/HabitComp/HabitTopBar";
import HabitSwiper from "@/views/home/ChildComp/HabitComp/HabitSwiper";

export default {
  name: "HomeHabit",
  components: {
    HabitTopBar,
    HabitSwiper
  }
}
</script>

<style scoped lang="less">
.habit-container {
  height: 90vh;
  width: 100vw;
  padding: 0 1em;
  box-sizing: border-box;
  overflow: scroll;

  .main{
    padding-top: 49px;
    height: calc(90vh - 49px);
  }

}
</style>