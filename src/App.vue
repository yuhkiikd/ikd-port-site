<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center">
      <container>
        <row>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link class="text-white nav-link px-md-4" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white nav-link px-md-4" to="/introduction">Introduction</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white nav-link px-md-4" to="/languages">Languages</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white nav-link px-md-4" to="/tools">Tools</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white nav-link px-md-4" to="/work_history">Work history</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text-white nav-link px-md-4" to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </row>
      </container>
    </nav>

    <router-view />
  </div>
</template>

<style>
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