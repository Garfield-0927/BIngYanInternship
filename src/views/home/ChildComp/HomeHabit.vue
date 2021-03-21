<template>
  <div class="habit-container">
    <top-bar width="inherit">
      <div slot="left" class="leftItem">
        <icon-font name="#icon-tiaoshi" fs="24px"></icon-font>
      </div>
      <div slot="center" class="centerItem">
        <div>习惯管理</div>
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
  name: "HomeHabit",
  components: {
    TopBar,
    IconFont
  }
}
</script>

<style scoped lang="less">
.habit-container {
  height: 90vh;
  width: 100vw;
  padding: 0 1em;
  box-sizing: border-box;

  .leftItem{
    border: 2px solid #000000;
    border-radius: 4px;
  }


  .centerItem {
    width: 70%;
    height: 49px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div{
      font-size: 18px;
      height: 49px;
      line-height: 49px;
    }
  }

  .rightItem {
    font-size: 28px;
    height: 49px;
    line-height: 49px;
  }
}
</style>