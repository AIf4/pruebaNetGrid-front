<template>
    <div class="mx-auto my-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Registrar cuenta</h1>
        </div>

        <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4" @submit.prevent="createUser">
            <div>
                <label for="email" class="sr-only">Nombre</label>

                <div class="relative">
                    <input type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Ingresar el nombre del usuario" v-model="name" />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                            class="h-4 w-4 text-gray-400" viewBox="0 0 16 16" stroke="currentColor">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div>
                <label for="email" class="sr-only">Correo electronico</label>

                <div class="relative">
                    <input type="email" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Ingresa el email" v-model="email" />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                    </span>
                </div>
            </div>
            <div>
                <label for="password" class="sr-only">Contraseña</label>

                <div class="relative">
                    <input type="password" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Ingrese una contraseña" v-model="password" />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-4 w-4 text-gray-400"
                            viewBox="0 0 16 16" stroke="currentColor">
                            <path
                                d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                            <path
                                d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
                        </svg>
                    </span>
                </div>
            </div>

            <div>
                <select
                    class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200"
                    v-model="rol">
                    <option selected>Selecciona el rol del usuario</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario regular</option>
                </select>
            </div>

            <div class="flex items-center justify-between">
                <p class="text-sm text-gray-500">
                    <router-link to="/" class="underline"> Volver al login </router-link>
                </p>
                <button type="submit"
                    class=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Registrar usuario
                </button>

            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    name: 'RegisterComponent',
    data() {
        return {
            name: "",
            email: "",
            password: "",
            rol: 'Selecciona el rol del usuario'
        }
    },
    methods: {
        async createUser() {
            try {
                await axios.post('http://127.0.0.1:8000/api/user', {
                    "name": this.name,
                    "email": this.email,
                    "password": this.password,
                    "rol_id": this.rol
                }, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                this.$router.push('/');
            } catch (error: any) {
                console.log(error.response.data.message)
            }

        }
    }
})
</script>