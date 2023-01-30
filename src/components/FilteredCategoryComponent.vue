<template>
    <section v-if="product" class="h-75 my-3 filtered-card">
            <router-link :to="{ name: 'single-product', params: { slug: product.slug } }">
                <div class="pic-filtered">
                  <img :src="`${store.imgBasePath}${product.image}`" class="card-img-top h-75" :alt="product.name"/>  
                </div>
            </router-link>
            
            <div class="card-body">
                <div class="card-title brand-name text-uppercase">
                    {{ product.brand.name }}
                </div>
                <h5 class="card-title product-title truncate">{{ product.name }}</h5>
                <h5 class="card-title product-price">€{{ product.prezzo }}</h5>
            </div>
    </section>
   <section v-else>Out of stock</section>

 
</template>

<script>
import {store} from '../store';

    export default {
        name: 'FilteredCategoryComponent',

        props: {
            product: Object,
        },

        data() {
            return {
                store,
                textMaxLen: 55,
                // item: this.props.product,
                categoryObject: [],
            }
        },

        methods: {
            getFilteredProducts() {
                this.props.product.forEach((item) => {
                    if (item.category_id == 5) {
                        this.categoryObject.push(item);
                    }
                });
                console.log(this.categoryObject);

            }   
        },

        mounted() {
            //this.getFilteredProducts();
        },

        // computed: {
        //     truncateText() {
        //         if (this.product.description.length > this.textMaxLen) {
        //             return this.product.description.substr(0, this.textMaxLen) + "...";
        //         }
        //         return this.product.description;
        //     },
        // },
    };
  
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

h1 {
  font-size: 3rem;
}

.filtered-card {
  padding: 0;

  .pic-filtered{

    height: 350px;
    overflow: hidden;
    &:hover img{
      transform: scale(1.2);
    }
    .card-img-top {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    transition: 300ms ease-in-out;
    clip-path: polygon(1% 0, 99% 0, 99% 100%, 1% 100%);

    &:hover {
      opacity: 0.7;
      transition: 300ms ease-in-out;
    }
  }
  }
}

.brand-name {
  font-size: 1.2rem;
  padding: 1rem 0 1rem 0;
}

.product-title {
  font-size: 1.6rem;
  padding-bottom: 1rem;
}

.product-price {
  font-size: 1.6rem;
  color: $alert;
}


</style>