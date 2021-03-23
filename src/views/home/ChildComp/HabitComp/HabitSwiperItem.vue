<template>
  <div class="swiper-item-container">
    <div class="task-item-wrapper" v-for="(item, index) in task" :key="index">
      <habit-task :task="item"></habit-task>
    </div>
  </div>
</template>

<script>
import HabitTask from "@/views/home/ChildComp/HabitComp/HabitTask";
export default {
  name: "HabitSwiperItem",
  components:{
    HabitTask
  },
  props:{
    task:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped lang="less">
.swiper-item-container{

}
</style>