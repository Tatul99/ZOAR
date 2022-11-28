<template>
    <div id="BuildingStructure" class="structure-main flex flex-col items-center lg:px-[200px]">
        <div class="titel uppercase mb-[80px] text-blue text-[24px] md:text-[40px] leading-[49px] font-bold">ՇԵՆՔԻ Կառուցվածքը</div>
        <div class="items bg-no-repeat w-[100%] h-[150px] md:h-[400px] mb-[40px] flex items-end" v-for="item in BuildingStructureItems" :key="item.id"
    
        >
       <carousel-component :SlideItem="item"/>
        </div>
     
    </div>
</template>

<script setup>
import carouselComponent from "./carousel-component.vue"

let BuildingStructureItems = [
    {
        id:1,
        title:'Նախասրահ',
        image:'./images/image-1.png',
    }, 
    {
        id:2,
        title:'ՄԻՋԱՆՑՔՆԵՐ',
        image:'./images/image-2.png',
    },
     {
        id:3,
        title:'ԱՅԳԻ ԵՎ Խաղահրապարակ',
        image:'./images/image-3.png',
    },
     {
        id:4,
        title:'Կայանատեղի',
        image:'./images/image-4.png',
    },
]
</script>