<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input 
            type="text"
            class="form-control"
            placeholder="Buscar entrada"
            >
        </div>

        <div class="entry-scrollarea">
            <entry 
            v-for="(item, i) in 100"
            :key="item"
            :entryId="i"
            />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Entry: defineAsyncComponent(() => import('./Entry.vue'))
    }
}
</script>

<style lang="scss" scoped>

    .entry-list-container {
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 56px);

        .entry-scrollarea {
            height: calc(100vh - 110px);
            overflow-y: scroll;

            &::-webkit-scrollbar {
                width: 7px;
            }

            &::-webkit-scrollbar-track {
                background: transparent;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #2c3e50;
                border-radius: 12px;
                border: 1px solid white;
            }
        }
    }

</style>
