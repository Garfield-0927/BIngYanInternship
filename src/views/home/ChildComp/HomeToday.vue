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
      <div slot="right" class="rightItem">
        +
      </div>
    </top-bar>

    <today-slide-down
      ref="slideDown"
      @changeDate="changeDate"
    />


  </div>
</template>

<script>
import TopBar from "@/components/common/topbar/TopBar";
import IconFont from "@/components/common/iconfont/IconFont";
import TodaySlideDown from "@/views/home/ChildComp/TodayComp/TodaySlideDown";
export default {
  name: "HomeToday",
  components:{
    TopBar,
    IconFont,
    TodaySlideDown

  },


  methods:{

    // slidedown出现
    showSlideDown(){
      this.$refs.arrow.classList.toggle('active');
      this.$refs.slideDown.$el.classList.toggle('active');
    },

    // change date
    changeDate(now){
      this.$refs.date.innerHTML = now;
      this.$refs.arrow.classList.remove('active');
      this.$refs.slideDown.$el.classList.remove('active');
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