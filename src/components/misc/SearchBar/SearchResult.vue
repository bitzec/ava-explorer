<template>
    <transaction-result v-if="type===`transaction`" class="search_result" :item="item.data"></transaction-result>
    <address-result v-else-if="type===`address`" class="search_result" :item="item.data"></address-result>
    <asset-result v-else-if="type===`asset`" class="search_result" :item="item.data"></asset-result>
</template>

<script>
import TransactionResult from "@/components/misc/SearchBar/TransactionResult";
import AddressResult from "@/components/misc/SearchBar/AddressResult";
import AssetResult from "@/components/misc/SearchBar/AssetResult";
import { Transaction } from "@/js/Transaction";

export default {
    components: {
        TransactionResult,
        AddressResult,
        AssetResult
    },
    data() {
        return {
            tx: null
        };
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        type() {
            return this.item.type;
        }
    },
    created() {
        if (this.type === "transaction") {
            let tx = new Transaction(this.item.data);
            this.tx = tx;
        }
    }
};
</script>

<style lang="scss">
@use"../../../main";

.search_result {
    padding: 8px 13px;
    background-color: main.$white;
    display: flex;
    position: relative;
    z-index: 1000;

    .data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 9px 10px 4px 16px;
    }

    a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    &:hover {
        background-color: main.$primary-color-light;
    }
}
</style>
<style scoped lang="scss">
</style>
