<template>
    <div>
       <Header>
           <BackSearch title="更新"/>
       </Header>
        <ShowWeekTime style="padding-top: 1.3333rem;"/>
        <ul style="padding-top: 2.5333rem ">
            <ComicItem />
            <ComicItem  />
            <ComicItem  />
        </ul>

    </div>
</template>

<script>
    import Header from "../components/Header";
    import BackSearch from "../components/BackSearch";
    import ShowWeekTime from "../components/ShowWeekTime";
    import ComicItem from "../components/ComicItem";
    export default {
        name: "Renew",
        components: {ComicItem, ShowWeekTime, BackSearch, Header}
    }
</script>

<style scoped>

</style>
