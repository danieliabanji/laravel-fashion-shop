<template>
  <header>
    <HeaderComponent />
  </header>
  <div>
    <NavBarComponent />
  </div>

  <main>
    <!-- <BreadCrumbComponent
        class="row align-items-center"
        :crumbs="crumbsLinks"
        @selected="selected"
      /> -->

      <RouterView v-slot="{Component}">
        <Transition name="routeFX" mode="out-in">
          <component :is="Component"></component>
        </Transition>
    </RouterView>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import NavBarComponent from "./components/NavBarComponent.vue";
// import BreadCrumbComponent from "./components/BreadCrumbComponent.vue";

export default {
  components: {
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    // BreadCrumbComponent,
  },
};
</script>


<style lang="scss" scoped>

.routeFX-enter-from{
  opacity: 0;
  transform: translate(100px , 0);
}
.routeFX-enter-to{
  opacity: 1;
  transform: translate(0 , 0);

}

.routeFX-leave-from{
  opacity: 1;
  transform: translate(0 , 0);
}

.routeFX-leave-to{
  opacity: 0;
  transform: translate(-100px , 0);

}

.routeFX-leave-active, .routeFX-enter-active{
  transition: all 250ms;
}
</style>
