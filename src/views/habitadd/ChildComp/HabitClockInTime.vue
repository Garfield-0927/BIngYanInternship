<template>
  <div id="habit-clock-in-time-container">
    <div class="text">
      习惯打卡情景:
    </div>
    <div class="time-selection" >
      <div class="btn-wrapper" v-for="(item, index) in time" :key="item" @click="timeClickHandler(index)" ref="btn">
        <my-button
            width="60px"
            height="50px"
            bgc="#F6F7F2"
            style="box-shadow: none;font-size: 16px; font-weight: normal"
        >{{ item }}</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/common/button/MyButton";
export default {
  name: "HabitClockInTime",
  components:{
    MyButton
  },

  data(){
    return{
      time:["起床","晨间","中午","午间","晚间"]
    }
  },
  
  methods:{
    timeClickHandler(index){
      let btnEles = this.$refs.btn;
      for (let i = 0; i < this.time.length; i++) {
        if (i!==index){
          btnEles[i].classList.remove("btn-active")
        } else{
          btnEles[i].classList.add("btn-active")
        }
      }
      this.$emit("setTime", this.time[index])
    }
  }
}
</script>

<style scoped lang="less">
#habit-clock-in-time-container{
  height: 100px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  .text {
    font-size: 16px;
    font-weight: bold;
  }
  .time-selection{
    margin-top: 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .btn-active{
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
}
</style>