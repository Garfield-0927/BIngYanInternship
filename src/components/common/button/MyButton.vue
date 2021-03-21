<template>
  <div :style="BtnStyle" class="mybtn-container">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props:{
    bgc:{
      type: String,
      default(){
        return "#409EFF"
      }
    },
    fc:{
      type: String,
      default(){
        return "#000000"
      }
    },
    fs:{
      type: String,
      default: ()=> "16px"
    },
    width:{
      type: String,
      default: ()=> "100px"
    },
    height:{
      type: String,
      default: ()=> "50px"
    },
  },

  data(){
    return{
      BtnStyle:{
        backgroundColor: this.bgc,
        color:this.fc,
        fontSize:this.fs,
        width:this.width,
        height:this.height,
        borderRadius:'4px',
      }
    }
  }

}
</script>

<style scoped>
.mybtn-container{
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
}
</style>