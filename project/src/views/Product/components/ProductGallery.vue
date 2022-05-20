<template>

    <div class="details_image">
        <div class="details_image_large">
            <img :src="`${imgURLTemplate}/${product.imgFileName}`">
            <div class="product_extra" v-if="product.sticker">
                <a href="categories.html">New</a>
            </div>
        </div>
        <div class="details_image_thumbnails d-flex flex-row align-items-start justify-content-between">
            <div class="details_image_thumbnail active" 
                v-for="(img, i) in product.views"
                :key="i"
            >
                <img :src="`${imgURLTemplate}/${img}`">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductGallery',
    props: ['product'],
    data() {
        return {
            imgURLTemplate: "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/",
        }
    }
}
</script>

<style>

</style>