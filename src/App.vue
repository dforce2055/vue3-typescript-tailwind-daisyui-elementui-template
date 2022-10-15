<template>
  <section>
    <NavBar />
    <nav>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link> |
      <router-link to="/pricing">
        Pricing
      </router-link> |
      <router-link to="/singup">
        SingUp
      </router-link>
    </nav>
    <router-view />
    <FooterComponent />
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import FooterComponent from './components/FooterComponent.vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'App',
  components: {
    FooterComponent,
    NavBar
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
