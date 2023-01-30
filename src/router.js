import { createRouter, createWebHistory } from "vue-router";

import CategoryPage from "./pages/CategoryPage.vue";
import SingleProduct from "./pages/SingleProduct.vue";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import NotFound from "./pages/NotFound.vue";
import ContactUs from "./pages/ContactUs.vue";
import RossettiCategoryPage from "./pages/categories/RossettiCategoryPage.vue";
import EyeshadowCategoryPage from "./pages/categories/EyeshadowCategory.vue";
import BronzerCategoryPage from "./pages/categories/BronzerCategory.vue";
import BlushCategoryPage from "./pages/categories/BlushCategory.vue";
import MascaraCategoryPage from "./pages/categories/MascaraCategory.vue";
import FundationCategoryPage from "./pages/categories/FundationCategory.vue";
import CategoryAll from "./pages/CategoryAll.vue";
import CartComponent from "./pages/CartComponent.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/other",
      name: "other",
      component: CategoryPage,
    },
    {
      path: "/category",
      name: "category",
      component: CategoryAll,
    },
    {
      path: "/product/:slug",
      name: "single-product",
      component: SingleProduct,
    },
    {
      path: "/contactus",
      name: "contactus",
      component: ContactUs,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartComponent,
    },

    // percorsi per categorie in navbar
    {
      path: "/categories/lipstick",
      name: "rossetti-category",
      component: RossettiCategoryPage,
    },

    {
      path: "/categories/eyeshadow",
      name: "eyeshadow-category",
      component: EyeshadowCategoryPage,
    },

    {
      path: "/categories/bronzer",
      name: "bronzer-category",
      component: BronzerCategoryPage,
    },

    {
      path: "/categories/blush",
      name: "blush-category",
      component: BlushCategoryPage,
    },

    {
      path: "/categories/mascara",
      name: "mascara-category",
      component: MascaraCategoryPage,
    },

    {
      path: "/categories/fundation",
      name: "fundation-category",
      component: FundationCategoryPage,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
