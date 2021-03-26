<template>
  <div id="clock-in-record-container">
    <clock-in-top-bar/>
    <my-calendar @selectDate="selectDate"/>
    <my-time-line :date="date"/>
  </div>
</template>

<script>
import MyCalendar from "@/components/common/calendar/MyCalendar";
import ClockInTopBar from "@/views/clockinrecord/ChildComp/ClockInTopBar";
import MyTimeLine from "@/components/common/timeline/MyTimeLine";
export default {
  name: "ClockInRecord",
  components:{
    ClockInTopBar,
    MyCalendar,
    MyTimeLine
  },

  data(){
    return{
        date:"",
    }
  },

  methods:{

    /**
     *
     * @param arr 是一个日期数组，第零项年，一月，二日
     */
    selectDate(arr){
      this.date = arr.join("-")
    }
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