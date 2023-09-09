<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">07</span>
            <span class="mx-1 fs-3">septiembre</span>
            <span class="mx-2 fs-4 fw-light">2023, jueves</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que sucedio hoy?"></textarea>
    </div>

    <fabtn 
    icon="fa-save"
    />

    <img 
    src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
    alt="entry-picture"
    class="img-thumbnail"
    >

</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Fabtn: defineAsyncComponent(() => import('@/modules/daybook/components/Fabtn.vue'))
    }
}

</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: .2);
}

</style>