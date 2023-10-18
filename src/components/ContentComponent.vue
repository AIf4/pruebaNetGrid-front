<template>
  <div class="mb-0 flex flex-wrap md:justify-start md:flex-nowrap w-full text-sm">
    <div
      class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 max-w-7xl w-full mt-6 mx-2 py-3 px-2 md:justify-between md:py-0 md:px-4 lg:px-4 xl:mx-auto"
    >
      <div class="rounded-lg bg-gray-20 mx-5 item-center">
        <button
          type="button"
          v-on:click="createProyect"
          class="w-full my-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Crear Proyecto
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="w-3.5 h-3.5"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 13a5 5 0 1 0-4.975-5.5H4A1.5 1.5 0 0 0 2.5 6h-1A1.5 1.5 0 0 0 0 7.5v1A1.5 1.5 0 0 0 1.5 10h1A1.5 1.5 0 0 0 4 8.5h2.025A5 5 0 0 0 11 13zm.5-7.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 1 0z"
            />
          </svg>
        </button>

        <ShowproyectComponent
          :proyects="proyects"
          @showAllProyects="getAllProyects"
          @showTask="showTask"
        />
      </div>
      <div class="h-auto rounded-lg bg-gray-50 lg:col-span-2">
        <CreateProyectComponent v-if="viewCreateProyect" @showAllProyects="getAllProyects" />
        <ShowtaskComponent
          v-if="showProyect"
          :proyect="proyectSelected"
          @getProyectSelected="getProyectSelected"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import CreateProyectComponent from '@/components/CreateProyectComponent.vue'
import ShowtaskComponent from '@/components/ShowtaskComponent.vue'
import ShowproyectComponent from '@/components/ShowproyectComponent.vue'

import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'ContentComponent',
  setup() {
    return {
      viewCreateProyect: ref(false),
      showProyect: ref(false),
      proyectSelected: ref(),
      proyects: ref()
    }
  },
  mounted() {
    this.getAllProyects()
  },
  methods: {
    async getAllProyects() {
      console.log('entra')
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/proyects', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
          }
        })
        this.proyects = data.proyects
        console.log(this.proyects)
      } catch (error: any) {
        console.log(error.response.data.message)
      }
    },
    createProyect() {
      this.showProyect = false
      this.viewCreateProyect = !this.viewCreateProyect
    },
    showTask(proyect: any) {
      this.viewCreateProyect = false
      this.showProyect = true
      this.proyectSelected = proyect
    },
    getProyectSelected(id: any) {
      this.getAllProyects()
      this.proyectSelected = this.proyects.find((proyect: any) => (proyect.id = id))
      console.log("proyecto seleccionado ",this.proyectSelected)
    }
  },
  components: { CreateProyectComponent, ShowtaskComponent, ShowproyectComponent }
})
</script>
