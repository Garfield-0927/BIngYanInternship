<template>
  <div>
    <div class="swiper-item-container" v-for="(item, index) in task" :key="index">
      <div class="task-item-wrapper">
        <habit-task
            ref="taskItem"
            class="task-item"
            :task="item"
            @click.native="habitTaskClickHandler(index)"
        />
      </div>
      <div class="delete-wrapper" ref="delete" @click="deleteHabit(index)">
        <icon-font name="#icon-stop" fs="50px"></icon-font>
        <div class="delete-text">删除</div>
      </div>
    </div>
  </div>

</template>

<script>
import HabitTask from "@/views/home/ChildComp/HabitComp/HabitTask";
import IconFont from "@/components/common/iconfont/IconFont";

export default {
  name: "HabitSwiperItem",
  components: {
    HabitTask,
    IconFont
  },
  props: {
    task: {
      type: Array,
      required: true
    },
    timeIndex: {
      type: Number,
      required: true
    }
  },

  data() {
    return {}
  },


  mounted() {
  },


  methods: {

    // 显示出删除按钮
    habitTaskClickHandler(index) {
      let ele = this.$refs.taskItem[index].$el;
      ele.classList.toggle("goLeft")
      let deleteEle = this.$refs.delete[index];
      deleteEle.classList.toggle("delete-active");
    },

    // 点击删除
    deleteHabit(index) {
      let deleteEle = this.$refs.delete[index];
      if (deleteEle.classList.contains("delete-active")){
        console.log(this.$store.state.tasks[this.timeIndex].item[index])
      }
    }

  }
}
</script>

<style scoped lang="less">
.swiper-item-container {
  position: relative;

  .swiper-item-wrapper{


    .goLeft{
      transform: translateX(-30%);
    }
  }


  .delete-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8%;
    width: 50px;
    opacity: 0;
    transition: all 1s ease-in-out;
    .delete-text {
      text-align: center;
    }
  }

  .delete-active{
    opacity: 1;
  }
}
</style>