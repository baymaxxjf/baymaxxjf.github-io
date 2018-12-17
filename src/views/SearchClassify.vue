<template>
    <div>
        <Header>
            <BackSearch title="搜索分类"/>
        </Header>
        <SearchContainter>
            <SearchInput/>
            <ComicClassify/>
        </SearchContainter>
        <GuessBox/>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import BackSearch from "../components/BackSearch";
    import SearchContainter from "../components/SearchContainter";
    import SearchInput from "../components/SearchInput";
    import ComicClassify from "../components/ComicClassify";
    import GuessBox from "../components/GuessBox";
    export default {
        name: "SearchClassify",
        components: {GuessBox, ComicClassify, SearchInput, SearchContainter, BackSearch, Header}
    }
</script>

<style scoped>

</style>
