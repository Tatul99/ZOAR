<template>
    <div class="plans-main flex flex-col items-center mt-[40px]">
            <div class="plans-title text-blue text-[40px] uppercase" >Հատակագծեր</div>
            <div class="plans-text text-blue mb-[200px]">Այս բաժնում կարող եք ծանոթանալ շենքում հասանելի բնակարանների հատակագծերինև ընտրել ձեզ առավել հարմար տարբերակը։</div>
            <div class="carousel     relative">
              <div class="corusel-contain max-h-[870px] p-[56px] bg-white shadow-lg flex justify-between  z-10 shadow-gray">
                <div class="for-image flex justify-between">
                    <div class="carousel-items min-w-[400px] flex flex-col flex-wrap  justify-between">
                        <div class=" relative cursor-pointer border-[1px]  border-blue p-[20px] w-[160px] h-[160px]"  v-for="(item,i) in carouselImages" :key="item" @click="chengeImageUrl(item,i)"
                    :class="{
                        carouselimageitems:i!==activeClass,
                        'ml-[40px]':i>3
                    }">
                        <img class="w-[120px]  h-[120px]" :src="item" alt="">
                    </div>
                    </div>
                    <div class="image-div">
                       
                        <img class="w-[520px] h-[520px]" :src="imageUrl" alt="">
                    </div>
                    <div class="carousel0image-text">
                        <ol start="1" class="uppercase text-blue">
                            <li>բնակարանի մակերեսը - 68.9մ2</li>
                            <li>Սենյակների քանակը - 2</li>
                        </ol>
                    </div>
                </div>
                
              </div>
            </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
let carouselImages = ['./images/carousel-image-1.png','./images/carousel-image-2.png','./images/carousel-image-3.png','./images/carousel-image-1.png','./images/carousel-image-2.png','./images/carousel-image-3.png','./images/carousel-image-1.png','./images/carousel-image-2.png']
let imageUrl = ref(carouselImages[0])
let activeClass = ref(0)
function chengeImageUrl(item,i){
    activeClass.value = i
    imageUrl.value = item
    console.log(imageUrl.value);
}

</script>

<style scoped>
.carousel:before{
    content:'';
    background-color: #002366;
    width:100vw;
    height: 240px;
    position: absolute;
    top: -120px;
    left: -15.6vw;
    z-index: -10;
}
.carousel{
    z-index: 10;
}
.carouselimageitems:before{
    content:'';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: aliceblue;
    opacity: 0.5;
}
</style>