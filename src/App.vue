<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/vue-acceleration">Vue acceleration</router-link> |
      <router-link to="/form-iview">Form Iview</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "JosefinSans";
  src: url("assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf");
}
#app {
  font-family: "JosefinSans";
  background-color: rgb(211, 183, 56);
  color: rgb(196, 50, 83);
  min-height: 100vh;
  padding: 30px;
  text-align: center;
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
