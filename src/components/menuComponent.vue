<template>
<div class="menu-main pt-[40px] pr-[200px] pb-[60px] pl-[200px] flex justify-between items-center">
    <div class="logo  w-[92px] h-[81px]"></div>
    <div class="navbar">
        <ul class="flex  ">
            <li v-for="item in menuItems" :key="item.id"
            class="text-[16px] cursor-pointer leading-5 ml-[48px]"
            @click="scrollToId(item.pathId)"
            >{{item.title}}</li>
        </ul>
    </div>
   
</div>
</template>

<script setup>
let menuItems =[
    {id:1,title:'Շենքի կառուցվածքը',pathId:'BuildingStructure'},
    {id:2,title:'Շենքի հարմարությունները',pathId:'buildingAmenities'},
    {id:3,title:'Փաթեթեներ',pathId:'packages'},
    {id:4,title:'Հատակագծեր',pathId:'fllorePlans'},
    {id:5,title:'Կապ'}
]

function scrollToId(id) {
   
    document.getElementById(id).scrollIntoView();
}
</script>

<style scoped>
.logo{
    background-image: url('../../public/images/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
}
</style>

