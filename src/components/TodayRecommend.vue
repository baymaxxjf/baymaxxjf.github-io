
<template>
    <div class="containter">
        <div class="comic-title-box">
            今日推荐
            <router-link class="comic-more" to='/more/今日推荐'>
                更多
                <van-icon name="arrow" />
            </router-link>

        </div>
        <a href="">
            <div class="comic-list">
                <div class="recommend-pic">
                    <img src="http://cover.u17i.com/2014/06/164862_1403902012_wPwxFCKLBvpU.sbig.jpg" alt="开封奇谈-这个包公不太行_有妖气">
                </div>
                <div class="recommendComicDtails">
                    <div class="recommendTit">
                        <p class="recommendName">开封奇谈-这个包公 /</p>
                        <span class="recommendAuthor">晓晨兽</span>
                    </div>
                    <p class="comicType">少女 | 搞笑 | 生活 | </p>
                    <p class="recommendComicIntroduce">这个包公不太行</p>
                </div>
            </div>
        </a>

    </div>
</template>

<script>
export default {
  name: "TodayRecommend",
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
.recommend-pic {
  width: 2.88rem;
  height: 3.64rem;
  /*float: left;*/
}
.recommendComicDtails {
  /*float: left;*/
  margin-left: 0.263333rem;
  width: 6.1rem;
}
.recommendTit .recommendName {
  display: inline-block;
  height: 1.04rem;
  line-height: 1.04rem;
  font-size: 0.4rem;
  color: #444444;
  float: left;
}
.recommendTit .recommendAuthor {
  font-size: 0.32rem;
  color: #444;
  display: inline-block;
  float: left;
}
.recommendTit {
  height: 1.04rem;
  line-height: 1.04rem;
  font-size: 0.426667rem;
  color: #444444;
  margin-top: 0.4rem;
}
.comicType {
  line-height: 0.906667rem;
  color: #999;
  font-size: 0.346667rem;
}
.recommendComicIntroduce {
  margin-top: 0.18rem;
  width: 5.2rem;
  line-height: 0.613333rem;
  color: #999;
  font-size: 0.32rem;
}
</style>
