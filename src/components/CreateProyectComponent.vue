<template>
  <div class="mx-auto my-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Crear proyecto</h1>
    </div>

    <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4" @submit.prevent="createUser">
      <div>
        <label for="title" class="sr-only">Titulo</label>

        <div class="relative">
          <input
            type="text"
            id="title"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Titulo del proyecto"
            v-model="title"
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              class="h-4 w-4 text-gray-400"
              viewBox="0 0 16 16"
              stroke="currentColor"
            >
              <path
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <label for="description" class="sr-only">Descripcion</label>

        <div class="relative">
          <input
            type="text"
            id="description"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Ingresa una descripcion"
            v-model="description"
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>
      <VueDatePicker v-model="date" range locale="es" cancelText="Cancelar" selectText="Aceptar" />

      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          <span
            v-if="isLoading"
            class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
            role="status"
            aria-label="loading"
          ></span>
          Crear proyecto
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CreateProyectComponent',
  emits: ['showAllProyects'],
  data() {
    return {
      title: ref(),
      description: ref(),
      date: ref(),
      isLoading: ref(false)
    }
  },
  mounted() {
    const startDate = new Date()
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
    this.date = [startDate, endDate]
  },
  methods: {
    async createUser() {
      console.log(this.date)
      this.isLoading = true;
      try {
        await axios.post(
          'http://127.0.0.1:8000/api/proyect',
          {
            title: this.title,
            description: this.description,
            start_date: this.date[0],
            end_date: this.date[1]
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              Accept: 'application/json'
            }
          }
        )
        this.showAllProyects()
        
        this.$toast.open({
          message: `Proyecto creado correctamente`,
          type: 'success',
          position: 'bottom-right'
        })
        this.isLoading = false;
      } catch (error: any) {
        console.log(error.response.data.message)
        this.$toast.open({
          message: `${error.response.data.message}`,
          type: 'error',
          position: 'bottom-right'
        })
        this.isLoading = false;
      }
    },
    showAllProyects() {
      this.$emit('showAllProyects')
    }
  }
})
</script>
