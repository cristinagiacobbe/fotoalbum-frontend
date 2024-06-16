<script>
export default {
    name: 'Loader',
}


</script>
<template>
    <div class="loader">
        <i class="fa-solid fa-spinner fa-spin"></i>
        <h4>... Loading images...</h4>
    </div>
</template>


<style scoped>
.loader {
    height: 50px;
    display: flex;
    justify-content: center;
    gap: 50px;
}
</style>