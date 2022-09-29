<template>
    <div id = "pricelist">
    <GlobalHeader></GlobalHeader>
    <PriceListPage></PriceListPage>
    <GlobalFooter></GlobalFooter>
    </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader.vue";
import PriceListPage from "./components/PriceListPage.vue";
import GlobalFooter from "./components/GlobalFooter.vue";

export default {
    name: "pricelist",
    components: {
        GlobalHeader,
        GlobalFooter,
        PriceListPage
    }
}
</script>

<style>

</style>