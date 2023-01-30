<template>
  <div v-if="!loading" class="container customh">
      <h1 class="tit">Altri Prodotti:</h1>
      <div class="row">
          <div class="col-3 px-4" v-for="(product, index) in other" :key="index">
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
import FilteredCategoryComponent from '../components/FilteredCategoryComponent.vue';

import {store} from '../store';

import axios from 'axios';

  export default {
  name: "RossettiCategoryPage",

  components: { FilteredCategoryComponent },

  data () {
      return {
          store,
          products: [],
          other: [],
          loading: true
      }
  },

  methods: {
    getProducts() {
      axios.get(`${this.store.apiBaseUrl}/products`).then((res) => {
        this.products = res.data.results;
        console.log(this.products);
        this.products.forEach((item) => {
          if ((item.category_id != 1)
          &&(item.category_id != 2)
          &&(item.category_id != 5)
          &&(item.category_id != 6)
          &&(item.category_id != 8)
          &&(item.category_id != 9)){
            this.other.push(item);
          }
        });
        console.log(this.other);
        this.loading = false;
      });
    },
  },
  mounted() {
      this.getProducts();
  },

}
</script>

<style lang="scss" scoped>


</style>