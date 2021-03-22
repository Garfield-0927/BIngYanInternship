<template>
  <div class="task-container">
    <div v-for="(item, index) in tasks" :key="index">
      <div class="time" @click="unfoldHandler(index)">
        <div class="arrow" ref="arrow">
          <icon-font name="#icon-arrow" fs="24px"></icon-font>
        </div>
        <div class="text">{{ item.time }}</div>
      </div>

      <div class="task-item-wrapper clearfix" ref="taskItemWrapper">
        <div class="task" v-for="(task,index2) in item.item" :key="index2">
          <div class="task-icon">
            <icon-font :name="task.iconName" fs="48px"></icon-font>
          </div>
          <div class="task-desc">{{ task.taskDesc }}</div>
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

    }
  },


  methods:{

    // 折叠处理   index为下标索引
    unfoldHandler(index){
      this.$refs.arrow[index].classList.toggle('deactive')
      this.$refs.taskItemWrapper[index].classList.toggle('task-item-deactive')
    }
  }

}
</script>

<style scoped lang="less">
.task-container {
  width: 100%;

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
    transition: all 1s;

    .task{
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33%;
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

      .task-desc{
        margin: 10px auto;
      }
    }

  }

  // 清除浮动坍塌
  .clearfix::after{
    content: "";
    clear:both;
    display: block;

  }

  .task-item-deactive{
    height: 0;
    overflow: hidden;
  }

}
</style>