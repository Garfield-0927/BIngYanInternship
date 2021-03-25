<template>
  <div id="top-bar-container">
    <top-bar>
      <div slot="left" class="left">
        <my-button
            width="60px"
            height="40px"
            border-radius="30px"
            bgc="#F6F7F2"
            style="box-shadow: none;font-size: 16px; font-weight: normal"
            @click.native="goBack"
        >取消
        </my-button>
      </div>

      <div slot="center" style="font-size: 18px; font-weight: bolder" class="center">
        新的习惯
      </div>

      <div slot="right" class="right">
        <my-button
            width="60px"
            height="40px"
            border-radius="30px"
            bgc="#F6F7F2"
            style="box-shadow: none;font-size: 16px; font-weight: normal"
            @click.native="saveHabit"
        >保存
        </my-button>
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
  },

  methods:{

    // 点击保存
    saveHabit(){
      this.$emit("saveHabit")
    },

    // 点击取消
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="less">
#top-bar-container {
  font-size: 18px;
  font-weight: bold;

  .left {
    margin-left: 1em;

  }

  .center {
    flex: 3;
    text-align: center;
  }

  .right {
    margin-right: 1em;
  }
}
</style>