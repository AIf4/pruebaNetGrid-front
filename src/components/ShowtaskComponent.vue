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
                        <button v-if="!createtask" v-on:click="setCreatetask"
                            class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button">
                            Crear Tarea
                        </button>
                        <button v-if="createtask" v-on:click="registerTask(proyect.id)"
                            class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button">
                            Registrar Tarea
                        </button>
                        <button v-if="createtask" v-on:click="setCreatetask"
                            class="block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring"
                            type="button">
                            X
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <form action="#" class="mx-5   grid grid-cols-9 gap-2" v-if="createtask">
            <div class="col-span-4 sm:col-span-3">
                <label for="FirstName" class="block text-sm font-medium text-gray-700">
                    Titulo
                </label>

                <input type="text" v-model="title"
                    class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Titulo de la tarea">
            </div>

            <div class="col-span-4 sm:col-span-3">
                <label for="LastName" class="block text-sm font-medium text-gray-700">
                    Descripcion
                </label>

                <input type="text" v-model="description"
                    class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Descripcion tarea">
            </div>

            <div class="col-span-4 sm:col-span-3">
                <label for="LastName" class="block text-sm font-medium text-gray-700">
                    Estado
                </label>

                <select v-model="state"
                    class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <option value="0">Selecciona el estado de la tarea</option>
                    <option value="PENDING">Pendiente</option>
                    <option value="INPROGRESS">En progreso</option>
                    <option value="COMPLETE">Completada</option>
                </select>
            </div>
        </form>

        <div v-for="(task, index) in proyect.task" :key="index"
            class="my-6 mx-5 flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                {{ task.title }}
            </h3>
            <p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                <span
                    class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">{{
                        task.state }}</span>
            </p>
            <p class="mt-2 text-gray-800 dark:text-gray-400">
                {{ task.description }}
            </p>

            <h5 class="mt-2 text-lg font-bold text-gray-800 dark:text-white">Usuarios asignados</h5>
            <select v-model="userSelect" v-on:change="assigneuser(task.id)"
                class=" my-2 py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <option value="0">Asignar usuarios</option>
                <option v-for="(user, index) in users" :key="index" :value="user.id">{{ user.name }}</option>
            </select>

            <span v-for="(user, index) in task.user" :key="index"
                class="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                <p class="whitespace-nowrap text-sm">{{ user.name }}</p>
                <button type="button" v-on:click="unassigneuser(task.id, user.id)"
                    class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-blue-600 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-200 focus:text-blue-500">
                    <span class="sr-only">Remove badge</span>
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </span>

        </div>
    </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent, type PropType, ref } from 'vue';

export default defineComponent({
    name: 'ShowtaskComponent',
    props: {
        proyect: {
            type: Array as PropType<any>, // Tipado para la prop 'items'
            required: true,
        }
    },
    data() {
        return {
            users: ref(),
            userSelect: ref(),
            title: ref(),
            description: ref(),
            state: ref("0"),
            createtask: ref(false)
        }
    },
    mounted() {
        this.getAllUsers();
    },
    methods: {
        setCreatetask() {
            this.createtask = !this.createtask;
        },
        async registerTask(proyect_id: any) {
            try {
                await axios.post('http://127.0.0.1:8000/api/task', {
                    "title": this.title,
                    "description": this.description,
                    "state": this.state,
                    "proyect_id": proyect_id
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        Accept: "application/json"
                    }
                });
                this.$router.go(0)
                this.createtask = false;
            } catch (error: any) {
                console.log(error.response.data.message)
            }

        },
        async getAllUsers() {
            try {
                const { data } = await axios.get('http://127.0.0.1:8000/api/users', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        Accept: "application/json"
                    }
                });
                this.users = data.users;
                console.log(this.users)
            } catch (error: any) {
                console.log(error.response.data.message)
            }

        },
        async assigneuser(task_id: any) {
            try {
                await axios.post(`http://127.0.0.1:8000/api/task/${task_id}/assign`, {
                    "user_id": this.userSelect
                },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                            Accept: "application/json"
                        }
                    });
                    this.$router.go(0)
            } catch (error: any) {
                console.log(error.response.data.message)
            }
        },
        async unassigneuser(task_id: any, user_id: any) {
            try {
                await axios.post(`http://127.0.0.1:8000/api/task/${task_id}/unassign`, {
                    "user_id": user_id
                },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                            Accept: "application/json"
                        }
                    });
                    this.$router.go(0)
            } catch (error: any) {
                console.log(error.response.data.message)
            }
        }
    }
})
</script>