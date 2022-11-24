<template>
<div class="Home-main">
    <menu-component />
    <building-image-component />
    <building-structure />
    <building-amenities />
    <packages-component />
    <flor-plans />
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12266.93893425388!2d44.81233349781493!3d39.768063862702576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1669301211184!5m2!1sen!2s" style="border:0;  width:100vw; height:600px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <footer-component />
</div>
   
</template>
<script setup>
import MenuComponent from "./menuComponent.vue"
import BuildingImageComponent from './building-image.component.vue'
import BuildingStructure from './Building-structure.vue'
import BuildingAmenities from './Building-amenities.vue'
import PackagesComponent from './packages-component.vue'
import FlorPlans from './fllorPlans.vue'
import FooterComponent from './footer-component.vue'

</script>