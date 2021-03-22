<template>
  <div class="top-bar-container" :style="TBStyle">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "TopBar",

  props:{
    bgc:{
      type: String,
      default:()=> "#ffffff"
    },
    height:{
      type: String,
      default:()=> "49px"
    },
    width:{
      type: String,
      default:()=> "100%"
    }
  },

  data(){
    return{
      TBStyle:{
        backgroundColor: this.bgc,
        height: this.height,
        width: this.width
      }
    }
  }

}
</script>

<style scoped lang="less">
.top-bar-container{
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>