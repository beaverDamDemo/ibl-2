<template>
  <div id="app" class="layout">
    <Layout>
      <Sider hide-trigger :style="{ background: '#fff' }">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">Home</router-link>
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              <router-link to="/vue-acceleration">Acc</router-link>
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              <router-link to="/form-iview">Form</router-link>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                <router-link to="/">Home</router-link>
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-analytics"></Icon>
                <router-link to="/vue-acceleration">Acc</router-link>
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-paper"></Icon>
                <router-link to="/form-iview">Form</router-link>
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Content :style="{ padding: '0 50px' }">
          <Breadcrumb :style="{ margin: '20px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="min-height: 200px">
              <router-view />
            </div>
          </Card>
        </Content>
        <Footer class="layout-footer-center"
          >2011-2016 &copy; TalkingData</Footer
        >
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
  text-align: center;
  font-size: 16px;
}
</style>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: url("../public/logo.png") no-repeat;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
