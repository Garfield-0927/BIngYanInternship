import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

    tasks: [
      {
        time: "起床",
        item: [
          {
            iconName: "#icon-Washingmachine",
            taskDesc: "洗漱整理",
            completed: false,
            completedBgc: "#CCFF99",
            daysInARow: 1,
          },
          {
            iconName: "#icon-chizaocan",
            taskDesc: "记得早餐",
            completed: false,
            completedBgc: "#FFCC33",
            daysInARow: 2,
          },
          {
            iconName: "#icon-yingyu",
            taskDesc: "英语听力",
            completed: true,
            completedBgc: "#CC6699",
            daysInARow: 0,
          },
          {
            iconName: "#icon-signal",
            taskDesc: "模电数电",
            completed: false,
            completedBgc: "#99CCFF",
            daysInARow: 3,
          },
        ],
      },
      {
        time: "晨间",
        item: [
          {
            iconName: "#icon-Washingmachine",
            taskDesc: "洗漱整理",
            completed: false,
            completedBgc: "#CCFF99",
            daysInARow: 1,
          },
          {
            iconName: "#icon-chizaocan",
            taskDesc: "记得早餐",
            completed: false,
            completedBgc: "#FFCC33",
            daysInARow: 2,
          },
          {
            iconName: "#icon-yingyu",
            taskDesc: "英语听力",
            completed: false,
            completedBgc: "#CC6699",
            daysInARow: 0,
          },
          {
            iconName: "#icon-signal",
            taskDesc: "模电数电",
            completed: false,
            completedBgc: "#99CCFF",
            daysInARow: 3,
          },
        ],
      },
      {
        time: "中午",
        item: [
          {
            iconName: "#icon-Washingmachine",
            taskDesc: "洗漱整理",
            completed: false,
            completedBgc: "#CCFF99",
            daysInARow: 1,
          },
          {
            iconName: "#icon-chizaocan",
            taskDesc: "记得早餐",
            completed: false,
            completedBgc: "#FFCC33",
            daysInARow: 2,
          },
          {
            iconName: "#icon-yingyu",
            taskDesc: "英语听力",
            completed: false,
            completedBgc: "#CC6699",
            daysInARow: 0,
          },
          {
            iconName: "#icon-signal",
            taskDesc: "模电数电",
            completed: false,
            completedBgc: "#99CCFF",
            daysInARow: 3,
          },
        ],
      },
      {
        time: "午间",
        item: [
          {
            iconName: "#icon-Washingmachine",
            taskDesc: "洗漱整理",
            completed: false,
            completedBgc: "#CCFF99",
            daysInARow: 1,
          },
          {
            iconName: "#icon-chizaocan",
            taskDesc: "记得早餐",
            completed: false,
            completedBgc: "#FFCC33",
            daysInARow: 2,
          },
          {
            iconName: "#icon-yingyu",
            taskDesc: "英语听力",
            completed: false,
            completedBgc: "#CC6699",
            daysInARow: 0,
          },
          {
            iconName: "#icon-signal",
            taskDesc: "模电数电",
            completed: false,
            completedBgc: "#99CCFF",
            daysInARow: 3,
          },
        ],
      },
      {
        time: "晚间",
        item: [
          {
            iconName: "#icon-Washingmachine",
            taskDesc: "洗漱整理",
            completed: false,
            completedBgc: "#CCFF99",
            daysInARow: 1,
          },
          {
            iconName: "#icon-chizaocan",
            taskDesc: "记得早餐",
            completed: false,
            completedBgc: "#FFCC33",
            daysInARow: 2,
          },
          {
            iconName: "#icon-yingyu",
            taskDesc: "英语听力",
            completed: false,
            completedBgc: "#CC6699",
            daysInARow: 0,
          },
          {
            iconName: "#icon-signal",
            taskDesc: "模电数电",
            completed: false,
            completedBgc: "#99CCFF",
            daysInARow: 3,
          },
        ],
      },
      {
        time: "睡前",
        item: [
          {
            iconName: "#icon-Washingmachine",
            taskDesc: "洗漱整理",
            completed: false,
            completedBgc: "#CCFF99",
            daysInARow: 1,
          },
          {
            iconName: "#icon-chizaocan",
            taskDesc: "记得早餐",
            completed: false,
            completedBgc: "#FFCC33",
            daysInARow: 2,
          },
          {
            iconName: "#icon-yingyu",
            taskDesc: "英语听力",
            completed: false,
            completedBgc: "#CC6699",
            daysInARow: 0,
          },
          {
            iconName: "#icon-signal",
            taskDesc: "模电数电",
            completed: false,
            completedBgc: "#99CCFF",
            daysInARow: 3,
          },
        ],
      },
    ]


  },
  mutations: {

    /**
     *
     * @param state
     * @param payload [Array] 第零个是时间 第一个是habit
     */
    appendHabit(state, payload){
      let timeIndex = state.tasks.findIndex(item=>item.time===payload[0]);
      state.tasks[timeIndex].item.push(payload[1]);
    },

    /**
     *
     * @param state
     * @param payload  [Array] 第零个是时间索引 第一个是task索引
     */
    deleteHabit(state, payload){
      state.tasks[payload[0]].item.splice(payload[1], 1);
    }
  },



  actions: {

  }
})

export default store