<template>
  <div id="habit-add-icon-and-color">
    <div class="top-wrapper">
      <div class="text">
        挑选一个图标和颜色:
      </div>
      <div class="icon-sample">
<!--        <icon-font ></icon-font>-->
      </div>
    </div>

    <div class="icon-wrapper">
      <div class="icon-subwrapper">
        <div class="icons" v-for="(item, index) in iconNames" :key="index">
          <habit-item
              height="50px"
              width="50px"
              bgc="#F6F7F2"
              border-radius="8px"
              :icon-name="item"
          ></habit-item>
        </div>
      </div>

    </div>

    <div class="color-wrapper">


    </div>
    <icon-font name="#icon-stop"></icon-font>

  </div>
</template>

<script>
import IconFont from "@/components/common/iconfont/IconFont";
import HabitItem from "@/views/habitadd/ChildComp/HabitItem";
export default {
  name: "HabitAddIconAndColor",
  components: {
    IconFont,
    // eslint-disable-next-line vue/no-unused-components
    HabitItem
  },

  data(){
    return{
      iconNames:["#icon-zaoqi", "#icon-weixiao", "#icon-jianfei", "#icon-tingge", "#icon-licai", "#icon-yingyu", "#icon-kanshu", "#icon-zaoshui", "#icon-jianshen", "#icon-sheying", "#icon-huahua", "#icon-paobu", "#icon-kaoyan", "#icon-chishuiguo", "#icon-dadianhua", "#icon-play", "#icon-computer", "#icon-changge", "#icon-Battery3", "#icon-Beermug", "#icon-CD", "#icon-zaoqi", "#icon-Charge", "#icon-zaoqi", "#icon-TV", "#icon-Trash", "#icon-talk", "#icon-ball", "#icon-badge", "#icon-wallet", "#icon-signal", "#icon-shop"],
      colors:[]
    }
  },


  methods:{

  }
}
</script>

<style scoped lang="less">
#habit-add-icon-and-color{
  width: 100%;

  .top-wrapper{
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
      font-size: 16px;
      font-weight: bold;
    }
  }

  .icon-wrapper{
    width: 100%;
    overflow-x: scroll;
    .icon-subwrapper{
      width: 140%;
      display: flex;
      flex-wrap: wrap;
      .icons{
        margin-right: 10px;
        margin-bottom: 10px;
      }

    }
  }
  .icon-wrapper::-webkit-scrollbar{
    display: none;
  }
}
</style>