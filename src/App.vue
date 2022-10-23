<script type="text/javascript">
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
  },

  data() {
    return {
      showMenu: false,
      isOpen: false,
      isDark: "",
    };
  },
  methods: {
    onClickChild() {
      this.isDark = !this.isDark;
    },
  },
};
</script>

<template>
  <div id="app" :class="isDark ? 'dark' : ''">
    <main class="min-h-screen text-gray-700 dark:bg-black">
      <NavBar @clicked="onClickChild" />
      <router-view />
      <slot />

      <Footer />
    </main>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  margin-top: 60px;
  scroll-behavior: smooth;
}
</style>
