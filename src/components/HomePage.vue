<template>
<div class="Home-main">
    <menu-component />
    <building-image-component />
    <building-structure />
    <building-amenities />
    <packages-component />
</div>
   
</template>
<script setup>
import MenuComponent from "./menuComponent.vue"
import BuildingImageComponent from './building-image.component.vue'
import BuildingStructure from './Building-structure.vue'
import BuildingAmenities from './Building-amenities.vue'
import PackagesComponent from './packages-component.vue'

</script>