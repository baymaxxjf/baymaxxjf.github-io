<template>
  <div class="home">
    <Header>
      <LogoBox/>
      <!--<BackSearch title="搜索分类"/>-->
    </Header>
    <div class="swiper-box">
      <Swiper style=""/>
    </div>
    <NavList/>
    <RecommendBox/>
    <ComicCommonBox title="人气作品" :data="data"/>
    <ComicCommonBox title="精品推荐" :data="data"/>
    <HitCllick :hitData="hitData"/>
    <TodayRecommend/>
    <ComicCommonBox title="完结漫画" :data="data"/>
    <ComicCommonBox title="全彩漫画" :data="data"/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Swiper from "../components/Swiper";
import NavList from "../components/NavList";
import RecommendBox from "../components/RecommendBox";
import ComicCommonBox from "../components/ComicCommonBox";
import TodayRecommend from "../components/TodayRecommend";
import HitCllick from "../components/HitCllick";
import LogoBox from "../components/LogoBox";
import BackSearch from "../components/BackSearch";
export default {
  name: "home",
  components: {
    BackSearch,
    LogoBox,
    HitCllick,
    TodayRecommend,
    ComicCommonBox,
    RecommendBox,
    NavList,
    Swiper,
    Header
  },
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
      ],
      hitData: [
        {
          img:
            "http://image.mylife.u17t.com/2016/12/20/1482213515_nFr3fF00ZcZB_min.jpg",
          title: "标题标题",
          type: "少女生活",
          author_name: "徐璐AKO"
        },
        {
          img:
            "http://image.mylife.u17t.com/2016/12/20/1482212206_77JJSdJ19DdB_min.jpg",
          title: "标题标题",
          type: "少女生活",
          author_name: "徐璐AKO"
        },
        {
          img:
            "http://image.mylife.u17t.com/2016/12/20/1482213632_oWsrr44wxKk4_min.jpg",
          title: "标题标题",
          type: "少女生活",
          author_name: "徐璐AKO"
        }
      ]
    };
  }
};
</script>
<style>
.swiper-box {
  padding-top: 1.3333rem;
}
</style>
