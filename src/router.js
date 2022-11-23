import { createRouter, createWebHashHistory } from "vue-router";

import Aboute from "./components/aboutePage.vue"
import Home from "./components/HomePage.vue"


export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:Home},
        {path:'/Aboute',component:Aboute},

    ]
})