<template>
<div class="menu-main pt-[40px] pr-[200px] pb-[60px] pl-[200px] flex justify-between items-center">
    <div class="logo  w-[92px] h-[81px]"></div>
    <div class="navbar">
        <ul class="flex  ">
            <li v-for="item in menuItems" :key="item.id"
            class="text-[16px] cursor-pointer leading-5 ml-[48px]"
            >{{item.title}}</li>
        </ul>
    </div>
</div>
</template>

<script setup>
let menuItems =[
    {id:1,title:'Շենքի կառուցվածքը'},
    {id:2,title:'Շենքի հարմարությունները'},
    {id:3,title:'Փաթեթեներ'},
    {id:4,title:'Հատակագծեր'},
    {id:5,title:'Կապ'}
]
</script>

<style scoped>
.logo{
    background-image: url('../../public/images/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
}
</style>

