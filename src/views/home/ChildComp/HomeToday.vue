<template>
  <div class="today-container">

    <top-bar>
      <div slot="left" class="leftItem">
        <icon-font name="#icon-CSS" fs="30px"></icon-font>
      </div>
      <div slot="center" class="centerItem" @click="showSlideDown">
        <div ref="date">TODAY</div>
        <div ref="arrow" class="arrow"> ^ </div>
      </div>
      <div slot="right" class="rightItem" @click="concealCompleted">
        +
      </div>
    </top-bar>

    <today-slide-down
      ref="slideDown"
      @changeDate="changeDate"
      @closeSlideDown="closeSlideDown"
    />

    <today-main/>

  </div>
</template>

<script>
import TopBar from "@/components/common/topbar/TopBar";
import IconFont from "@/components/common/iconfont/IconFont";
import TodaySlideDown from "@/views/home/ChildComp/TodayComp/TodaySlideDown";
import TodayMain from "@/views/home/ChildComp/TodayComp/TodayMain";
export default {
  name: "HomeToday",
  components:{
    TopBar,
    IconFont,
    TodaySlideDown,
    TodayMain
  },


  methods:{


    /* About Slide Down Methods */
    // slideDownController
    controlSlideDown(){
      this.$refs.arrow.classList.toggle('active');
      this.$refs.slideDown.$el.classList.toggle("outter-active")
      this.$refs.slideDown.$el.querySelector("div").classList.toggle('active');
    },
    // slidedown出现
    showSlideDown(){
      this.controlSlideDown();
    },
    // change date
    changeDate(now){
      this.$refs.date.innerHTML = now;

    },
    // close slidedown
    closeSlideDown(){
      this.controlSlideDown();
    },



    /* About concealing finished tasks */
    concealCompleted(){
      this.$bus.$emit("cancelCompleted")
    }


  }
}
</script>

<style scoped lang="less">
.today-container{
  height: 90vh;
  width: 100vw;

  padding: 0 1em;
  box-sizing: border-box;

  .leftItem{
    height: 49px;
    width: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .centerItem{
    width: 70%;
    height: 49px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div:first-child{
      font-size: 18px;
      height: 49px;
      line-height: 49px;
    }
    .arrow{
      height: 49px;
      width: 49px;
      font-size: 18px;
      text-align: center;
      line-height: 49px;
      position: absolute;
      right: 50px;
      transform: rotate(180deg) translateY(4px);
      transition: all .8s;
    }
    .active{
      transform: rotate(0deg) translateY(2px);
    }
  }

  .rightItem{
    font-size: 28px;
    height: 49px;
    width: 49px;
    line-height: 49px;
    text-align: center;
  }
}
</style>