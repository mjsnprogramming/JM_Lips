<template>
    <div id = "pricelist">
    <GlobalHeader></GlobalHeader>
    <PriceListContent></PriceListContent>
    <GlobalFooter></GlobalFooter>
    </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader.vue";
import PriceListContent from "./components/PriceListContent.vue";
import GlobalFooter from "./components/GlobalFooter.vue";

export default {
    name: "pricelist",
    components: {
        GlobalHeader,
        GlobalFooter,
        PriceListContent
    }
}
</script>

<style>

</style>