<template>
    <div v-if="!loading" class="container customh">
        <h1 class="tit">I nostri Rossetti:</h1>
        <div class="row">
            <div class="col-3 px-4" v-for="(product, index) in categoryObject" :key="index">
                <FilteredCategoryComponent :product="product"/>
            </div>
        </div>
    </div>
    <div v-else class="loading d-flex justify-content-center align-items-center">
        <div class="squaresLoader">
            <div class="squaresLoaderInner">
                <div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
   
</template>

<script>
import FilteredCategoryComponent from '../../components/FilteredCategoryComponent.vue';

import {store} from '../../store';

import axios from 'axios';

    export default {
    name: "RossettiCategoryPage",

    components: { FilteredCategoryComponent },

    data () {
        return {
            store,
            allProducts: [],
            categoryObject: [],
            loading: true
        }
    },

    methods: {
        getAllProducts() {
            axios.get(`${this.store.apiBaseUrl}/products`).then ((res) => {
                this.allProducts = res.data.results;
                console.log(this.allProducts);

                this.allProducts.forEach((item) => {

                    if (item.category_id == 8) {
                        this.categoryObject.push(item);
                    }
                });
                this.loading = false;
                console.log(this.categoryObject);
            });
        }
    },
    mounted() {
        this.getAllProducts();
    },

}
</script>

<style lang="scss" scoped>
// .loading{
//     height: calc(100vh - 260px);
// }
// .squaresLoaderInner > div {
//   animation: squaresFX4 4s linear infinite;
//   transform-origin: 100px 100px;
// }
// .squaresLoaderInner > div > div {
//   width: 200px;
//   height: 200px;
//   position: absolute;
//   animation: squaresFX3 1s linear infinite;
//   transform-origin: 200px 200px;
// }
// .squaresLoaderInner > div > div div {
//   position: absolute;
//   width: 100px;
//   height: 100px;
//   background: #e15b64;
//   transform-origin: 50px 50px
// }
// .squaresLoaderInner > div > div div:nth-child(1) {
//   left: 0px;
//   top: 0px;
//   animation: squaresFX2 1s linear infinite, squaresFX 4s linear infinite;
// }
// .squaresLoaderInner > div > div div:nth-child(2) {
//   left: 100px;
//   top: 0px;
//   animation: squaresFX2 1s linear infinite, squaresFX 4s linear infinite;
// }
// .squaresLoaderInner > div > div div:nth-child(3) {
//   left: 0px;
//   top: 100px;
//   animation: squaresFX2 1s linear infinite, squaresFX 4s linear infinite;
// }
// .squaresLoaderInner > div > div div:nth-child(4) {
//   left: 100px;
//   top: 100px;
//   transform: scale(1);
//   animation: squaresFX 4s linear infinite
// }
// .squaresLoader {
//   width: 200px;
//   height: 200px;
//   display: inline-block;
//   overflow: hidden;
//   background: #ffffff;
// }
// .squaresLoaderInner {
//   width: 100%;
//   height: 100%;
//   position: relative;
//   transform: translateZ(0) scale(1);
//   backface-visibility: hidden;
//   transform-origin: 0 0; /* see note above */
// }
// .squaresLoaderInner div { box-sizing: content-box; }

// @keyframes squaresFX4 {
//   0%, 25%, 50%, 75%, 100% { animation-timing-function: cubic-bezier(0,1,0,1) }
//   0% { transform: scale(0.7000000000000001) rotate(180deg) }
//   25% { transform: scale(0.7000000000000001) rotate(270deg) }
//   50% { transform: scale(0.7000000000000001) rotate(360deg) }
//   75% { transform: scale(0.7000000000000001) rotate(450deg) }
//   100% { transform: scale(0.7000000000000001) rotate(540deg) }
// }
// @keyframes squaresFX3 {
//   0%, 50%, 100% { animation-timing-function: cubic-bezier(1,0,0,1) }
//   0% { transform: scale(1) }
//   50% { transform: scale(1) }
//   100% { transform: scale(.5) }
// }
// @keyframes squaresFX2 {
//   0%, 50%, 100% { animation-timing-function: cubic-bezier(1,0,0,1) }
//   0% { transform: scale(0) }
//   50% { transform: scale(1) }
//   100% { transform: scale(1) }
// }
// @keyframes squaresFX {
//   0%, 25%, 50%, 75%, 100% { animation-timing-function: cubic-bezier(0,1,0,1) }
//   0% { background: #e15b64 }
//   25% { background: #f47e60 }
//   50% { background: #f8b26a }
//   75% { background: #abbd81 }
//   100% { background: #e15b64 }
// }

</style>