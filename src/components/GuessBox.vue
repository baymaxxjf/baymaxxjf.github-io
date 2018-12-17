<template>
    <div class="guess-box">
        <div class="guess-title">猜你喜欢</div>
        <div class="comic-lists-box">
            <ul class="comic-list">
                <li v-for="(item, key) in data" :key="key">
                    <a href="">
                        <img slot="img" :src="item.img">
                        <div  class="book-name" slot="title">{{item.title}}</div>
                    </a>

                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
  name: "GuessBox",
  data() {
    return {
      data: [
        {
          img:
            "http://cover.u17i.com/2010/11/2786_1290484999_44z22704KDLT.sbig.jpg",
          title: "标题标题",
          price: 156.23,
          w_price: 89.36
        },
        {
          img:
            "http://cover.u17i.com/2017/11/108005_1510061825_0GEkZh0WVJ4f.sbig.jpg",
          title: "标题标题",
          price: 256.23,
          w_price: 89.36
        },
        {
          img:
            "http://cover.u17i.com/2017/06/1260_1497244625_ZKc7bCo47OrM.sbig.jpg",
          title: "标题3",
          price: 356.23,
          w_price: 89.36
        }
      ]
    };
  }
};
</script>

<style scoped>
.guess-title {
  color: #999;

  font-size: 0.4rem;
  line-height: 0.4rem;
  padding-left: 0.2667rem;
  margin: 0rem 0rem 0.2667rem 0rem;
}
.comic-lists-box{
    padding: 0 0.346667rem;
}
.guess-box {
  background: #fff;
  margin: 0.8rem 0rem 0.2667rem 0rem;
  padding-bottom: 1.6533rem;
  overflow: hidden;
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
