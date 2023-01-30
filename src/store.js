import { reactive } from "vue";

export const store = reactive({
  apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBasePath: "http://127.0.0.1:8000/storage/",
  // crumbsLinks: [
  //   {
  //     label: "Home",
  //     name: "home",
  //   },
  //   {
  //     label: "Products",
  //     name: "category",
  //   },
  //   {
  //     label: "Product",
  //     name: "Product details",
  //   },
  // ],
});
