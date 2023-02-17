<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(211, 183, 56);
  color: rgb(196, 50, 83);
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-size: 1.25rem;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
