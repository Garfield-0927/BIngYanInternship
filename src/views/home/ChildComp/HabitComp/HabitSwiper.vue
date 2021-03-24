<template>
  <div id="swiper-container">
    <div class="title-container">
      <div class="title-item" v-for="(item, index) in title" :key="item" @click="ChangeIndex(index)">{{ item }}</div>
      <div class="shadow" ref="shadow"></div>
    </div>


    <div class="swiper-item-container">
      <div class="swiper-item-wrapper" v-for="(item, index) in tasks" :key="index">
        <habit-swiper-item ref="swiperItem" class="swiper-item" :task="item" :time-index="index"></habit-swiper-item>
      </div>
    </div>


  </div>
</template>

<script>
import HabitSwiperItem from "@/views/home/ChildComp/HabitComp/HabitSwiperItem";

export default {
  name: "HabitSwiper",

  components: {
    HabitSwiperItem
  },
  props: {
    title: {
      type: Array,
      default: () => ["全部", "起床", "晨间", "中午", "午间", "晚间"]
    }
  },

  data() {
    return {
      currentIndex: 0,
      tasks:[],
    }
  },

  mounted() {


    this.GetTasks();

  },

  methods: {

    // 点击不同时间阴影变化 以及页面变化
    ChangeIndex(index) {
      const unitLengthOfTitle = 50
      let moveLengthOfTitle = unitLengthOfTitle * ( - index)
      this.$refs.shadow.style.transform = `translate(${-moveLengthOfTitle}px)`;

      const unitLengthOfSwiperItem = document.getElementsByClassName("swiper-item")[0].clientWidth;
      let moveLengthOfSwiperItem = unitLengthOfSwiperItem * ( - index)
      let items = document.getElementsByClassName("swiper-item")
      for (let i of items){
        i.style.transform = `translate(${moveLengthOfSwiperItem}px)`;
      }
      this.currentIndex = index;
    },



    // 获取store中数据并整合。
    GetTasks(){
      this.tasks = this.$store.state.tasks.map(item=> item.item)
      // 用来存放所有tasks
      let allTask = [];
      for (let i of this.tasks){
        allTask.push(...i);
      }
      // 把一天的task放入
      this.tasks.unshift(allTask);

    }

  }


}
</script>

<style scoped lang="less">
#swiper-container {
  height: calc(90vh - 49px);
  width: calc(100vw - 2em);


  .title-container {
    display: flex;
    align-items: center;
    position: relative;

    .title-item {
      width: 50px;
      height: 28px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      line-height: 28px;
      color: #999999;
    }


    .shadow {
      position: absolute;
      width: 50px;
      height: 28px;
      background-color: #F2F2F2;
      border-radius: 28px;
      transition: all .6s ease-in-out;
      z-index: -1;
    }

  }


  .swiper-item-container {
    height: calc(100% - 28px);
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    .swiper-item-wrapper {
      width: 1000%;
      .swiper-item {
        margin-top: 10px;
        height: calc(90vh - 49px - 28px - 10px);
        width: calc(100vw - 2em);
        transition: all .6s;
        float: left;
        overflow-x: hidden;
        overflow-y: scroll;

      }

      ::-webkit-scrollbar{
        display: none;
      }
    }


  }

}
</style>