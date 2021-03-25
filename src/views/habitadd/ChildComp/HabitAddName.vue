<template>
  <div id="habit-name-container">
    <div class="text">
      给该习惯命名:
    </div>
    <div class="name-input">
      <input type="text" v-model="habitName" placeholder="例如跑步、早起等">
    </div>
  </div>
</template>

<script>
export default {
  name: "HabitAddName",
  data() {
    return {
      habitName: ""
    }
  },

  watch:{
    habitName:function(newV){
      this.$emit("setHabitName", newV)
    }
  }
}
</script>

<style scoped lang="less">
#habit-name-container {
  height: 100px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;

  .text {
    font-size: 16px;
    font-weight: bold;
  }

  .name-input {
    margin-top: 16px;

    input {
      border: none;
      border-radius: 6px;
      padding: 15px;
      height: 22px;
      width: 92%;
      margin-top: 2px;
      background-color: #F6F7F2;
    }

    input:focus{
      outline: none;
    }

  }

}
</style>