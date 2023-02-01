<template>
    <div>
        <img class="imagem-responsiva" :src="url" alt="">
    </div>
</template>

<script>
export default{
    props: ['url']
}
</script>

<style scoped>
.imagem-responsiva  {
    width: 100%;
}
</style>