<template>
  <section class="my-section" v-if="product">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <img
            class="card-img-top"
            :src="`${store.imgBasePath}${product.image}`"
            :alt="'Image of ' + product.name"
          />
        </div>
        <div class="col-6 d-flex flex-column justify-content-around">
          <h3 class="price">€ {{ product.prezzo }}</h3>
          <h3 class="name fw-bold">{{ product.name }}</h3>
          <p>{{ product.description }}</p>

          <ul class="container-colori gx-3">
            <li v-for="(color, index) in product.colors" :key="index">
              <div class="w-100 h-100 colore" :style="{backgroundColor: color.hex_value}"></div>
            </li>
          </ul>

          <a href="#" class="rounded-pill btn-discover align-self-center">Acquista <i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      </div>
    </div>
  </section>

  <section v-else="">//Loading circle...</section>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "SingleProduct",

  data() {
    return {
      store,
      crumbsLinks: store.crumbsLinks,
      product: null,
      colors: [],
    };
  },

  methods: {
    getProduct() {
      axios
        .get(`${this.store.apiBaseUrl}/products/${this.$route.params.slug}`)
        .then((response) => {
          if (response.data.success) {
            this.product = response.data.results;
          } else {
            this.$router.push({ name: "not-found" });
          }
          console.log(this.product);
        });
    },

  },

  mounted() {
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.my-section {
  min-height: calc(100vh - (260px));
  padding-top: 50px;
}

.price {
  font-size: 3rem;
  color: $alert;
}

.name {
  font-size: 3rem;
}

p {
  font-size: 1.3rem;
}

.container-colori {
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;

  li {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }
  }
}

.btn-discover {

  background-color: $mainColor;
  color: $white;
  border-style: none;
  padding: 10px 18px;
  text-decoration: none;
  border-radius: 20px;

  &:hover {
    opacity: 0.9;
    color: $white;
  }
}

img {
  height: 100%;
}
</style>
