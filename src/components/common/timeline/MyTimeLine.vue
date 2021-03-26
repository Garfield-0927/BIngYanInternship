<template>
  <div id="my-time-line-container" v-if="date">
    <div class="top-wrapper">
      <div class="left">
        <div class="icon-wrapper">
          <icon-font name="#icon-sun" fs="40px"></icon-font>
        </div>
        <div class="text">我在这一天</div>
      </div>
      <div class="right">
        {{ date }}
      </div>
    </div>
    <div class="time-line-wrapper">
      <div class="task-item" v-for="(item, index) in task" :key="index">
        <div class="time">07:10</div>
        <div class="icon-wrapper" :style="{backgroundColor:item.completedBgc}">
          <icon-font :name="item.iconName" fs="40px"></icon-font>
        </div>
        <div class="desc">{{item.taskDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import IconFont from "@/components/common/iconfont/IconFont";

export default {
  name: "MyTimeLine",
  components: {
    IconFont
  },
  props: {
    date: {
      type: String,
    },

  },

  data() {
    return {
      task: [
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
        },]
    }
  }
}
</script>

<style scoped lang="less">
#my-time-line-container {
  margin-top: 20px;
  width: 100%;

  .top-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;

      .text {
        font-size: 18px;
        font-weight: bold;
        margin-left: 4px;
      }
    }

    .right {
      font-weight: bold;

    }
  }

  .time-line-wrapper {
    margin-top: 20px;
    padding-left: 10px;


    .task-item{
      padding-left: 20px;
      height: 60px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      position: relative;
      .time{
        width: 80px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-weight: bold;
      }
      .icon-wrapper{
        height: 50px;
        width: 50px;
        position: relative;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
        svg{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      .desc{
        margin-left: 20px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
      }
    }


    .task-item::before{
      position: absolute;
      content: " ";
      width: 5px;
      height: 70px;
      background-color: #000000;
      left: 8px;
    }

    .task-item::after{
      position: absolute;
      content: " ";
      width: 16px;
      height: 16px;
      left: -2px;
      border-radius: 50%;
      background-color: #fff;
      border: 5px solid #000;
    }
  }

}


</style>