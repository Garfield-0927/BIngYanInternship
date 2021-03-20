<template>
  <div class="loginContainer">

    <div class="loginTop">
      <div class="poet">
        <div class="title">
          <p>雕刀</p>
          <p>席慕容</p>
        </div>

        <div class="poem">
          <p>也不过只是为了想让这个世界知道，</p>
          <p>反复与坚持之后，</p>
          <p>柔水终成雕刀。</p>
        </div>
      </div>
    </div>

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

    <div class="loginFoot">
      <div class="footImg">
        <img src="~assets/imgs/login/login1.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
// import IconFont from "@/components/iconfont/IconFont";
import MyButton from "@/components/common/button/MyButton";
export default {
  name: "Login",

  components:{
    // IconFont
    MyButton
  },

  created() {

  },

  mounted() {
  },

  methods:{
    // 登录处理
    LoginBtnHandler(){
    },
    // 注册处理
    RegisterBtnHandler(){
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

  .loginTop{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .title{
      p:first-child{
        color: steelblue;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 0;
      }
      p:last-child{
        color: grey;
        margin-top: 5px;
      }
    }

    p{
      text-align: center;
    }

  }


  .BtnWrapper{
    width: 80%;
    height: 20%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }


  .loginFoot{
    width: 100%;
    height: 20%;
    .footImg{
      img{
        width: 100%;
      }
    }
  }

}

</style>