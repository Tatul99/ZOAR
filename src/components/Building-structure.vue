<template>
    <div class="structure-main flex flex-col items-center px-[200px]">
        <div class="titel uppercase mb-[80px] text-blue text-[40px] leading-[49px] font-bold">ՇԵՆՔԻ Կառուցվածքը</div>
        <div class="items bg-no-repeat w-[100%] h-[400px] mb-[40px] flex items-end" v-for="item in BuildingStructureItems" :key="item.id"
        :style="`background-image:url(${item.image});background-size:100% 100%`"
        >
        <div class="text-white text-[32px] leading-[39px] uppercase mb-[40px] ml-[40px]">{{item.title}}</div>
        </div>
    </div>
</template>

<script setup>
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