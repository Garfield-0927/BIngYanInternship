<template>
  <div id="more-main-container">

    <!--  头像以及用户名  -->
    <div class="avatar-container">
      <div class="icon-wrapper">
        <IconFont name="#icon-HotAirBalloon" fs="70px"></IconFont>
      </div>
      <div class="text">
        没有人
      </div>
    </div>


    <!--  功能列表  -->
    <div class="function-container">
      <div class="function-item" @click="functionClickHandler">
        <div class="icon-wrapper">
          <icon-font name="#icon-Hourglass" fs="60px"/>
        </div>
        <div class="text">我在这一天</div>
      </div>
      <div class="function-item">
        <div class="icon-wrapper">
          <icon-font name="#icon-Hourglass" fs="60px"/>
        </div>
        <div class="text">我在这一天</div>
      </div>
      <div class="function-item">
        <div class="icon-wrapper">
          <icon-font name="#icon-Hourglass" fs="60px"/>
        </div>
        <div class="text">我在这一天</div>
      </div>
      <div class="function-item">
        <div class="icon-wrapper">
          <icon-font name="#icon-Hourglass" fs="60px"/>
        </div>
        <div class="text">我在这一天</div>
      </div>
      <div class="function-item">
        <div class="icon-wrapper">
          <icon-font name="#icon-Hourglass" fs="60px"/>
        </div>
        <div class="text">我在这一天</div>
      </div>
      <div class="function-item">
        <div class="icon-wrapper">
          <icon-font name="#icon-Hourglass" fs="60px"/>
        </div>
        <div class="text">我在这一天</div>
      </div>
      <div class="function-item">
        <div class="icon-wrapper">
          <icon-font name="#icon-Hourglass" fs="60px"/>
        </div>
        <div class="text">我在这一天</div>
      </div>
      <div class="function-item">
        <div class="icon-wrapper">
          <icon-font name="#icon-Hourglass" fs="60px"/>
        </div>
        <div class="text">我在这一天</div>
      </div>


    </div>
  </div>
</template>

<script>
import IconFont from "@/components/common/iconfont/IconFont";

export default {
  name: "MoreMain",
  components: {
    IconFont
  },

  data() {
    return {}
  },

  methods:{
    functionClickHandler(){
      this.$router.push('/clockInRecord')
    }
  }
}
</script>

<style scoped lang="less">
#more-main-container {

  .avatar-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 120px;

    .icon-wrapper {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid #000000;
      position: relative;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .text {
      font-size: 26px;
      font-weight: bolder;

    }
  }

  .function-container {
    margin-top: 20px;
  }

  .function-item {
    height: 160px;
    width: 30%;
    background-color: #F6F7F2;
    border-radius: 8px;
    margin-left: 8px;
    margin-bottom: 8px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .icon-wrapper {
      position: relative;
      width: 60px;
      height: 60px;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .text {
      font-size: 18px;
      font-weight: bold;
    }
  }


}
</style>