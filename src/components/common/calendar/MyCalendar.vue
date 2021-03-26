<template>
  <div id="my-calendar-container" :style="{width:width, borderRadius:borderRadius}">
    <div class="top">
      <div class="left" @click="leftClickHandler">&lt;last</div>
      <div class="center">{{ month }} 月 {{ year }}</div>
      <div class="right" @click="rightClickHandler">next&gt;</div>
    </div>
    <div class="week">
      <div class="week-item">Sun</div>
      <div class="week-item">Mon</div>
      <div class="week-item">Tue</div>
      <div class="week-item">Wed</div>
      <div class="week-item">Thu</div>
      <div class="week-item">Fri</div>
      <div class="week-item">Sat</div>
    </div>
    <div class="day">

    </div>
  </div>
</template>

<script>

export default {
  name: "MyCalendar",
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      width: "calc(100vw-2em)",
      height: "350px",
      borderRadius: "10px",
    }

  },

  computed: {
    date() {
      const {year, month} = this;
      return {
        year,
        month
      }
    }
  },

  mounted() {

    // 初始化日历
    this.fulfillDayEles(this.year, this.month + 1);

  },

  watch: {

    // 监听年月的变化
    date: function (newV) {
      this.fulfillDayEles(newV.year, newV.month + 1);
    },

    // 监听日的变化
    day: function (newV, oldV) {
      const dayEles = document.getElementsByClassName("dayItem");
      dayEles[newV].classList.add('day-item-active');
      dayEles[oldV].classList.remove('day-item-active');
      this.$emit("selectDate", [this.year, this.month, this.day+1]);
    }
  },


  methods: {

    /**
     * 获取第一天是礼拜几
     * @param year
     * @param month
     * @returns {number}
     */
    getMarginLeft(year, month) {
      let weekEles = document.getElementsByClassName("week-item");
      let firstDay = new Date(year, month - 1, 1).getDay();
      let margin_left = weekEles[firstDay].offsetLeft - weekEles[0].offsetLeft;
      return margin_left;
    },


    /**
     * 根据当前年月填满日历
     * @param year
     * @param month
     */
    fulfillDayEles(year, month) {
      let days = document.getElementsByClassName("dayItem");
      if (days) {
        for (let i = 0; i < days.length;) {
          days[i].remove()
        }
      }
      let MAX_DAY = new Date(year, month - 1, 0).getDate()
      let dayEle = document.getElementsByClassName("day")[0]
      for (let i = 1; i <= MAX_DAY; i++) {
        const ele = document.createElement("div")
        if (i === 1) {
          ele.style.marginLeft = this.getMarginLeft(year, month - 1).toString() + 'px';
        }
        ele.classList.add("dayItem")
        ele.innerHTML = i + "";
        dayEle.appendChild(ele)
        ele.addEventListener("click", () => {
          this.day = parseInt(ele.innerHTML)-1;
        })
      }
    },


    // 切换月份处理
    leftClickHandler() {
      if (this.month === 1) {
        this.month = 12;
        this.year -= 1;
      } else {
        this.month -= 1;
      }
    },
    rightClickHandler() {
      if (this.month === 12) {
        this.month = 1;
        this.year += 1;
      } else {
        this.month += 1;
      }
    }

  }

}
</script>

<style scoped lang="less">
#my-calendar-container {
  background-color: rgb(246, 248, 249);


  .top {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    height: 40px;
    display: flex;
    align-items: center;

    .left {
      flex: 1;
      color: #b1b1b1;
    }

    .center {
      flex: 2;
      text-align: center;
    }

    .right {
      flex: 1;
      color: #b1b1b1;
    }
  }

  .week {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;

    div {
      width: 14%;
      text-align: center;
    }
  }

  .day {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

  }

}


</style>