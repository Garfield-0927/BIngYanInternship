<template>
  <div class="outter" ref="outter" @click="outterClickHandler">
    <div class="slide-down-container">
      <div v-for="(item,index) in slideDownItem" :key="index" @click="changeDate(index)">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodaySlideDown",
  data() {
    return {
      slideDownItem: ["明天", "TODAY", "昨天", "前天", "自定义日期"]
    }
  },


  methods: {

    // 改变日期选项
    changeDate(index) {
      this.$emit("changeDate", this.slideDownItem[index]);
    },


    // 点击其他地方关闭slidedown
    outterClickHandler(){
      this.$emit("closeSlideDown")
    }
  }
}
</script>

<style scoped lang="less">

.outter {
  position: absolute;
  top: 49px;
  left: 0;
  right: 0;
  height: calc(100vh - 10vh - 49px);
  z-index: 999;
  background-color: transparent;
  transition: all 1s;
  visibility: hidden;

  .slide-down-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 48px;
    right: 0;
    left: 0;
    height: 0;
    background-color: #fff;
    z-index: 9999;
    overflow: hidden;
    transition: all .8s;

    div {
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-weight: bolder;
      font-size: 18px;
    }

  }


  .active {
    height: 30vh;
  }
}

.outter-active{
  background-color: rgba(0,0,0,.4);
  visibility: visible;
}


</style>