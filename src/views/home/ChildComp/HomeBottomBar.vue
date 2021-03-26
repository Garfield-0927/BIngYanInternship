<template>
  <div class="home-bottom-bar-container">
    <bottom-bar
      bgc="rgb(246,247,242)"
      height="10vh"
    >

      <div
          class="bottom-bar-item"
          ref="barItem"
          v-for="(item, index) in barItems"
          :key="index"
          :class="{active : index === currentIndex}"
          @click="ChangeView(index)">
        <icon-font :name="item.iconName" fs="30px"></icon-font>
        <div class="desc">{{ item.desc }}</div>
      </div>

    </bottom-bar>

  </div>
</template>

<script>
import BottomBar from "@/components/common/bottombar/BottomBar";
import IconFont from "@/components/common/iconfont/IconFont";
export default {
  name: "HomeBottomBar",
  components:{
    BottomBar,
    IconFont
  },

  data(){
    return{
      currentIndex: 0,
      barItems:[
        {
          iconName: "#icon-notebook",
          desc:"TODAY",
          url:"today"
        },
        {
          iconName:"#icon-sun-deactive",
          desc:"日常习惯",
          url:"habit"
        },
        {
          iconName:"#icon-gengduo-deactive",
          desc:"更多",
          url:"more"
        }
      ],
    }
  },


  mounted() {
    this.currentIndex = this.initialRouter()
  },


  methods:{

    // 改变视图
    ChangeView(index){
      this.currentIndex = index;
    },


    // router bug fix
    initialRouter(){
      let router = this.$route.path;
      let section = router.split("/");
      return this.barItems.findIndex(item=>item.url===section[2]);
    }


  },


  watch:{

    // 观察currentIndex变化
    currentIndex: function(newV, oldV){
      this.barItems[newV].iconName = this.barItems[newV].iconName.replace("-deactive","")
      this.barItems[oldV].iconName+="-deactive";
      this.$router.push(this.barItems[newV].url);

    }
  }


}
</script>

<style scoped lang="less">
.home-bottom-bar-container{

  .bottom-bar-item{
    width: 33%;
    height: 90%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;


    .desc{
      font-size: 10px;
      margin-top: 6px;
      color: #c5c8ce;
    }
  }

  .active{

    .desc{
      color: #000000;
      font-weight: bolder;
    }
  }


}
</style>