<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in image" :key="index" width="90%">
        <van-image
          width="90%"
          position="center"
          height="10rem"
          fit="cover"
          radius="10px"
          :src="item"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import { Image as VanImage } from "vant";
export default {
  name: "Swipe",
  props: {
    image: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [VanImage.name]: VanImage,
  },
};
</script>
<style>
.my-swipe .van-swipe-item {
  text-align: center;
}
.swiper {
  margin: 1rem 0;
}
</style>
