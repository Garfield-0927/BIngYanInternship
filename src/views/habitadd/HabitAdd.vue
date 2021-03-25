<template>
  <div id="habit-add-container">
    <habit-add-top-bar/>
    <habit-add-name/>
    <habit-add-icon-and-color/>
  </div>

</template>

<script>
import HabitAddTopBar from "@/views/habitadd/ChildComp/HabitAddTopBar";
import HabitAddName from "@/views/habitadd/ChildComp/HabitAddName";
import HabitAddIconAndColor from "@/views/habitadd/ChildComp/HabitAddIconAndColor";
export default {
name: "HabitAdd",
  components:{
    HabitAddTopBar,
    HabitAddName,
    HabitAddIconAndColor
  }
}
</script>

<style scoped lang="less">
#habit-add-container{
  height: calc(100vh - 49px);
  width: 100vw;
  margin-top: 49px;
  padding: 20px 1em 0;
  box-sizing: border-box;
}
</style>