<template>
    <div class="time-box">
        <ul class="time-lists">
            <li>
                二
            </li>
            <li>
                二
            </li>
            <li>
                二
            </li>
            <li>
                二
            </li>
            <li>
                二
            </li>
            <li>
                二
            </li>
            <li class="current">
                昨日
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "ShowWeekTime"
};
</script>

<style scoped>
.time-lists {
  display: flex;
  flex-wrap: wrap;
    align-items: center;
    height: 1.2rem;
  flex-direction: row;
  justify-content: space-around;
}
.time-lists li {
  width: 1.4rem;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.373333rem;
}
.time-box {
    width: 100%;
    position: fixed;
    z-index: auto;
  background: #f2f2f2;
  color: #999999;
}
.current {
    background: #dcf0e8;
    border-radius: 0.4rem;
    color: #1ddd8f;
}
</style>
