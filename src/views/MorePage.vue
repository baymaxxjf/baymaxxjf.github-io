<template>
    <div>
        <Header>
            <BackSearch :title="$route.params.title"/>
        </Header>
        <ul style="padding-top: 1.3333rem ">
            <ComicItem></ComicItem>
            <ComicItem></ComicItem>
            <ComicItem></ComicItem>
        </ul>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import ComicItem from "../components/ComicItem";
    import BackSearch from "../components/BackSearch";
    export default {
        name: "MorePage",
        components: {BackSearch, ComicItem, Header}
    }
</script>

<style scoped>

</style>
