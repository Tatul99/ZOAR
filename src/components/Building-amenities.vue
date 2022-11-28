<template>

    <div id="buildingAmenities" class="amenites-main flex flex-col items-center pt-[100px]">
        <div class="title uppercase mb-[80px] text-blue text-[40px] leading-[49px] font-bold">Շենքի հարմարությունները</div>
        <div class="amenities-contain w-[100%] flex justify-between items-center ">
            <div class="container pl-[80px] lg:pl-[200px] w-[60%] lg:w-[50%] flex flex-col justify-center">
                <div v-for="item in amenities" :key="item.id"
                class="text-blue text-base uppercase mb-[15px] font-normal"
                >
                   . {{item.text}}


                <div class="details text-sm" v-if="item.details.length">
                    <div v-for="detail in item.details" :key="detail.detailsId">{{detail.detailsText}}</div>
                </div>
                </div>
            </div>
            <div class="building-grapic-image hidden lg:block w-[900px] h-[900px]"></div>
            <div class="building-grapic-image-mini w-[440px] h-[440px] lg:hidden"></div>
        </div>
    </div>
</template>

<script setup>
let amenities = [
    {id:1,text:'Տեղակայված է արդեն բնակեցված համայնքում',details:[]},
    {id:2,text:'Անմիջապես կողքը չկան ԵՎ չեն լինելու այլ շինարարություններ',details:[]},
    {id:3,text:'Ընդարձակ և սրտաբաց ընդունարան',details:[]},
    {id:4,text:'Բնակիչների կյանքը հեշտացնող ծառայություններ',details:[{detailsId:1,detailsText:'- աղբահանություն ամեն հարկից'},{detailsId:2,detailsText:'- լվաքատան ծառայություն'},{detailsId:3,detailsText:'- բանալի թողնելու, տաքսի և այլ ծառայությունների պատվիրելու հնարավորություն'}]},
    {id:5,text:'ԱՆվտանգություն',details:[]},
    {id:6,text:'Բարձրակարգ վերելակներ',details:[]},
    {id:7,text:'Անմիջապես շենքի տակը գործող  սուպերմարկետ,արագ սննդի կետ',details:[]},
    {id:8,text:'Մոտակայքում մանկապարտեզներ, դպրոցներ, Մարզասրահներ',details:[]},
    {id:9,text:'Օգտագործված են բարձրակարգ նյութեր',details:[]},
    {id:10,text:'9 բալ սեյսմակայունություն',details:[]},
    {id:11,text:'Մեծ ընդարձակ բակ',details:[]},
]

</script>

<style scoped>
.building-grapic-image{
    background-image: url('../../public/images/building-grapic-image.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.building-grapic-image-mini{
    background-image: url('../../public/images/build-image-mini.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>