<template>
    <div class="back-search">
        <van-icon @click="$router.back(-1)" class="back-icon" name="arrow-left" />
        <span class="title-name">{{title}}</span>
    </div>
</template>

<script>
export default {
  name: "BackSearch",
  components: {},
  props: {
    title: {}
  }
};
</script>

<style scoped>
.back-icon {
  color: forestgreen;
  font-size: 0.48rem;
  vertical-align: middle;
}
.back-search {
  float: left;
  font-size: 0.48rem;
  font-weight: bold;
  line-height: 0.6933rem;
}
.title-name {
  margin-left: 0.15rem;
}
</style>
