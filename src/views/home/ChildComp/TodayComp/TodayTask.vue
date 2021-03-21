<template>
  <div class="task-container">
    <div v-for="(item, index) in tasks" :key="index">
      <div class="time" @click="unfoldHandler">
        <div class="arrow" ref="arrow">
          <icon-font name="#icon-arrow" fs="24px"></icon-font>
        </div>
        <div class="text">{{ item.time }}</div>
      </div>

      <div class="task-item-wrapper" ref="taskItemWrapper">
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

  data() {
    return {
      tasks: [
        {
          time: "起床",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理"
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐"
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力"
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电"
            },
          ],

        },
      ]
    }
  },


  methods:{

    // 折叠处理
    unfoldHandler(){
      this.$refs.arrow[0].classList.toggle('deactive')
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
    border-radius: 4px;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    .task{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30%;
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
}
</style>