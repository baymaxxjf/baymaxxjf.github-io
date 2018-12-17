<template>
    <li class="comic-item">
        <a href="#" class="comic-link">
            <div class="img-box ">
                <img src="http://cover.u17i.com/2010/11/2786_1290484999_44z22704KDLT.big.jpg" alt="镇魂街_有妖气">
            </div>
            <div class="comic-info">
                <p class="comic-title">

                    镇魂街
                </p>
                <p class="comic-author">
                    <i class="iconfont icon-yonghu"></i>
                    许辰
                </p>
                <p class="comic-tag">
                    <i class="iconfont icon-biaoqian"></i>
                    少年|魔幻
                </p>
                <p class="comic-number">
                    <i class="iconfont icon-huo"></i>
                    42亿
                </p>
            </div>
        </a>
        <slot></slot>
    </li>
</template>

<script>
export default {
  name: "ComicItem"
};
</script>

<style scoped>
.comic-link {
  display: block;
  width: 10rem;
  height: 2.9333rem;
  padding: 0.1333rem 0.2133rem;
}
.comic-item {
  background: #fff;
  position: relative;
  border-top: 0.133rem solid #f2f2f2;
}
li {
  list-style: none;
}
.img-box {
  float: left;
  width: 2rem;
  height: 2.5333rem;
  left: 0.2133rem;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.comic-info {
  float: left;
  padding-top: 6px;
  margin-left: 10px;
  font-size: 0.48rem;
  line-height: 0.6133rem;
  margin-bottom: 0.05rem;
}
.comic-author,
.comic-tag,
.comic-number {
  color: #999;
  font-size: 0.32rem;
  line-height: 0.5867rem;
}
.comic-info i {
  font-size: 12px;
  color: #ddd;
}

</style>
