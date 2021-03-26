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

export default {
  name: "Home",
  components:{
    HomeBottomBar,
  },

  mounted() {
    (async ()=>{
      const res = await checkLogin();
      console.log(res)
      if (!res.data.isLogin){
        await this.$router.push("/");
      }
    })();
  },


  methods:{

  }
}
</script>

<style scoped lang="less">


</style>