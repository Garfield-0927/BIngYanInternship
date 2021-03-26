<template>
  <div id="habit-task-container" :style="{backgroundColor:task.completedBgc}">
    <div class="left">
      <icon-font :name="task.iconName" fs="50px" class="task-icon"></icon-font>
      <div class="task-desc">{{ task.taskDesc }}</div>
    </div>
    <div class="right">
      <div class="day">{{ task.daysInARow }}天</div>
      <div class="persist">坚持天数</div>
    </div>


  </div>
</template>

<script>
import IconFont from "@/components/common/iconfont/IconFont";

export default {
  name: "HabitTask",

  components: {
    IconFont
  },

  props: {
    task: {
      type: Object,
      default: () => {
        return {
          iconName: "#icon-Washingmachine",
          taskDesc: "洗漱整理",
          completed: false,
          completedBgc: "#CCFF99",
          daysInARow: 1,
        }
      }
    },
  },


  methods: {}
}
</script>

<style scoped lang="less">
#habit-task-container {

  width: 98%;
  height: 80px;
  padding: 0 20px;
  margin: 10px 0 10px 0;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 1s ease-in-out;

  .left {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .task-desc {
      font-weight: bold;
      font-size: 18px;
      margin-left: 6px;
    }
  }

  .right {

    .day {
      font-weight: bolder;
      font-size: 24px;
      text-align: right;
      margin-bottom: 4px;
    }

    .persist {
      font-size: 14px;
      // 调整字间距
      letter-spacing: 1px;
    }
  }


}
</style>