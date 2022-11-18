<template>
  <div>
    <NavBar :leftArrow="false" :Title="'队伍'" />
    <MyTeam
      v-for="item in MyTeam"
      :key="item.id"
      :image="item.image"
      :name="item.name"
      :intro="item.intro"
      :time="item.time"
      :quality="item.quality"
      :id="item.id"
      class="team"
    ></MyTeam>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import NavBar from "@/components/NavBar.vue";
import MyTeam from "@/components/MyTeam.vue";
export default {
  name: "Index",
  data() {
    return {
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
    };
  },
  components: {
    TabBar,
    NavBar,
    MyTeam,
  },
};
</script>
<style lang="less" scoped>
#app {
  background: fixed;
}
.team {
  margin-top: 0.5rem;
  border: 1px solid rgb(182, 211, 227);
  box-shadow: 2px 2px rgb(116, 140, 155), -0.2em 0 0.4em rgb(163, 192, 191);
}
</style>
