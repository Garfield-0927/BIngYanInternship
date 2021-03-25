<template>
  <div id="habit-add-icon-and-color">
    <div class="top-wrapper">
      <div class="text">
        挑选一个图标和颜色:
      </div>
      <div class="icon-sample"
           :style="{backgroundColor: currentColorData==='' ? colors[0]:currentColorData}"
      >
        <icon-font
            fs="50px"
            :name="currentIconName==='' ? iconNames[0]:currentIconName"

        ></icon-font>
      </div>
    </div>

    <div class="icon-wrapper">
      <div class="icon-subwrapper">
        <div class="icons" v-for="(item, index) in iconNames" :key="index" @click="selectIcon(index)">
          <habit-item
              ref="icon"
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
      <div class="color-subwrapper">
        <div
            class="color"
            ref="color"
            v-for="(item, index) in colors"
            :key="index"
            :style="{backgroundColor:item}"
            @click="selectColor(index)"
        >
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import IconFont from "@/components/common/iconfont/IconFont";
import HabitItem from "@/views/habitadd/ChildComp/HabitItem";

export default {
  name: "HabitAddIconAndColor",
  components: {
    IconFont,
    HabitItem
  },

  data() {
    return {
      iconNames: ["#icon-zaoqi", "#icon-weixiao", "#icon-jianfei", "#icon-tingge", "#icon-licai", "#icon-yingyu", "#icon-kanshu", "#icon-zaoshui", "#icon-jianshen", "#icon-sheying", "#icon-huahua", "#icon-paobu", "#icon-kaoyan", "#icon-chishuiguo", "#icon-dadianhua", "#icon-play", "#icon-computer", "#icon-changge", "#icon-Battery3", "#icon-Beermug", "#icon-CD", "#icon-zaoqi", "#icon-Charge", "#icon-zaoqi", "#icon-TV", "#icon-Trash", "#icon-talk", "#icon-ball", "#icon-badge", "#icon-star", "#icon-signal", "#icon-shop"],
      colors: ["#FFFFCC", "#CCFFFF", "#FFCCCC", "#FFFF99", "#CCCCFF", "#FF9966", "#FF6666", "#FFCC99", "#CCFF99", "#CCCCCC", "#66CCCC", "#CCFF66", "#FF99CC", "#FF9999", "#FFCC99", "#FF6666", "#FFFF66", "#99CC66", "#666699", "#FF9900", "#FFCC00", "#FF99CC", "#66CC99", "#009999"],
      currentIcon: -1,
      currentColor: -1,
      currentIconName: "",
      currentColorData: ""
    }
  },

  methods: {
    // 选择图标
    selectIcon(index) {
      let iconEle = this.$refs.icon;
      if (this.currentIcon === -1) {
        this.currentIcon = index;
        iconEle[index].$el.classList.add("icon-active");
        this.currentIconName = this.iconNames[this.currentIcon]
        this.$emit("setIcon", this.currentIconName)
      } else {
        iconEle[this.currentIcon].$el.classList.remove("icon-active");
        iconEle[index].$el.classList.add("icon-active");
        this.currentIcon = index;
        this.currentIconName = this.iconNames[this.currentIcon]
        this.$emit("setIcon", this.currentIconName)
      }
    },

    // 选择颜色
    selectColor(index) {
      let colorEle = this.$refs.color;
      if (this.currentColor === -1) {
        this.currentColor = index;
        colorEle[index].classList.add("color-active");
        this.currentColorData = this.colors[this.currentColor]
        this.$emit("setColor", this.currentColorData)
      } else {
        colorEle[this.currentColor].classList.remove("color-active");
        colorEle[index].classList.add("color-active");
        this.currentColor = index;
        this.currentColorData = this.colors[this.currentColor]
        this.$emit("setColor", this.currentColorData)

      }
    }
  }
}
</script>

<style scoped lang="less">
#habit-add-icon-and-color {
  width: 100%;

  .top-wrapper {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-sample {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
      position: relative;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .text {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .icon-wrapper {
    margin-top: 10px;
    width: 100%;
    //height: 248px;
    overflow-x: scroll;

    .icon-subwrapper {
      padding-top: 4px;
      padding-left: 2px;
      width: 140%;
      display: flex;
      flex-wrap: wrap;

      .icons {
        margin-right: 10px;
        margin-bottom: 10px;
      }


    }
  }

  .icon-wrapper::-webkit-scrollbar {
    display: none;
  }


  .color-wrapper {
    margin-top: 40px;
    width: 100%;
    //height: 188px;
    overflow-x: scroll;

    .color-subwrapper {
      padding-top: 4px;
      padding-left: 4px;
      width: 140%;
      display: flex;
      flex-wrap: wrap;

      .color {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        margin-bottom: 10px;
      }

      .color-active {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
      }
    }
  }

  .color-wrapper::-webkit-scrollbar {
    display: none
  }
}
</style>