<template>
  <div id="app">
    <Layout>
      <Sider hide-trigger>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/vue-acceleration">Vue acceleration</router-link> |
        <router-link to="/form-iview">Form Iview</router-link>
      </Sider>
      <Layout>
        <Header
          ><nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/vue-acceleration">Vue acceleration</router-link> |
            <router-link to="/form-iview">Form Iview</router-link>
          </nav></Header
        >
        <Content>
          <router-view />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
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
  font-size: 16px;
}
</style>
