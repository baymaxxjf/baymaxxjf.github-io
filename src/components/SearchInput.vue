<template>
    <div class="search-input">
        <div class="search-content">
            <!-- 搜索输入框 -->
            <input type="text" class="search-input" id="search">
            <!-- 搜索输入框 end -->
            <a href="javascript:;" class="search-btn" id="search-btn">搜索</a>
        </div>
    </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {}
  }
};
</script>

<style scoped>
.search-input {
  padding: 0.3333rem 0.4rem 0.4rem 0.4rem;
  /*height: 39px;*/
}
.search-content:after {
  display: block;
  clear: both;
  content: "";
  font-size: 0;
}
.search-content .search-input {
  float: left;
  width: 7.4667rem;
  height: 1.04rem;
  border: 1px solid #49dda1;
  border-radius: 0.52rem 0 0 0.52rem;
  line-height: 1.0133rem;
  font-size: 0.3733rem;
  padding: 0rem 0rem 0rem 0.4rem;
}
.search-content .search-btn {
  float: left;
  width: 1.7333rem;
  height: 1.04rem;
  background-color: #49dda1;
  line-height: 1.04rem;
  text-align: center;
  border-radius: 0 0.52rem 0.52rem 0;
  color: #fff;
  font-size: 0.4rem;
}
</style>
