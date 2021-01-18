import VueRouter from 'vue-router'
import IndexPage from "@/pages/IndexPage";


export default new VueRouter({

    routes: [
        {path: '/', component: IndexPage},
    ]

})
