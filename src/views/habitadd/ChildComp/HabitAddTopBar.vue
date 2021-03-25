<template>
  <div id="top-bar-container">
    <top-bar>
      <div slot="left">
        <my-button
          width="60px"
          height="30px"
          border-radius="30px"
          bgc="#F6F7F2"
          style="box-shadow: none;font-size: 16px; font-weight: normal"
        >取消</my-button>
      </div>

      <div slot="center" style="font-size: 18px; font-weight: bolder">
        新的习惯
      </div>

      <div slot="right">
        <my-button
          width="60px"
          height="30px"
          border-radius="30px"
          bgc="#F6F7F2"
          style="box-shadow: none;font-size: 16px; font-weight: normal"
        >保存</my-button>
      </div>

    </top-bar>
  </div>
</template>

<script>
import TopBar from "@/components/common/topbar/TopBar";
import MyButton from "@/components/common/button/MyButton";
export default {
  name: "HabitAddTopBar",
  components: {
    TopBar,
    MyButton
  }
}
</script>

<style scoped>
#top-bar-container{
  font-size: 18px;
  font-weight: bold;
}
</style>