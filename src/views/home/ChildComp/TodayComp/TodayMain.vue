<template>
  <div class="main-container">
    <today-task :tasks="tasks"></today-task>
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
      tasks: [
        {
          time: "起床",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false,
              completedBgc: "#CCFF99",
              daysInARow: 1,
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: false,
              completedBgc: "#FFCC33",
              daysInARow: 2,
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: true,
              completedBgc: "#CC6699",
              daysInARow: 0,
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: true,
              completedBgc: "#99CCFF",
              daysInARow: 3,
            },
          ],
        },
        {
          time: "晨间",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false,
              completedBgc: "#CCFF99",
              daysInARow: 1,
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: true,
              completedBgc: "#FFCC33",
              daysInARow: 2,
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false,
              completedBgc: "#CC6699",
              daysInARow: 0,
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: true,
              completedBgc: "#99CCFF",
              daysInARow: 3,
            },
          ],
        },
        {
          time: "中午",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false,
              completedBgc: "#CCFF99",
              daysInARow: 1,
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: true,
              completedBgc: "#FFCC33",
              daysInARow: 2,
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false,
              completedBgc: "#CC6699",
              daysInARow: 0,
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: true,
              completedBgc: "#99CCFF",
              daysInARow: 3,
            },
          ],
        },
        {
          time: "午间",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false,
              completedBgc: "#CCFF99",
              daysInARow: 1,
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: false,
              completedBgc: "#FFCC33",
              daysInARow: 2,
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false,
              completedBgc: "#CC6699",
              daysInARow: 0,
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: true,
              completedBgc: "#99CCFF",
              daysInARow: 3,
            },
          ],
        },
        {
          time: "晚间",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: true,
              completedBgc: "#CCFF99",
              daysInARow: 1,
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: false,
              completedBgc: "#FFCC33",
              daysInARow: 2,
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false,
              completedBgc: "#CC6699",
              daysInARow: 0,
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: true,
              completedBgc: "#99CCFF",
              daysInARow: 3,
            },
          ],
        },
        {
          time: "睡前",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false,
              completedBgc: "#CCFF99",
              daysInARow: 1,
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: false,
              completedBgc: "#FFCC33",
              daysInARow: 2,
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false,
              completedBgc: "#CC6699",
              daysInARow: 0,
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: false,
              completedBgc: "#99CCFF",
              daysInARow: 3,
            },
          ],
        },
      ]
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
  width: 0px;
}

</style>