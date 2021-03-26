<template>
  <div class="main-container">
    <today-task :tasks="this.$store.state.tasks"></today-task>
  </div>
</template>

<script>
import TodayTask from "@/views/home/ChildComp/TodayComp/TodayTask";

export default {
  name: "TodayMain",
  components: {
    TodayTask
  },

  data() {
    return {
      tasks: this.$store.state.tasks
    }
  },


  mounted() {


    // 处理打卡成功事件
    this.$bus.$on("ClockInSuccess", (task, time)=>{
      let targetTask = this.findTask(task, time);
      if (!targetTask.completed){
        targetTask.completed = true;
        targetTask.daysInARow++;
      }
    })

    // 处理取消打卡的事件
    this.$bus.$on("CancelClockIn", (task, time)=>{
      let targetTask = this.findTask(task, time);
      targetTask.completed = false;
      targetTask.daysInARow--;

    })
  },


  methods:{
    // find specific task according to time and taskDesc
    findTask(task, time){
      let timeIndex = this.tasks.findIndex(item => item.time === time);
      let taskIndex = this.tasks[timeIndex].item.findIndex(item => item.taskDesc === task.taskDesc);
      return this.tasks[timeIndex].item[taskIndex]
    }
  }

}
</script>

<style scoped lang="less">

.main-container {
  padding-top: 49px;
  height: calc(100vh - 10vh - 36px);
  overflow: scroll;
}

::-webkit-scrollbar {
  width: 0;
}

</style>