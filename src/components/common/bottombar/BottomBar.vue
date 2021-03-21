<template>
  <div class="bottom-bar-container" :style="BBStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
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
      default:()=> "100vw"
    },
  },

  data(){
    return{
      BBStyle:{
        backgroundColor: this.bgc,
        height: this.height,
        width: this.width,
      }
    }
  }
}
</script>

<style scoped lang="less">

.bottom-bar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
</style>