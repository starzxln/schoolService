<template>
  <div class="Grid">
    <van-grid :column-num="4" :gutter="10" clickable :border="false">
      <van-grid-item
        v-for="(value, index) in navbar"
        :key="index"
        :icon="value.icon"
        :text="value.text"
        :to="value.url"
      />
    </van-grid>
  </div>
</template>
<script>
import { Grid, GridItem } from "vant";
export default {
  props: {
    navbar: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  name: "Grid",
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
};
</script>
<style lang="less" scoped>
.Grid {
  width: 90%;
  margin: 1rem auto;
  border: 1px solid rgb(215, 210, 210);
  border-radius: 10px;
  background: #fff;
}
</style>
