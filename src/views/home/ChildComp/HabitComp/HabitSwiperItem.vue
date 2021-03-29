<template>
  <div>
    <div class="swiper-item-container" v-for="(item, index) in task" :key="index" ref="swiperItemContainer">
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
import {removeHabit} from "@/network/habit";
import {getYYYY_MM_DD} from "@/utils";

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
    async deleteHabit(index) {
      let deleteEle = this.$refs.delete[index];
      if (deleteEle.classList.contains("delete-active")) {
        try {
          // this.$store.commit("deleteHabit", [this.timeIndex, index])
          const date = getYYYY_MM_DD();
          const res = await removeHabit(date, this.$store.state.phone, this.timeIndex, index);
          if (res.data.code === 200){
            this.$bus.$emit("updateHabit");
            this.task.splice(index,1)
            this.habitTaskClickHandler(index)
            alert("delete success")
          } else{
            alert("delete fail")
          }
        } catch (e) {
          alert("delete fail")
          console.log(e)
        }
      }
    }

  }
}
</script>

<style scoped lang="less">
.swiper-item-container {
  position: relative;

  .swiper-item-wrapper {


    .goLeft {
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

  .delete-active {
    opacity: 1;
  }
}
</style>