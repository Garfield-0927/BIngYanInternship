<template>
  <div class="loginContainer">

    <!--  登录注册 弹出框  -->
    <login-pop-up
      ref="loginPop"
      @CancelPopUp="CancelPopUp"
    ></login-pop-up>
    <register-pop-up
      ref="registerPop"
      @CancelPopUp="CancelPopUp"
    ></register-pop-up>

    <login-top></login-top>


    <login-main
      @LoginPopUp="LoginPopUp"
      @RegisterPopUp="RegisterPopUp"
    ></login-main>


    <login-foot></login-foot>


  </div>
</template>

<script>
import LoginTop from "@/views/login/ChildComp/LoginTop";
import LoginMain from "@/views/login/ChildComp/LoginMain";
import LoginFoot from "@/views/login/ChildComp/LoginFoot";
import LoginPopUp from "@/views/login/ChildComp/LoginPopUp";
import RegisterPopUp from "@/views/login/ChildComp/RegisterPopUp";
export default {
  name: "Login",

  components:{
    LoginTop,
    LoginMain,
    LoginFoot,
    LoginPopUp,
    RegisterPopUp
  },

  created() {

  },

  mounted() {
  },

  methods:{

    // add active class to the popup
    LoginPopUp(){
      this.$refs.loginPop.$el.classList.add("pop-up-active")
    },
    //
    RegisterPopUp(){
      this.$refs.registerPop.$el.classList.add("pop-up-active")

    },
    CancelPopUp(){
      this.$refs.loginPop.$el.classList.remove("pop-up-active")
      this.$refs.registerPop.$el.classList.remove("pop-up-active")
    }
  }


}
</script>

<style  lang="less" scoped>


.loginContainer{
  width: 100vw;
  height: 100vh;
  background-color: #FFFBF4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;


  .pop-up-active{
    top:50%;
    transform: translateY(-50%);
  }

}

</style>