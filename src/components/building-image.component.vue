<template>
    <div class="component-mian flex justify-center items-center w-[100%] h-[760px]">
        <div class="image-contein">
            <div class="imag-name text-center font-semibold text-6xl leading-[73px] text-white">ZOAR</div>
            <div class="image-text text-white text-2xl leading-[39px] text-center">Բնակելի Շենք</div>
            <button class="image-button mt-[80px] py-[24px] px-[64px] text-blue">վիդեո տուր</button>
        </div>
    </div>
</template>
<script setup></script>

<style scoped>
.component-mian{
    background-image: url('../../public/images/build-image.png');
    background-repeat: no-repeat;
    background-size: 100% 100%; 
}
.image-button{
    background: rgba(255, 255, 255, 0.3);
}
</style>