
import Vue from 'vue';
Vue.use(VueRouter);
import VueRouter from 'vue-router';
import BookManage from "@/views/BookManage";
import AddBook from "@/views/AddBook";
import BookUpdate from "@/views/BookUpdate";


import index from "@/views/index";

// import Book from "@/components/Book";
const routes=[
    {
        path:"/",
        name:"图书管理",
        component:index,
        redirect:"/BookManage",
        children:[
            {path:"/BookManage",name:"查询",component:BookManage},
            {path:"/AddBook",name:"添加",component:AddBook}
        ]},

    {
        path:'/update',
        component:BookUpdate,
        show:false
    }


    // {path:"/Book",component:Book},
    // {path:'',redirect:"/App"}
];

const router=new VueRouter({
    routes
});
export default router