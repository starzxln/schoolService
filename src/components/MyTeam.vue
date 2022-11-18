<template>
  <van-cell-group inset>
    <van-cell inset :border="true">
      <template #icon>
        <!-- <img :src="img" alt="" class="avatar" /> -->
        <van-image width="40" height="40" :src="image" round />
      </template>
      <template #title>
        <i>{{ name }}</i
        ><br />
        <i class="time">{{ time }}</i>
      </template>
      <template #label>
        <p>{{ intro }}</p>
      </template>
      <template #value>
        <p>队伍性质：{{ quality }}</p></template
      >
    </van-cell>
  </van-cell-group>
</template>
<script>
import { Cell, CellGroup, Image as VanImage } from "vant";
export default {
  name: "MyTeam",
  props: {
    id: { type: Number, default: 1001 },
    image: {
      type: String,
      default: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    },
    name: {
      type: String,
      default: "队伍名称",
    },
    time: { type: String, default: "2022-10-11" },
    intro: {
      type: String,
      default: "队伍介绍",
    },
    quality: {
      type: String,
      default: "班级",
    },
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [VanImage.name]: VanImage,
  },
};
</script>
<style lang="less" scoped>
.time {
  font-size: 0.8em;
  color: rgb(150, 143, 143);
}
</style>
