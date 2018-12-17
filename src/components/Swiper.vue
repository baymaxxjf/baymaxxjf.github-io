<template>
    <div class="swiper">
        <yd-slider style="height: inherit" autoplay="3000">
            <yd-slider-item>
                <a href="#">
                    <img src="http://image.mylife.u17t.com/2018/10/27/1540619999_AFz6ax8nz4dY.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="#">
                    <img src="http://image.mylife.u17t.com/2018/10/27/1540619588_18hZ4DI2BYJM.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="#">
                    <img src="http://image.mylife.u17t.com/2018/10/27/1540618714_NDnSmz8MAnBu.jpg">
                </a>
            </yd-slider-item>
        </yd-slider>
    </div>
</template>

<script>
export default {
  name: "Swiper"
};
</script>

<style scoped>
.swiper {
  /*height: 242px;*/
  box-sizing: content-box;
}
.swiper img {
  height: inherit;
}
</style>
