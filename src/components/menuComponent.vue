<template>
<div class="menu-main py-[40px] px-[80px] lg:pt-[40px] lg:pr-[200px] lg:pb-[60px] lg:pl-[200px] flex justify-between items-center">
    <div class="logo  w-[92px] h-[81px]"></div>
    <div class="navbar hidden  lg:block">
        <ul class="flex  ">
            <li v-for="item in menuItems" :key="item.id"
            class="text-[16px] cursor-pointer leading-5 ml-[48px]"
            @click="scrollToId(item.pathId)"
            >{{item.title}}</li>
        </ul>
       
    </div>
    <div @click="chengeDialog()" class="mobile-menu-icon block lg:hidden "></div>
    <div v-if="dialog" class="dialog  w-[100vw] h-[100vh] fixed top-0 left-0 bg-white">
        <div  class="close-dialog flex flex-col items-end" @click="dialog = false">
        <img class=" my-[60px] mr-[50px] md:m-[80px]" src="../../public/images/close.png" alt="">
        <div class="menu-items w-full uppercase">
            <ul class="flex flex-col items-start md:items-center mt-[120px]  ">
            <li  v-for="item in menuItems" :key="item.id"
            class="text-[16px]   cursor-pointer leading-[20px] mt-[40px] ml-[48px]"
            @click="scrollToId(item.pathId)"
            >{{item.title}}</li>
        </ul>
        </div>
        </div>
    </div>
</div>
</template>

<script setup>
import {ref} from 'vue'
let dialog = ref(false)
let menuItems =[
    {id:1,title:'Շենքի կառուցվածքը',pathId:'BuildingStructure'},
    {id:2,title:'Շենքի հարմարությունները',pathId:'buildingAmenities'},
    {id:3,title:'Փաթեթեներ',pathId:'packages'},
    {id:4,title:'Հատակագծեր',pathId:'fllorePlans'},
    {id:5,title:'Կապ',pathId:'fotter-component'}
]
function chengeDialog () {
    dialog.value = true
}
function scrollToId(id) {
   dialog.value = false
    document.getElementById(id).scrollIntoView();
}
</script>

<style scoped>
.logo{
    background-image: url('../../public/images/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
}
.mobile-menu-icon{
    width: 40px;
    height: 30px;
    background-image: url(../../public/images/menu-icon.png);
}
.dialog{
   
    z-index: 100;
}
</style>

