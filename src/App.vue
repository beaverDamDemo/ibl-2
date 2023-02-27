<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
      </div>
      <v-spacer></v-spacer>
      <router-link to="/about">
        <v-btn text>
          <span class="mr-2">
            About
          </span>
        </v-btn>
      </router-link>
      <router-link to="/vue-acceleration">
        <v-btn text>
          <span class="mr-2">
            vue-acceleration
          </span>
        </v-btn>
      </router-link>
      <router-link to="/form-iview">
        <v-btn text>
          <span class="mr-2">
            form-iview
          </span>
        </v-btn>
      </router-link>
      <router-link to="/my-form">
        <v-btn text>
          <span class="mr-2">
            my-form
          </span>
        </v-btn>
      </router-link>
      <router-link to="/another-form">
        <v-btn text>
          <span class="mr-2">
            another-form
          </span>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>
