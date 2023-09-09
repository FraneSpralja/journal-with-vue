import { defineAsyncComponent } from 'vue';
<template>
    <div class="d-flex justify-content-center h-100">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>

    <fabtn />
</template>

<script>
import { defineAsyncComponent } from 'vue';
    export default {
        components: {
            Fabtn: defineAsyncComponent(() => import('../components/Fabtn.vue'))
        }
    }
</script>

<style lang="scss" scoped>

</style>