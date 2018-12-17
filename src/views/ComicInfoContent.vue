
<template>
    <div>
        <Header>
            <BackSearch title="次详细页"/>
        </Header>
        <div style="padding-top: 1.3333rem ">
            <ComicInfo/>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header";
import BackSearch from "../components/BackSearch";

import ComicInfo from "../components/ComicInfo";
export default {
  name: "ComicInfoContent",
  components: {ComicInfo, BackSearch, Header }
};
</script>

<style scoped>
</style>
