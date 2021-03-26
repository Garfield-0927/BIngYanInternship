<template>
  <div id="clock-in-record-container">
    <clock-in-top-bar/>
    <my-calendar/>
  </div>
</template>

<script>
import MyCalendar from "@/components/common/calendar/MyCalendar";
import ClockInTopBar from "@/views/clockinrecord/ChildComp/ClockInTopBar";
export default {
  name: "ClockInRecord",
  components:{
    ClockInTopBar,
    MyCalendar
  }
}
</script>

<style scoped lang="less">
#clock-in-record-container{
  height: calc(100vh - 49px);
  width: 100vw;
  margin-top: 49px;
  padding: 10px 1em;
  box-sizing: border-box;
}
</style>