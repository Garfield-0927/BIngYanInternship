<template>
  <div class="more-container">
    <top-bar width="inherit">
      <div slot="left">
        <icon-font name="#icon-gongneng1" fs="30px"></icon-font>

      </div>
      <div slot="center" class="centerItem">
        <div>更多</div>
      </div>
      <div slot="right" class="rightItem">
        <icon-font name="#icon-chilun" fs="28px"></icon-font>
      </div>
    </top-bar>
  </div>
</template>

<script>
import TopBar from "@/components/common/topbar/TopBar";
import IconFont from "@/components/common/iconfont/IconFont";

export default {
  name: "HomeMore",
  components: {
    TopBar,
    IconFont
  }
}
</script>

<style scoped lang="less">
.more-container {
  height: 90vh;
  width: 100vw;
  padding: 0 1em;
  box-sizing: border-box;

  .centerItem {
    width: 70%;
    height: 49px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div {
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