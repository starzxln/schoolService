<template>
  <div class="navbar">
    <van-nav-bar
      :left-arrow="leftArrow"
      :left-text="leftText"
      :fixed="true"
      :placeholder="true"
      :title="Title"
    />
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  props: {
    leftArrow: {
      type: Boolean,
      default: false,
    },
    leftText: {
      type: String,
      default: "",
    },
    Title: {
      type: String,
      default: "",
    },
  },
  name: "NavBar",
  components: {
    [NavBar.name]: NavBar,
  },
};
</script>

<style lang="less" scoped>
/deep/.van-nav-bar {
  background: rgb(129, 189, 238);
}
</style>
