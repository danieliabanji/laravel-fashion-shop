<template>
  <nav aria-label="breadcrumb d-flex align-items-center">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" v-for="(crumb, index) in crumbs" :key="index">
        <router-link
          :to="{ name: crumb.name }"
          class="my-crumb"
          :class="{ disabled: isLast(index) }"
          active-class="active"
          @click="selected(crumb)"
          >{{ crumb.label }}</router-link
        >
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadCrumbComponent",

  props: {
    crumbs: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },

    selected(crumb) {
      this.$emit("selected", crumb);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.my-crumb {
  text-decoration: none;
  color: $mainColor;
  border: none;
  background-color: $white;
  border-bottom: 1px solid transparent;
  transition: 300ms ease-in-out;
  font-size: 1rem;

  &:hover {
    color: $mainColor;
    border-bottom: 1px solid $mainColor;
    transition: 300ms ease-in-out;
  }
}

.active {
  border-bottom: 1px solid $mainColor;
}

.disables {
  color: gray;
}
</style>
