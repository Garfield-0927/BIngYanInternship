<template>
  <div id="habit-add-container">
    <habit-add-top-bar
      @saveHabit="saveHabit"
    />
    <habit-add-name
      @setHabitName="setHabitName"
    />
    <habit-add-icon-and-color
      @setIcon="setIcon"
      @setColor="setColor"
    />
    <habit-clock-in-time
      @setTime="setTime"
    />
  </div>

</template>

<script>
import HabitAddTopBar from "@/views/habitadd/ChildComp/HabitAddTopBar";
import HabitAddName from "@/views/habitadd/ChildComp/HabitAddName";
import HabitAddIconAndColor from "@/views/habitadd/ChildComp/HabitAddIconAndColor";
import HabitClockInTime from "@/views/habitadd/ChildComp/HabitClockInTime";
import {checkLogin} from "@/network/user";
import {addHabit} from "@/network/habit";
import {getYYYY_MM_DD} from "@/utils";

export default {
  name: "HabitAdd",
  components: {
    HabitAddTopBar,
    HabitAddName,
    HabitAddIconAndColor,
    HabitClockInTime
  },


  data() {
    return {
      habit:{
        iconName: "",
        taskDesc: "",
        completed: false,
        completedBgc: "",
        daysInARow: 0,
      },
      time: ""
    }
  },

  created() {

    // 检查是否登录
    (async ()=>{
      const res = await checkLogin();
      if (!res.data.isLogin){
        await this.$router.push("/");
        return;
      }
      this.$store.commit('getPhone', res.data.phone)
    })();
  },

  mounted() {

  },

  methods: {

    // 获取习惯名字
    setHabitName(name) {
      this.habit.taskDesc = name;
    },

    // 获取习惯图标
    setIcon(icon) {
      this.habit.iconName = icon
    },

    // 获取习惯背景颜色
    setColor(color) {
      this.habit.completedBgc = color
    },

    // 获取习惯时间
    setTime(time) {
      this.time = time;
    },


    // 保存
    async saveHabit(){
      if (this.time==null||!this.habit.completedBgc||!this.habit.iconName||!this.habit.taskDesc){
        alert("保存失败!");
      } else {
        const date = getYYYY_MM_DD();
        let res = await addHabit(date, this.$store.state.phone, this.habit, this.time)
        if (res.data.code === 200){
          this.$bus.$emit('updateHabit');
          alert("保存成功!");
          await this.$router.push("/home/today");
        } else {
          alert("保存失败!");
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
#habit-add-container {
  height: calc(100vh - 49px);
  width: 100vw;
  margin-top: 49px;
  padding: 20px 1em 0;
  box-sizing: border-box;
}


</style>