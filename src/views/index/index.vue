<template>
  <div class="index">
    <NavBar :leftArrow="false" :Title="'友友圈'" />
    <Swipe :image="image"></Swipe>
    <Grid :navbar="navbar"></Grid>
    <div class="MyTeam">
      <div class="MyTeam-title">
        <i>我的队伍</i>
      </div>
      <MyTeam
        v-for="item in MyTeam"
        :key="item.id"
        :image="item.image"
        :name="item.name"
        :intro="item.intro"
        :time="item.time"
        :quality="item.quality"
        :id="item.id"
      ></MyTeam>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TabBar from "@/components/TabBar.vue";
import Swipe from "@/components/Swipe.vue";
import Grid from "@/components/Grid.vue";
import MyTeam from "@/components/MyTeam.vue";
export default {
  name: "Index",
  data() {
    return {
      image: [
        "https://shh.bjmu.edu.cn/images/sub_banner.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSxfYmkq4TQ8U_T5btt1AVS-bb6NOuloIYQ&usqp=CAU",
      ], //轮播图
      MyTeam: [
        {
          id: 1001,
          image: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
          name: "计算机科学协会",
          intro: "坐立于贵州中医药大学，以服务于同学们为主",
          quality: "社团",
          time: "2022-10-22",
        },
        {
          id: 1001,
          image: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
          name: "计算机科学协会",
          intro: "坐立于贵州中医药大学，以服务于同学们为主",
          quality: "社团",
          time: "2022-10-22",
        },
      ],
      navbar: [
        { icon: "photo-o", text: "队伍", url: "#", id: 0 },
        { icon: "photo-o", text: "队伍", url: "#", id: 0 },
        { icon: "photo-o", text: "中心", url: "/team", id: 1 },
        { icon: "photo-o", text: "社团", url: "/mine", id: 2 },
      ],
    };
  },
  components: {
    NavBar,
    TabBar,
    Swipe,
    Grid,
    MyTeam,
  },
};
</script>
<style lang="less" scoped>
.index {
  background: linear-gradient(rgb(195, 212, 235), rgb(247, 247, 247));
  min-height: 40rem;
}
.MyTeam {
  background: #fff;
  width: 90%;
  margin: auto;
  border-radius: 10px;
  .MyTeam-title {
    border-bottom: 1px solid rgb(212, 208, 208);
    font-size: 1em;
    color: rgb(202, 205, 209);
    padding: 0 1rem;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
}
</style>
