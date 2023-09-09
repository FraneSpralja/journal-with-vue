<template>
    <button class="fab btn btn-primary d-flex justify-content-center align-items-center">
        <i 
        class="fa fa-2x"
        :class="icon"
        ></i>
    </button>
</template>

<script>
export default { 

    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }

}
</script>

<style lang="scss" scoped>

    button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 65px;
        height: 65px;
        border-radius: 100%;
        opacity: .5;
        box-shadow: 1px 3px 7px rgba(25, 25, 25, .8);
        transition: all .3s ease-in-out;

        &:hover {
            opacity: 1;
            box-shadow: 1px 1px 4px rgba(25, 25, 25, 1);
        }
    }

</style>