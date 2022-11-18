<template>
  <div class="TeamComponents">
    <van-skeleton title avatar :row="3"> </van-skeleton>
  </div>
</template>
<script>
import { Skeleton } from "vant";
export default {
  name: "TeamComponents",
  components: {
    [Skeleton.name]: Skeleton,
  },
};
</script>
<style lang="less" scoped>
.TeamComponents {
  padding: 1rem 0;
}
</style>
