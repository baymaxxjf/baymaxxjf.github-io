<template>
    <div class="nav-list">
        <yd-grids-group item-height="45px" :rows="2">
            <yd-grids-item link="/Renew">
                <span slot="text">
                    <yd-icon name="clock"></yd-icon>
                    更新
                </span>
            </yd-grids-item>
            <yd-grids-item link="/Rank">
                <span slot="text">
                    <i class="iconfont icon-trophy"></i>
                    排行
                </span>
            </yd-grids-item>
        </yd-grids-group>
    </div>
</template>

<script>
export default {
  name: "NavList"
};
</script>

<style scoped>
.nav-list {
  height: 45px;
  line-height: 1.2rem;
  font-size: 0.6rem;
}
.nav-list span {
  font-size: 16px;
}
.nav-list i {
  margin: 0 4px;
  vertical-align: -1.5px;
  font-size: 0.5rem !important;
}
.nav-list .icon-trophy {
  font-weight: bold;
}

</style>
