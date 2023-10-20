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

    </form>
  </div>

  <div class="w-full grid grid-cols-3 gap-4 content-center">
    <div class="">
      <CardtaskComponent :tasks="pendingTask" @deleteTask="deleteTask"/>
    </div>
    <div class="bg-red-500">
      <CardtaskComponent :tasks="inProgressTask" @deleteTask="deleteTask"/>
    </div>
    <div class="bg-red-500">
      <CardtaskComponent :tasks="completeTask" @deleteTask="deleteTask"/>
    </div>
  </div>

  <!-- <di v class="grid mx-5 my-5 grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
    <div
      v-for="(task, index) in tasks"
      :key="index"
      class="hover:shadow-lg flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
    >
      <div class="inline-grid grid-cols-2 gap-4">
        <h3 class="capitalize mt-1 text-lg font-bold text-gray-800 dark:text-white">
          # {{ task.id }} {{ task.title }}
        </h3>

        <div class="relative">
          <div class="absolute top-0 right-0">
            <button
              type="button"
              v-on:click="deleteTask(task.id)"
              class="items-center h-4 w-4 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            >
              <span class="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="inline-flex gap-3 my-4">
        <div class="hs-dropdown relative inline-flex [--placement:bottom-left]">
          <button
            :id="task.id"
            type="button"
            class="hs-dropdown-toggle py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-600 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            {{
              task.state === 'COMPLETE'
                ? 'Completado'
                : task.state === 'INPROGRESS'
                ? 'En proceso'
                : 'Pendiente'
            }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
            >
              <path
                d="M452-388 348-492q-19-19-8.5-43.5T377-560h206q27 0 37.5 24.5T612-492L508-388q-6 6-13 9t-15 3q-8 0-15-3t-13-9Z"
              />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu w-auto transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            :aria-labelledby="task.id"
          >
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Pendiente
            </a>
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              En curso
            </a>
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Completado
            </a>
          </div>
        </div>
      </div>

      <p class="mt-3 text-gray-800 dark:text-gray-400">
        {{ task.description }}
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
  </div> -->
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent, type PropType, ref } from 'vue'
import CardtaskComponent from '@/components/commons/TaskCardComponent.vue'

export default defineComponent({
  name: 'ShowtaskComponent',
  emits: ['getProyectSelected'],
  components: { CardtaskComponent },
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
      createtask: ref(false),
      proyect_id: ref(this.proyect.id),
      pendingTask: ref(),
      inProgressTask: ref(),
      completeTask: ref(),
      stateClass: ref('bg-red-500')
    }
  },
  watch: {
    proyect: {
      handler({ id }) {
        this.proyect_id = id
        this.completeTask = []
        this.inProgressTask = []
        this.pendingTask = []
        this.getAllTaskByProyectId()
      },
      immediate: true
    }
  },
  mounted() {
    this.getAllUsers()
    this.getAllTaskByProyectId()
  },
  methods: {
    getProyectSelected() {
      this.$emit('getProyectSelected', this.proyect.id)
    },
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
            state: 'PENDING',
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
        this.getAllTaskByProyectId()
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
      } catch (error: any) {
        console.log(error.response.data.message)
      }
    },
    async getAllTaskByProyectId() {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/task/${this.proyect_id}/byproyect`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              Accept: 'application/json'
            }
          }
        )
        console.log(data)

      
        this.completeTask = data.tasks.filter((task: any) => task.state === 'COMPLETE')
        this.inProgressTask = data.tasks.filter((task: any) => task.state === 'INPROGRESS')
        this.pendingTask = data.tasks.filter((task: any) => task.state === 'PENDING')

      } catch (error: any) {
        this.completeTask = []
        this.inProgressTask = []
        this.pendingTask = []
        console.log(error.response?.data?.message)
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
        this.getAllTaskByProyectId()
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
        this.getAllTaskByProyectId()
      } catch (error: any) {
        console.log(error.response.data.message)
      }
    },
    async deleteTask(task_id: string) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/task/${task_id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
          }
        })
        this.getAllTaskByProyectId()
        this.$toast.open({
          message: `Tarea eliminada correctamente`,
          type: 'error',
          position: 'bottom-right'
          // all of other options may go here
        })
      } catch (error: any) {
        this.$toast.open({
          message: `${error.response.data.message}`,
          type: 'error',
          position: 'bottom-right'
          // all of other options may go here
        })
      }
    }
  }
})
</script>
