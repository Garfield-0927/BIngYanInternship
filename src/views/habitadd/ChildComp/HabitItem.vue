<template>
  <div id="habit-item-container" :style="itemStyle">
    <icon-font class="icon-item" :name="iconName" fs="48px"></icon-font>
  </div>
</template>

<script>
import IconFont from "@/components/common/iconfont/IconFont";
export default {
  name: "HabitItem",
  components:{
    IconFont
  },
  props:{
    height: String,
    width: String,
    bgc: String,
    iconName: String,
    borderRadius: String,
  },

  data(){
    return{
      itemStyle:{
        height: this.height,
        width: this.width,
        backgroundColor: this.bgc,
        borderRadius: this.borderRadius
      }
    }
  }
}
</script>

<style scoped lang="less">
#habit-item-container {
  position: relative;

  .icon-item{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

}
.icon-active{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
}
</style>