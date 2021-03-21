<template>
  <div class="today-container">
    <top-bar width="inherit">
      <div slot="left">
        <icon-font name="#icon-CSS" fs="30px"></icon-font>

      </div>
      <div slot="center" class="centerItem">
        <div>TODAY</div>
        <div> ^ </div>
      </div>
      <div slot="right" class="rightItem">
        +
      </div>
    </top-bar>

  </div>
</template>

<script>
import TopBar from "@/components/common/topbar/TopBar";
import IconFont from "@/components/common/iconfont/IconFont";
export default {
  name: "HomeToday",
  components:{
    TopBar,
    IconFont
  }
}
</script>

<style scoped lang="less">
.today-container{
  height: 90vh;
  width: 100vw;

  padding: 0 1em;
  box-sizing: border-box;

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
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 49px;
      line-height: 49px;
    }
    div:last-child{
      color: grey;
      height: 49px;
      width: 30px;
      text-align: center;
      line-height: 49px;
      transform: rotate(180deg) translateX(-50px) translateY(2px);
    }
  }

  .rightItem{
    font-size: 28px;
    height: 49px;
    line-height: 49px;
  }
}
</style>