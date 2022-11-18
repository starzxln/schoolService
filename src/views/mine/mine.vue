<template>
  <div class="mine">
    <NavBar :leftArrow="false" :Title="'我的'" />
    <MyInfo></MyInfo>
    <van-notice-bar
      left-icon="volume-o"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      background="rgb(217,222,225)"
      color="skyblue"
    />
    <van-cell-group inset>
      <van-cell
        v-for="(item, index) in cell"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        to="#"
        is-link
      />
    </van-cell-group>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import { Cell, CellGroup } from "vant";
import MyInfo from "@/components/MyInfo.vue";
import { NoticeBar } from "vant";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Index",
  data() {
    return {
      cell: [
        {
          title: "我的队伍",
          icon: "friends-o",
          to: "#",
        },
        {
          title: "个人信息",
          icon: "diamond-o",
          to: "#",
        },
        {
          title: "帮助",
          icon: "label-o",
          to: "#",
        },
      ],
    };
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [NoticeBar.name]: NoticeBar,
    TabBar,
    MyInfo,
    NavBar,
  },
};
</script>
<style lang="less" scoped>
.mine {
  background-color: #dfebf2;
  min-height: 40rem;
}
</style>
