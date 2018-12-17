<template>
    <div>
        <Header>
            <BackSearch title="排行"/>
        </Header>
        <ul style="padding-top: 1.3333rem ">
            <ComicItem><Num/></ComicItem>
            <ComicItem><Num/></ComicItem>
            <ComicItem><Num/></ComicItem>
        </ul>
    </div>
</template>

<script>
import Header from "../components/Header";
import BackSearch from "../components/BackSearch";
import ComicItem from "../components/ComicItem";
import Num from "../components/Num";
export default {
  name: "Rank",
  components: {Num, ComicItem, BackSearch, Header }
};
</script>

<style scoped>
</style>
