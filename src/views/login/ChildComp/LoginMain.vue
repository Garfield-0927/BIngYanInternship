<template>
  <!-- 登陆界面按钮部分 -->
  <div class="BtnWrapper">
    <my-button
        bgc="#FFE2AE"
        fc="grey"
        fs="24px"
        width="100%"
        @click.native="LoginBtnHandler">登录</my-button>
    <my-button
        bgc="#FFE2AE"
        fc="grey"
        fs="24px"
        width="100%"
        @click.native="RegisterBtnHandler">注册</my-button>
  </div>

</template>

<script>
import MyButton from "@/components/common/button/MyButton";

export default {
  name: "LoginMain",
  components:{
    MyButton
  },


  methods:{
    // 登录处理
    LoginBtnHandler(){
      this.$emit("LoginPopUp")
    },
    // 注册处理
    RegisterBtnHandler(){
      this.$emit("RegisterPopUp")
    }

  }
}
</script>

<style scoped lang="less">
.BtnWrapper{
  width: 80%;
  height: 20%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

</style>