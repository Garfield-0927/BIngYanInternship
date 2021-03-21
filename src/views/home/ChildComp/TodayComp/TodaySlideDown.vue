<template>
  <div class="slide-down-container">
    <div v-for="(item,index) in slideDownItem" :key="index" @click="changeDate(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "TodaySlideDown",
  data(){
    return{
      slideDownItem:["明天","TODAY","昨天","前天","自定义日期"]
    }
  },


  methods:{
    changeDate(index){
      this.$emit("changeDate", this.slideDownItem[index]);
    }
  }
}
</script>

<style scoped lang="less">
.slide-down-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 49px;
  right: 0;left: 0;
  height: 0;
  background-color: #fff;
  overflow: hidden;
  transition: all .8s;
  div{
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-weight: bolder;
    font-size: 18px;
  }
}

.active{
  height: 30vh;
}
</style>