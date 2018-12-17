<template>
    <div>
        <div class="classify-title">
            漫画分类
        </div>
        <ul class="classify-lists">
            <li>
                <a href="">
                    魔幻
                </a>

            </li>
            <li>
                <a href="">
                    生活
                </a>

            </li>
            <li>
                <a href="">
                    动作
                </a>

            </li>
            <li>
                <a href="">
                    魔幻
                </a>

            </li>
            <li>
                <a href="">
                    生活
                </a>

            </li>
            <li>
                <a href="">
                    动作
                </a>

            </li>
            <li>
                <a href="">
                    魔幻
                </a>

            </li>
            <li>
                <a href="">
                    生活
                </a>

            </li>
            <li>
                <a href="">
                    动作
                </a>

            </li>
            <li>
                <a href="">
                    魔幻
                </a>

            </li>

        </ul>
    </div>
</template>

<script>
export default {
  name: "ComicClassify"
};
</script>

<style scoped>
.classify-title {
  margin: 0 auto;
  height: 30px;
  width: 320px;
  text-align: center;
  font-size: 0.4267rem;
  color: #999;
  background-color: #ffffff;
  line-height: 30px;
}
.classify-title:before,
.classify-title:after {
  content: "";
  width: 3.1rem;
  height: 1px;
  display: inline-block;
  background-color: #999;
  vertical-align: middle;
}
.classify-lists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
    border-bottom: 0.2rem solid #f2f2f2;
  padding: 0.3333rem 0.2667rem 0.2667rem 0.2667rem;
  justify-content: space-between;
}
.classify-lists li {
  width: 3rem;
  height: 1.0133rem;
  line-height: .88rem;
    margin: 0rem 0.0267rem 0.2133rem 0.0267rem;
  background-color: #f2f2f2;
  border-radius: 0.5067rem;
  text-align: center;
}
.classify-lists li a {
  color: #666;
  font-size: 0.4rem;
    padding: 10px 38px;
}
</style>
