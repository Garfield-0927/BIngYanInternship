<template>
  <div class="main-container">
    <today-task :tasks="tasks"></today-task>
  </div>
</template>

<script>
import TodayTask from "@/views/home/ChildComp/TodayComp/TodayTask";
export default {
  name: "TodayMain",
  components:{
    TodayTask
  },

  data(){
    return{
      tasks: [
        {
          time: "起床",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: true
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: true
            },
          ],
        },
        {
          time: "起床",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: true
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: false
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: false
            },
          ],
        },
        {
          time: "起床",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: false
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: false
            },
          ],
        },
        {
          time: "起床",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: false
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: false
            },
          ],
        },
        {
          time: "起床",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: false
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: false
            },
          ],
        },
        {
          time: "起床",
          item: [
            {
              iconName: "#icon-Washingmachine",
              taskDesc: "洗漱整理",
              completed: false
            },
            {
              iconName: "#icon-chizaocan",
              taskDesc: "记得早餐",
              completed: false
            },
            {
              iconName: "#icon-yingyu",
              taskDesc: "英语听力",
              completed: false
            },
            {
              iconName: "#icon-signal",
              taskDesc: "模电数电",
              completed: false
            },
          ],
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">

.main-container{
  padding-top: 49px;
  height: calc(100vh - 10vh - 36px);
  overflow: scroll;


}

::-webkit-scrollbar {
  width: 0px;
}

</style>