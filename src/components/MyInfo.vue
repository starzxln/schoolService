<template>
  <van-cell :label="label" is-link :to="to">
    <template #icon>
      <!-- <img :src="img" alt="" class="avatar" /> -->
      <van-image width="60" height="60" :src="img" round />
    </template>
    <template #title>
      <h6 class="name">{{ name }}</h6>
    </template>
  </van-cell>
</template>

<script>
import { Cell, Image as VanImage } from "vant";
export default {
  name: "MyInfo",
  props: {
    name: {
      type: String,
      default: "同学你好呀！",
    },
    label: {
      type: String,
      default: "组团宣言",
    },
    img: {
      type: String,
      default: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    },
    to: {
      type: String,
      default: "#",
    },
  },
  components: {
    [Cell.name]: Cell,
    [VanImage.name]: VanImage,
  },
};
</script>
<style lang="less" scoped>
.name {
  margin-left: 10px;
}
</style>
