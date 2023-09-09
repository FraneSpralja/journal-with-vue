<template>
    <div 
    class="entry-container pointer px-2 pt-3 pb-2" 
    @click="$router.push({name: 'entry', params: { id: entryId + 1 }})"
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light pt-1">2023, martes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam provident voluptas culpa esse in aperiam perferendis asperiores quod minus, quas ipsum delectus sunt corrupti numquam vitae commodi? Adipisci vitae incidunt architecto in veniam voluptatem aliquid asperiores recusandae quisquam quibusdam nostrum facilis cupiditate optio provident minus aut, est eaque! Repudiandae alias quo quae saepe ipsa natus.
        </div>
    </div>
</template>

<script>

export default {
    props: {
        entryId: {
            type: Number,
            required: true
        }
    }
}


</script>

<style lang="scss" scoped>

    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: background .2s ease-in;

        &:hover {
            background: lighten($color: gray, $amount: 45);
        }
    }

</style>