import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { IMetaTag } from "@/router/IMetaTag";

Vue.use(VueRouter);

const prefix = "Avalanche ";
const description = "Avalanche is an open-source platform for decentralized applications and the Internet of Finance."
const metaTags: IMetaTag[] = [
  {
    name: "description",
    content: description
  },
  {
    property: "og:description",
    content: description
  }
];

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: false,
      title: prefix + "Explorer",
      metaTags: metaTags
    }
  },
  {
    path: "/subnets",
    name: "Subnets",
    component: () => import(/* webpackChunkName: "subnets" */ "../views/Subnets.vue"),
    meta: {
      auth: false,
      title: prefix + "Subnets",
      metaTags: metaTags
    }
  },
  {
    path: "/assets",
    name: "Assets",
    component: () => import(/* webpackChunkName: "assets" */ "../views/Assets.vue"),
    meta: {
      auth: false,
      title: prefix + "Assets",
      metaTags: metaTags
    }
  },
  {
    path: "/validators",
    name: "Validators",
    component: () => import(/* webpackChunkName: "validators" */ "../views/Validators.vue"),
    meta: {
      auth: false,
      title: prefix + "Validators",
      metaTags: metaTags
    }
  },
  {
    path: "/search",
    name: "Search",
    component: () => import(/* webpackChunkName: "search" */ "../views/Search.vue"),
    meta: {
      auth: false,
      title: prefix + "Search",
      metaTags: metaTags 
    }
  },
  {
    path: "/tx",
    name: "Transactions",
    component: () => import(/* webpackChunkName: "transactions" */ "../views/Transactions.vue"),
    meta: {
      auth: false,
      title: prefix + "Transactions",
      metaTags: metaTags
    }
  },
  {
    path: "/tx/:id",
    name: "Transaction",
    component: () => import(/* webpackChunkName: "transaction" */ "../views/Transaction.vue"),
    meta: {
      auth: false,
      title: prefix + "Transaction",
      metaTags: metaTags
    }
  },
  {
    path: "/asset/:id",
    name: "Asset",
    component: () => import(/* webpackChunkName: "asset" */ "../views/Asset.vue"),
    meta: {
      auth: false,
      title: prefix + "Asset",
      metaTags: metaTags
    }
  },
  {
    path: "/address/:address",
    name: "Address",
    component: () => import(/* webpackChunkName: "address" */ "../views/Address.vue"),
    meta: {
      auth: false,
      title: prefix + "Address",
      metaTags: metaTags
    }
  },
  {
    path: "/resources",
    name: "Resources",
    component: () => import(/* webpackChunkName: "resources" */ "../views/Resources.vue"),
    meta: {
      auth: false,
      title: prefix + "Resources",
      metaTags: metaTags
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // Scroll to top on route change
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router
