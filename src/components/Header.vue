<template>
    <div class="header">
        <!--<div class="logo">-->
            <!--<a href="#">-->
                <!--<img src="http://image.mylife.u17t.com/2017/06/29/1498723025_s82Dz8iI8eSI.png" alt="这是logo">-->
            <!--</a>-->
        <!--</div>-->
        <slot></slot>
        <div class="header-tools">
            <router-link  to="/search">
                <yd-icon size="24px" name="search"></yd-icon>
            </router-link>
            <div class="ht-btn ">
                <yd-icon size="24px" name="ucenter-outline"></yd-icon>
                <div class="ht-oneself-slide">

                </div>
            </div>
            <router-link to="/">
                <yd-icon class="home-icon" size="24px" name="home-outline"></yd-icon>
            </router-link>

        </div>

    </div>
</template>

<script>

export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  position: fixed;
    z-index: 2;
  width: 100%;
  padding: 12px;
  padding-bottom: 0;
  height: 1.3333rem;
  background: #fff;
  border: 1px solid #ddd;
}
/*.logo {*/
  /*width: 63px;*/
  /*height: 25px;*/
  /*float: left;*/
/*}*/
/*.logo img {*/
  /*height: 100%;*/
  /*width: 100%;*/
/*}*/
.header-tools {
  float: right;
}
.ht-btn {
  margin: 0 25px;
  display: inline-block;
}

.header-tools i {
  color: forestgreen;
  vertical-align: top;
}
.header-tools .home-icon {
    vertical-align: 1.5px ;
}
</style>
