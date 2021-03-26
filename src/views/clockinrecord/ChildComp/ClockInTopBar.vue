<template>
  <div id="record-top-bar">
    <top-bar
      class="record-top-bar-container"
      bgc="rgb(251,241,230)"
    >
      <div slot="left" class="left" @click="goBack"> &lt;</div>
      <div slot="center" class="center">打卡时间线</div>
      <div slot="right" class="right"></div>
    </top-bar>
  </div>
</template>

<script>
import TopBar from "@/components/common/topbar/TopBar";

export default {
  name: "ClockInTopBar",
  components: {
    TopBar
  },


  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="less">
#record-top-bar {
  .record-top-bar-container {
    .left {
      flex: 1;
      text-align: center;
      font-size: 20px;
      font-weight: bolder;

    }

    .right {
      flex: 1;
    }

    .center {
      flex: 3;
      text-align: center;
      font-size: 20px;
      font-weight: bolder;
    }
  }


}
</style>