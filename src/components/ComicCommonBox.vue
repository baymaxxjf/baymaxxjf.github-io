<template>
    <div class="containter">
        <div class="comic-title-box">
            {{title}}
            <router-link class="comic-more" :to="'/more/'+title">
                更多
                <van-icon name="arrow" />
            </router-link>

        </div>
        <ul class="comic-list">
            <li v-for="(item, key) in data" :key="key">
                <a href="">
                    <img slot="img" :src="item.img">
                    <div  class="book-name" slot="title">{{item.title}}</div>
                </a>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "ComicCommonBox",
  props: {
    title: {
      type: String
    },
    data: {}
  }
};
</script>

<style scoped>
.containter {
  padding: 0 0.346667rem;
  border-bottom: 0.266667rem solid #f2f2f2;
}
.comic-title-box {
  text-align: center;
  height: 40px;
  line-height: 40px;
  position: relative;
  font-size: 0.4rem;

  font-weight: bold;
}
.comic-more {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  color: #bbbbbb;
  font-size: 0.346667rem;
}
.comic-more i {
  vertical-align: -1px;
  margin-left: -5px;
}
.comic-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
}
.comic-list li {
  width: 2.88rem;
  height: 4.413333rem;
  overflow: hidden;

  margin-bottom: 0.373333rem;
}
.comic-list img {
  display: block;
  width: 2.88rem;
  height: 3.64rem;
}
.comic-list .book-name {
  font-size: 0.373333rem;
  text-align: left;
  height: 0.7867rem;
  line-height: 0.7867rem;
}
</style>
