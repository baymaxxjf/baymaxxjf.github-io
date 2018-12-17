<template>
    <div>
        <RecommendTitle/>
        <div class="box">
            <ul class="comic-list">
                <li v-for="(item, key) in list" :key="key">
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
import RecommendTitle from "./RecommendTitle";
export default {
  name: "RecommendBox",
  components: { RecommendTitle },
  data() {
    return {
      list: [
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
        },
        {
          img:
            "http://cover.u17i.com/2016/11/1213_1478322908_NjjWJwz3DTTd.sbig.jpg",
          title: "标题",
          price: 456.23,
          w_price: 89.36
        },
        {
          img:
            "http://cover.u17i.com/2017/06/1218_1498209383_G2SuZY0937Pj.sbig.jpg",
          title: "标题",
          price: 556.23,
          w_price: 89.36
        },
        {
          img:
            "http://cover.u17i.com/2012/07/18708_1342409500_oUZzNesnm0rr.sbig.jpg",
          title: "标题",
          price: 656.23,
          w_price: 89.36
        }
      ]
    };
  }
};
</script>

<style scoped>
.img-box {
  display: block;
  width: 108px;
  margin: 0 auto;
  height: 136px;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.box {
  background: #fff;
  border-bottom: 0.266667rem solid #f2f2f2;
  padding: 0 0.346667rem;
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

</style>
