

<template>
  <NavbarComponent />
  <ContentComponent :proyectsProps="proyects" />
</template>
<script lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
      proyects: ref(),
      token: ref('')
    }
  },
  mounted() {
    this.checkLogin()
    this.getAllProyects();
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
    async getAllProyects() {
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/proyects", {
          headers: {
            Authorization: `Bearer ${this.token}`,
            Accept: "application/json"
          }
        });
        this.proyects = data.proyects
      } catch (error: any) {
        console.log(error.response.data.message)
      }
    }
  },
  components: {
    NavbarComponent,
    ContentComponent
  },
})

</script>
