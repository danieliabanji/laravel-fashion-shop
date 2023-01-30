<template>
  <div class="my-container">
    <section class="outer-container-cards">
      <!-- <button class="carousel-btn left-btn" @click="scrollLft">
        <i class="fa-solid fa-angle-left"></i>
      </button> -->
      <div
        ref="box"
        class="cards-container"
        @mouseover="stopAutoplay"
        @mouseleave="autoplay"
      >
        <div class="d-flex">
          <div class="col" v-for="(item, index) in eyeshadows" :key="index">
            <CardComponent :product="item"></CardComponent>
          </div>
        </div>
      </div>
      <!-- <button class="carousel-btn right-btn" @click="scrollRgt">
        <i class="fa-solid fa-angle-right"></i>
      </button> -->
    </section>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import { store } from "../store";
import axios from "axios";

export default {
  name: "SliderEyeshadow",
  props: {
    product: Object,
  },
  components: { CardComponent },
  data() {
    return {
      store,
      products: [],
      eyeshadows: [],
      autoscroll: 0,
    };
  },
  methods: {
    getEyeshadows() {
      axios.get(`${this.store.apiBaseUrl}/products`).then((res) => {
        this.products = res.data.results;
        // console.log(this.products);
        this.products.forEach((item) => {
          if (item.category_id == 5) {
            this.eyeshadows.push(item);
          }
        });
        // console.log(this.eyeshadows);
      });
    },
    // scrollLft() {
    //   const element = this.$refs.box;
    //   element.scrollBy({
    //     left: -800,
    //     behavior: "smooth",
    //   });
    // },
    scrollRgt() {
      const element = this.$refs.box;
      if (element != null) {
        element.scrollBy({
          left: 800,
          behavior: "smooth",
        });
      }
    },
    autoplay() {
      this.autoscroll = setInterval(() => {
        this.scrollRgt();
      }, 2000);
    },
    stopAutoplay() {
      clearInterval(this.autoscroll);
      this.autoscroll = null;
    },
  },
  mounted() {
    this.getEyeshadows();
    this.autoplay();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

//style slider
.my-container {
  width: 90%;
  margin: 0 auto;
}

.outer-container-cards {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;

  .cards-container {
    width: 100%;
    display: flex;
    overflow-x: auto;
  }
}

.carousel-btn {
  background-color: transparent;
  height: 50px;
  border-style: none;
  color: $grey;

  i {
    font-size: 3rem;
  }
}

.left-btn {
  padding-right: 4rem;
}

.right-btn {
  padding-left: 4rem;
}

//style scrollbar slider
::-webkit-scrollbar {
  height: 7px;
}

// Handle
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background: $secondaryColor;
  width: 5%;
}
</style>
