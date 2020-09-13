/*
  路由的配置文件
*/
// import Pins from "../pages/Pins";
// import Topics from "../pages/Topics";
// import Home from "../pages/Home";
// import Books from "../pages/Books";
import {lazy} from 'react'

const Pins =lazy(()=>import(/*webpackChunkName:"Pins"*/'../pages/Pins'))
const Topics =lazy(()=>import(/*webpackChunkName:"Topics"*/'../pages/Topics'))
const Home =lazy(()=>import(/*webpackChunkName:"Home"*/'../pages/Home'))
const Books =lazy(()=>import(/*webpackChunkName:"Books"*/'../pages/Books'))


const routes = [
  {
    path: "/", // 路由路径
    component: Home, // 路由组件
    title: "首页",
  },
  {
    path: "/pins",
    component: Pins,
    title: "沸点",
  },
  {
    path: "/topics",
    component: Topics,
    title: "话题",
  },
  {
    path: "/books",
    component: Books,
    title: "小册",
  },
];

export default routes;
