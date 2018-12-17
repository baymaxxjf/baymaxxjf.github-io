<template>
    <div class="search-container">
        <!--<SearchInput/>-->
         <slot></slot>
    </div>
</template>

<script>
    import SearchInput from "./SearchInput";
    export default {
        name: "SearchContainter",
        components: {SearchInput}
    }
</script>

<style scoped>
.search-container{
    background: #fff;
    padding-top: 1.3333rem;
}
</style>
