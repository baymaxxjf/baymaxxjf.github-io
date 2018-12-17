<template>
    <div>
        <div class="comic-info">
            <div class="img-box">
                <img src="http://cover.u17i.com/2016/11/1213_1478322908_NjjWJwz3DTTd.big.jpg" alt="">
            </div>
            <div class="comic-info-box">
                <strong class="comic-title">拜见女皇陛下</strong>
                <div class="author-name">ZCloud</div>
                <div class="comic-renqi">人气：<span>11.28亿</span></div>
            </div>
            <div class="comic-collect-btn">
                <yd-icon name="like-outline"></yd-icon>
                <yd-icon name="like" style="display: none"></yd-icon>
            </div>
            <div class="comic-share-btn">
                <yd-icon name="share3"></yd-icon>

            </div>
            <div class="comic-btn-box">
                <a href="/r/395.html" class="comic-btn btn-read">免费试读</a>
            </div>
        </div>
        <div class="comic-intro">

        </div>
        <div class="newest-chapter">

        </div>
    </div>


</template>

<script>
export default {
  name: "ComicInfo"
};
</script>

<style scoped>
.comic-info {
  height: 4.7rem;
  background: #ddd;
  position: relative;
  background: url("../../public/img/bg.png") no-repeat;
}
.img-box {
  position: absolute;
  width: 3.2267rem;
  height: 4.04rem;
  top: 0.4267rem;
  left: 0.2133rem;
  border: 1px solid #fff;
  border-radius: 6px;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.comic-info-box {
  z-index: 2;
  color: #fff;
  position: absolute;
  top: 0.48rem;
  left: 3.76rem;
}
.comic-info-content .comic-info-box .comic-title {
  display: block;
  font-size: 0.45rem;
  line-height: 0.6933rem;
}
.comic-title {
  display: block;
  font-size: 0.45rem;
  line-height: 0.6933rem;
}
.author-name {
  font-size: 0.32rem;
  line-height: 0.2667rem;
  margin-top: 0.4rem;
}
.comic-renqi {
  font-size: 0.32rem;
  line-height: 0.2667rem;
  margin-top: 0.4rem;
}
.comic-renqi span {
  font-size: 0.32rem;
  line-height: 0.56rem;
  color: #ff655d;
}
.comic-collect-btn {
  position: absolute;
  width: 1.066667rem;
  height: 1.066667rem;
  top: 1.326667rem;
  right: 1.893333rem;
  z-index: 1;
  text-align: center;
  background: rgba(200, 201, 204, 0.2);
  border-radius: 50%;
}
.comic-share-btn {
  position: absolute;
  width: 1.066667rem;
  height: 1.066667rem;
  top: 1.326667rem;
  text-align: center;
  right: 0.426667rem;

  z-index: 1;
  background: rgba(200, 201, 204, 0.2);
  border-radius: 50%;
}
.comic-collect-btn i,
.comic-share-btn i {
  text-align: center;
  color: #fff;
  font-weight: lighter;
  display: inline-block;
  vertical-align: middle;
}
.comic-collect-btn:after,
.comic-share-btn:after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: -12px;
}
.comic-btn-box {
  position: absolute;
  top: 3.3333rem;
  left: 3.77rem;
  text-align: center;
}
.comic-btn-box a {
  display: inline-block;
  box-shadow: 0px 5px 10px 0px rgba(29, 221, 143, 0.4);
  height: 1.066667rem;
  text-align: center;
  line-height: 1.066667rem;
  width: 5.333333rem;
  font-size: 0.4267rem;
  border-radius: 0.5rem;
  background: #1ddd8f;
  color: #fff;
}
</style>
