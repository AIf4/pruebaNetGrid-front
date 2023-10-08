<template>
  <div>
    <header>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-center sm:text-left">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              {{ proyect.title }}
            </h1>

            <p class="mt-1.5 text-sm text-gray-500">
              {{ proyect.description }}
            </p>
          </div>

          <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              v-if="!createtask"
              v-on:click="setCreatetask"
              class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              Crear Tarea
            </button>
            <button
              v-if="createtask"
              v-on:click="registerTask(proyect.id)"
              class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              Registrar Tarea
            </button>
            <button
              v-if="createtask"
              v-on:click="setCreatetask"
              class="block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring"
              type="button"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </header>

    <form action="#" class="mx-5 grid grid-cols-9 gap-2" v-if="createtask">
      <div class="col-span-4 sm:col-span-3">
        <label for="FirstName" class="block text-sm font-medium text-gray-700"> Titulo </label>

        <input
          type="text"
          v-model="title"
          class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="Titulo de la tarea"
        />
      </div>

      <div class="col-span-4 sm:col-span-3">
        <label for="LastName" class="block text-sm font-medium text-gray-700"> Descripcion </label>

        <input
          type="text"
          v-model="description"
          class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="Descripcion tarea"
        />
      </div>

      <div class="col-span-4 sm:col-span-3">
        <label for="LastName" class="block text-sm font-medium text-gray-700"> Estado </label>

        <select
          v-model="state"
          class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        >
          <option value="0">Selecciona el estado de la tarea</option>
          <option value="PENDING">Pendiente</option>
          <option value="INPROGRESS">En progreso</option>
          <option value="COMPLETE">Completada</option>
        </select>
      </div>
    </form>
  </div>

  <div class="grid mx-5 my-5 grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
    <div
      v-for="(proyecto, index) in proyect.task"
      :key="index"
      class=" hover:shadow-lg  flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
    >
      <div class="inline-grid grid-cols-2 gap-4">
        <h3 class="capitalize mt-1 text-lg font-bold text-gray-800 dark:text-white">
          {{ proyecto.title }}
        </h3>

        <div class="relative">
          <div class="absolute top-0 right-0">
            <button
              type="button"
              v-on:click="deleteTask(proyecto.id)"
              class="items-center h-4 w-4 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3.5 h-3.5"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
        Inicio {{ proyecto.start_date }} hasta {{ proyecto.end_date }}
      </p>
      <p class="mt-2 text-gray-800 dark:text-gray-400">
        {{ proyecto.description }}
      </p>
      <a
        class="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700"
        href="#"
      >
        Ver proyecto
        <svg
          class="w-2.5 h-auto"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent, type PropType, ref } from 'vue'

export default defineComponent({
  name: 'ShowtaskComponent',
  emits: ['showAllProyects'],
  props: {
    proyect: {
      type: Object as PropType<any>,
      required: true
    }
  },
  data() {
    return {
      users: ref(),
      userSelect: ref(),
      title: ref(),
      description: ref(),
      state: ref('0'),
      createtask: ref(false)
    }
  },
  mounted() {
    this.getAllUsers()
  },
  methods: {
    setCreatetask() {
      this.createtask = !this.createtask
    },
    async registerTask(proyect_id: any) {
      try {
        await axios.post(
          'http://127.0.0.1:8000/api/task',
          {
            title: this.title,
            description: this.description,
            state: this.state,
            proyect_id: proyect_id
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              Accept: 'application/json'
            }
          }
        )
        this.createtask = false
        this.showAllProyects()
      } catch (error: any) {
        console.log(error.response.data.message)
      }
    },
    async getAllUsers() {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
          }
        })
        this.users = data.users
        console.log(this.users)
      } catch (error: any) {
        console.log(error.response.data.message)
      }
    },
    async assigneuser(task_id: any) {
      try {
        await axios.post(
          `http://127.0.0.1:8000/api/task/${task_id}/assign`,
          {
            user_id: this.userSelect
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              Accept: 'application/json'
            }
          }
        )
        this.showAllProyects()
      } catch (error: any) {
        console.log(error.response.data.message)
      }
    },
    async unassigneuser(task_id: any, user_id: any) {
      try {
        await axios.post(
          `http://127.0.0.1:8000/api/task/${task_id}/unassign`,
          {
            user_id: user_id
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              Accept: 'application/json'
            }
          }
        )
        this.showAllProyects()
      } catch (error: any) {
        console.log(error.response.data.message)
      }
    },
    deleteTask(id: any) {
      console.log(id)
    },
    showAllProyects() {
      this.$emit('showAllProyects')
    }
  }
})
</script>
