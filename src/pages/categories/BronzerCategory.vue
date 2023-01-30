<template>
    <div v-if="!loading" class="container customh">
        <h1 class="tit">I nostri Bronzer:</h1>
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

                    if (item.category_id == 2) {
                        this.categoryObject.push(item);
                    }
                });
                console.log(this.categoryObject);
                this.loading = false;
            });
        }
    },
    mounted() {
        this.getAllProducts();
    },

}
</script>

<style lang="scss" scoped>


</style>