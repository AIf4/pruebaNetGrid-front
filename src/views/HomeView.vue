

<template>
  <NavbarComponent />
  <ContentComponent :proyectsProps="proyects" />
</template>
<script lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
      proyects: ref(),
      token: ref()
    }
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = localStorage.getItem('token');
      if (!token) {
        localStorage.clear();
        return this.$router.push('/')
      }
      this.token = token;
    },
  },
  components: {
    NavbarComponent,
    ContentComponent
  },
})

</script>
