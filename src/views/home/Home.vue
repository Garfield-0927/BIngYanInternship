<template>
  <div class="Home-Container">

    <keep-alive exclude="TodayClockIn">
      <router-view></router-view>
    </keep-alive>
    <home-bottom-bar></home-bottom-bar>
  </div>
</template>

<script>
import HomeBottomBar from "@/views/home/ChildComp/HomeBottomBar";
import {checkLogin} from "@/network/user";
import {getYYYY_MM_DD} from "@/utils";
import {getOneDayHabit} from "@/network/habit";

export default {
  name: "Home",
  components: {
    HomeBottomBar,
  },

  created() {

    (async ()=>{
      await this.checkLogin();
      if (!this.$store.state.tasks.length){
        await this.getHabit();
      }
    })()

  },

  mounted() {
    this.$bus.$on('updateHabit', this.getHabit)
  },

  methods: {


    /**
     * api requests
     */
    // 检查是否登录
    async checkLogin() {
      const res = await checkLogin();
      if (!res.data.isLogin) {
        await this.$router.push("/");
        return;
      }
      this.$store.commit('getPhone', res.data.phone)
    },

    // 获取一天的习惯
    async getHabit() {
      let date = getYYYY_MM_DD();
      const res = await getOneDayHabit(date, this.$store.state.phone);
      this.$store.commit('getHabit', res.data.habit.tasks)
    }


  }
}
</script>

<style scoped lang="less">


</style>