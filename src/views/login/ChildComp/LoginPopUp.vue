<template>
  <div class="LoginPop">
    <div class="form-top">
      <div class="form-name">Login</div>
      <div class="form-cancel" @click="CancelPopUp">X</div>
    </div>

    <div class="form-main">
      <div class="form-item">
        <div class="phone">Phone:</div>
        <input type="text" placeholder="phone number" v-model="phone">
      </div>
      <div class="form-item">
        <div class="password">Password:</div>
        <input type="password" placeholder="password" v-model="password">
      </div>
    </div>

    <div class="form-btn">
      <my-button
        bgc="#FFE2AE"
        fc="grey"
        fs="18px"
        class="login-btn"
        @click.native="LoginHandler"
      >Login</my-button>
    </div>

  </div>
</template>

<script>
import MyButton from "@/components/common/button/MyButton";
import {userLogin} from "@/network/user";

export default {
  name: "LoginPop",
  components:{
    MyButton
  },

  data(){
    return{
      phone: "",
      password: ""
    }
  },

  methods:{

    // emit the event: click X to close the popup
    CancelPopUp(){
      this.$emit("CancelPopUp")
    },

    // click the login btn
    LoginHandler(){
      // TODO
      // need api request
      //
      (async ()=>{
        const res = await userLogin(this.phone, this.password)
        console.log(res)
        await this.$router.push("home/today");
      })();



    }



  }

}
</script>

<style  lang="less">
.LoginPop{
  position: absolute;
  width: 80vw;
  height: 50vh;
  padding: 0 20px;
  background-color: #FFFBF4;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: -200%;
  transition: all 1s;
  .form-top{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .form-name{
      font-size: 28px;
      color: grey;
    }
    .form-cancel{
      font-size: 28px;
      color: lightslategray;
    }
  }

  .form-main{
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    .form-item{
      div{
        height: 30px;
        line-height: 30px;
        font-size: 24px;
      }

      input{
        border: 1px solid rgba(0,0,0,0.2);
        padding: 15px;
        height: 22px;
        width: 100%;
        margin-top: 2px;
        background-color: transparent;
      }
    }
  }

  .form-btn{
    .login-btn{
      float: right;
    }
  }

}
</style>