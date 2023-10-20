<template>
  <div class="mb-2">
    <div
      v-for="task in tasks"
      :key="task.id"
      class="mb-2 hover:shadow-lg flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
    >
      <div class="inline-grid grid-cols-4 gap-4 px-5 pt-5 pb-2">
        <div class="col-span-3">
          <h3 class="capitalize mt-1 text-lg font-bold text-gray-800 dark:text-white">
            {{ task.title }}
          </h3>
        </div>

        <div class="relative">
          <div class="absolute top-0 right-0">
            <button
              type="button"
              v-on:click="deleteTask(task.id)"
              class="items-center h-4 w-4 rounded-md text-gray-500 focus:outline-none transition-all text-sm"
            >
              <span class="sr-only">Close</span>
              <div class="hs-tooltip inline-block [--trigger:hover] pt-1">
                <a class="hs-tooltip-toggle block text-center" href="javascript:;">
                 <!--  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 -960 960 960"
                    width="18"
                    fill="currentColor"
                  >
                    <path
                      d="m480-424 116 116q11 11 28 11t28-11q11-11 11-28t-11-28L536-480l116-116q11-11 11-28t-11-28q-11-11-28-11t-28 11L480-536 364-652q-11-11-28-11t-28 11q-11 11-11 28t11 28l116 116-116 116q-11 11-11 28t11 28q11 11 28 11t28-11l116-116Zm0 344q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                    />
                  </svg> -->
                  <XMarkIcon class="h-5 w-5" />
                  <div
                    class="text-xs max-w-[10%] hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-1 bg-white border text-sm text-gray-600 rounded-md shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
                    role="tooltip"
                  >
                    Eliminar tarea.
                  </div>
                </a>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="inline-flex gap-3 my-2 px-4">
        <span
          class="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold text-white"
          :class="{
            'bg-blue-500': task.state === 'PENDING',
            'bg-green-500': task.state === 'COMPLETE',
            'bg-yellow-500': task.state === 'INPROGRESS'
          }"
        >
          {{
            task.state === 'COMPLETE'
              ? 'Completado'
              : task.state === 'INPROGRESS'
              ? 'En proceso'
              : 'Pendiente'
          }}
        </span>
      </div>
      <!-- <div class="inline-flex gap-3 my-4">
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
      </div> -->

      <p class="text-gray-800 dark:text-gray-400 px-5 pb-2">
        {{ task.description }}
      </p>

      <small class="text-gray-500 text-xs mt-4 px-5" v-if="task.user.length">
        Usuarios asignados.
      </small>
      <small class="text-gray-500 text-xs px-5 py-2 flex items-center" v-else>
        <span class="py-1 pr-1">Sin usuarios asignados.</span>
        <div class="hs-tooltip inline-block [--trigger:hover] pt-1">
          <a class="hs-tooltip-toggle block text-center" href="javascript:;">
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              width="14"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path
                d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
              />
            </svg> -->
            <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
            <div
              class="text-xs max-w-[10%] hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-1 bg-white border text-sm text-gray-600 rounded-md shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
              role="tooltip"
            >
              Edita la tarea para asignar usuarios.
            </div>
          </a>
        </div>
      </small>

      <div class="flex -space-x-2 mt-2">
        <span
          v-for="user in task.user.slice(0, 4)"
          :key="user.id"
          class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-400 border-gray-100 border-2"
        >
          <span class="text-xs font-medium text-white leading-none uppercase">{{
            user.name.substring(0, 2)
          }}</span>
        </span>

        <div
          class="hs-dropdown relative inline-flex [--placement:top-left]"
          v-if="task.user?.length > 3"
        >
          <button
            id="hs-dropdown-avatar-more"
            class="hs-dropdown-toggle inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 border-2 border-white font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-blue-100 focus:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800"
          >
            <span class="font-medium leading-none">{{ task.user.slice(4).length }} +</span>
          </button>

          <div
            class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
          >
            <a
              v-for="userPlus in task.user.slice(4)"
              :key="userPlus.id"
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              {{ userPlus.name }}
            </a>
          </div>
        </div>
      </div>
      <button
        @click="setIsOpen(true)"
        class="inline-flex justify-center items-center text-gray-600 bg-gray-100 border-t rounded-b-xl py-2 px-4 md:py-2 md:px-5 dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-500 hover:text-gray-100"
      >
        Editar tarea
      </button>
    </div>
  </div>
  <Dialog
    class="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8"
    :open="isOpen"
    @close="setIsOpen"
  >
    <DialogPanel>
      <div class="flex items-center gap-4">
        <DialogTitle class="font-medium sm:text-lg">Deactivate account</DialogTitle>
      </div>
      <DialogDescription> This will permanently deactivate your account </DialogDescription>

      <input
        type="text"
        class="py-3 px-4 my-2 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder="This is placeholder"
      />
      <textarea
        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        rows="3"
        placeholder="This is a textarea placeholder"
      ></textarea>

      <button
        @click="setIsOpen(false)"
        type="button"
        class="py-1 px-2 mt-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Cancelar
      </button>
      <button
        @click="setIsOpen(false)"
        type="button"
        class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Guardar
      </button>
    </DialogPanel>
  </Dialog>
</template>
<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue'
import { QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

export default defineComponent({
  name: 'CardtaskComponent',
  emits: ['deleteTask'],
  components: {QuestionMarkCircleIcon, XMarkIcon},
  setup() {
    return {
      isOpen: ref(false),
    }
  },
  props: {
    tasks: {
      type: Object as PropType<any>,
      required: true
    }
  },
  methods: {
    setIsOpen(value: any) {
      this.isOpen = value
    },
    deleteTask(task_id: string) {
      this.$emit('deleteTask', task_id)
    }
  }
})
</script>
