<template>
  <div class="clock-in-container" ref="clockInContainer">
    <div class="pop-up-wrapper">
      <div class="pop-up-top" :style="{backgroundColor:task.completedBgc}">
        <div class="title">打卡日志</div>
        <div class="time">今天 {{ getTime }}</div>
      </div>

      <div class="task">
        <div class="task-icon" :style="{backgroundColor:task.completedBgc}">
          <icon-font :name="task.iconName" fs="48px"></icon-font>
        </div>
        <div class="task-desc">{{ task.taskDesc }}</div>
      </div>

      <div class="form">
        <textarea type="text" v-model="clockInRecord"></textarea>
      </div>

      <div class="pop-up-foot">
        <my-button
            class="leftbtn"
            bgc="transparent"
            style="box-shadow: none"
            fc="#CCCCCC"
            @click.native="closeClockIn"
        >取消打卡
        </my-button>
        <my-button
            class="centerbtn"
            border-radius="30px"
            :style="{backgroundColor: task.completedBgc}"
            fs="18px"
            @click.native="updateTask"
        >保存
        </my-button>
        <my-button
            class="rightbtn"
            bgc="transparent"
            style="box-shadow: none"
            fc="#CCCCCC"
        >所有日志
        </my-button>
      </div>
    </div>

  </div>
</template>

<script>
import IconFont from "@/components/common/iconfont/IconFont";
import MyButton from "@/components/common/button/MyButton";
import {getHH_MM} from "@/utils";

export default {
  name: "TodayClockIn",
  components: {
    IconFont,
    MyButton
  },


  props: {},


  data() {
    return {
      task: {
        iconName: "#icon-Washingmachine",
        taskDesc: "洗漱整理",
        completed: false,
        completedBgc: "#CCFF99",
        daysInARow: 1,
      },
      clockInRecord: "",
      time:"",
    }
  },

  computed: {
    getTime: () => {
      return getHH_MM();
    }
  },


  mounted() {

    this.$bus.$on("clockIn", (task, time) => {
      this.time = time;
      this.task = JSON.parse(JSON.stringify(task))
      if (this.$refs.clockInContainer){
        this.$refs.clockInContainer.classList.add("active");
      }
    })

  },


  methods: {

    // 点击保存更新数据
    updateTask() {
      this.$bus.$emit("ClockInSuccess", this.task, this.time)
      this.$refs.clockInContainer.classList.remove("active");
    },


    // 关闭打卡页面
    closeClockIn(){
      // 如果是已经打卡成功的任务处理
      if (this.task.completed){
        this.$bus.$emit("CancelClockIn", this.task, this.time)
      }

      this.$refs.clockInContainer.classList.remove("active");
    }



  }


}
</script>

<style scoped lang="less">
.clock-in-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.4);

  z-index: 9999;

  .pop-up-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background-color: #fff;
    z-index: 9999;
    width: 80vw;
    height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 0 1em;
    box-sizing: border-box;

    .pop-up-top {
      width: 80vw;
      height: 10%;
      border-radius: 20px 20px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        margin-left: 1em;
        font-weight: bolder;
        font-size: 18px;
      }

      .time {
        text-align: center;
        height: 30px;
        line-height: 30px;
        padding: 0 6px;
        margin-right: 1em;
        background-color: #fff;
        border-radius: 8px;
        font-size: 14px;
      }
    }

    .task {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .task-icon {
        width: 60px;
        height: 60px;
        text-align: center;
        border: 1px solid #DBDBE0;
        border-radius: 50%;
        position: relative;

        svg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

      }

      .task-desc {
        margin-top: 10px;
        opacity: inherit;
        font-weight: bolder;
      }
    }

    .form {
      width: 100%;
      height: 50%;
      background-color: #EFEFEF;
      border-radius: 10px;

      textarea {
        border: none;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        background-color: transparent;
      }


      // 取消focus时候的外边框
      textarea:focus {
        outline: none;
      }
    }

    .pop-up-foot {
      display: flex;
      width: 100%;
      height: 10%;
      margin-bottom: 20px;
      align-items: center;

      .leftbtn {
        width: 20%;
        text-align: center;
      }

      .centerbtn {
        width: 60%;
        text-align: center;
      }

      .rightbtn {
        width: 20%;
        text-align: center;
      }
    }
  }
}

.active {
  visibility: visible;
}
</style>