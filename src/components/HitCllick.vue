
<template>
    <div class="containter">
        <div class="comic-title-box">
            热力点击
            <router-link class="comic-more" :to="'/more/热力点击'">
                更多
                <van-icon name="arrow" />
            </router-link>

        </div>

        <div class="hit-list" v-for="(item, key) in hitData" :key="key">
            <a href="">
                <div class="hit-pic">
                    <img :src="item.img" >
                </div>
                <div class="author-info-detail">
                    <p class="authorName">{{item.title}}</p>
                    <p class="comicType">{{item.type}}</p>
                    <p class="recommendComicIntroduce">{{item.author_name}}</p>
                </div>
            </a>
        </div>


    </div>
</template>

<script>

export default {
  name: "HitCllick",
    components: {},
    props: {
    title: {
      type: String
    },
    hitData: {

    }
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
.hit-list:after {
  content: "";
  display: block;
  clear: both;
  font-size: 0;
}
.hit-list {
  background-color: #f2f2f2;
  margin-bottom: 0.25rem;
}
.comic-list li {
  width: 2.88rem;
  height: 4.413333rem;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.373333rem;
}
.comic-list img {
  display: block;
  width: 2.88rem;
  height: 3.64rem;
}
.comic-list .book-name {
  font-size: 0.373333rem;
  text-align: center;
  height: 0.7867rem;
  line-height: 0.7867rem;
}
.hit-pic {
  width: 4.6667rem;
  height: 2.2rem;
  float: left;
}
.author-info-detail {
  width: 4.5333rem;
  height: 2.2rem;
  float: left;
  padding: 0.24rem 0rem 0rem 0.8667rem;
}
.author-info {
  margin-left: 0.263333rem;
  width: 6.1rem;
}
.authorName {
  font-weight: bold;
  font-size: 0.4rem;
  color: #444444;
}

.comicType {
  line-height: 01.26667rem;
  color: #999;
  height: 0.9rem;
  font-size: 0.346667rem;
}
.recommendComicIntroduce {
  color: #999999;
  font-size: 0.2933rem;
  line-height: 0.5867rem;
}
.hit-pic img {
  height: 100%;
  width: 100%;
}
</style>
