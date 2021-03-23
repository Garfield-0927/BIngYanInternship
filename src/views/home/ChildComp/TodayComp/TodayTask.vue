<template>
  <div class="task-container">
    <div v-for="(item, index) in tasks" :key="index" class="task-wrapper">
      <div class="time" @click="unfoldHandler(index)">
        <div class="arrow" ref="arrow">
          <icon-font name="#icon-arrow" fs="24px"></icon-font>
        </div>
        <div class="text">{{ item.time }}</div>
      </div>

      <div class="task-item-wrapper" ref="taskItemWrapper" >
        <div
          class="task"
          v-for="(task,index2) in item.item"
          :key="index2"
          v-show="showCompleted===true?true:!task.completed"
          @click="clockInHandler(task, item.time)"
        >
          <div class="task-icon" :style="{backgroundColor: task.completed ? task.completedBgc: '#ffffff' }">
            <icon-font :name="task.iconName" fs="48px"></icon-font>
          </div>
          <div class="task-desc">{{ task.taskDesc }}</div>
          <div v-if="task.daysInARow" class="days">连续{{task.daysInARow}}天</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import IconFont from "@/components/common/iconfont/IconFont";

export default {
  name: "TodayTask",
  components: {
    IconFont
  },

  props:{
    tasks:{
      type: Array,
      required: true
    }
  },

  data() {
    return {
      showCompleted: true
    }
  },


  mounted() {

    // 监听隐藏已完成事件的事件
    this.$bus.$on("cancelCompleted",()=>{
      this.showCompleted = this.showCompleted===true ? false : true;
    })


  },


  methods:{

    // 折叠处理   index为下标索引
    unfoldHandler(index){
      this.$refs.arrow[index].classList.toggle('deactive')
      this.$refs.taskItemWrapper[index].classList.toggle('task-item-deactive')
    },


    // 打卡处理
    clockInHandler(task, time){
      this.$bus.$emit("clockIn", task, time)
    }
  }

}
</script>

<style scoped lang="less">
.task-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .time{
    height: 30px;
    width: 80px;
    border-radius: 8px;
    background-color: #F8F8F8;
    color: #565656;
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;

    .arrow{
      padding-top: 3px;
      margin: 0 4px;
      transition: all 1s;
    }

    .deactive{
      transform: rotate(180deg);
    }
  }

  .task-item-wrapper{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    transition: all 1s ease-in-out;
    max-height: 500px;
    opacity: 1;
    .task{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33%;
      opacity: inherit;
      .task-icon{
        width: 60px;
        height: 60px;
        text-align: center;
        border: 1px solid #DBDBE0;
        border-radius: 50%;
        position: relative;
        svg{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .completed{
        background-color: #ffcc99;
      }

      .task-desc{
        margin: 10px auto;
        opacity: inherit;
        font-weight: bolder;
      }

      .days{
        margin-bottom: 20px;
      }
    }



  }

  .task-item-deactive{
    overflow: hidden;
    opacity: 0;
    max-height: 0;
  }


}
</style>