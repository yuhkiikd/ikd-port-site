<template>
  <div id="app">
    <header>
      <div>
        <b-navbar toggleable="sm" type="dark" class="mb-3 bg-dark">
          <b-navbar-brand href="#"></b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav-collapse" class="justify-content-center navbar-expand-sm">
            <b-navbar-nav class="navbar-nav mx-auto text-right">
              <b-nav-item to="/" exact-active-class="active" class="px-md-4 nav-link">Home</b-nav-item>
              <b-nav-item to="/languages" exact-active-class="active" class="px-md-4 nav-link">Languages</b-nav-item>
              <b-nav-item to="/tools" exact-active-class="active" class="px-md-4 nav-link">Tools</b-nav-item>
              <b-nav-item to="/portfolio" exact-active-class="active" class="px-md-4 nav-link">Portfolio</b-nav-item>
              <b-nav-item to="/contact" exact-active-class="active" class="px-md-4 nav-link">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <div class="container text-center">
    <router-view />
    </div>
    <Footer>
      &copy; 2020 ikeda-port-site | <span class="small"><a href="https://icons8.jp/icons" target="_blank" class="text-white">icons by Icons8</a></span>
    </Footer>
  </div>
</template>

<style>
* {
  font-family: "Noto Sans JP", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Footer from "@/components/Footer.vue";
import "@/styles/custom.scss";


export default {
  name: "app",
  components: {
    Footer,
  },
};
</script>