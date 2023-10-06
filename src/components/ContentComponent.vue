<template>
    <div class="flex flex-wrap md:justify-start md:flex-nowrap w-full text-sm">
        <div
            class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 max-w-7xl w-full mt-6 mx-2 py-3 px-2 md:justify-between md:py-0 md:px-4 lg:px-4 xl:mx-auto ">
            <div class="h-auto rounded-lg bg-gray-200">


                <button type="button" v-on:click="createProyect"
                    class=" my-4 mx-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Crear Proyecto
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-3.5 h-3.5"
                        viewBox="0 0 16 16">
                        <path
                            d="M11 13a5 5 0 1 0-4.975-5.5H4A1.5 1.5 0 0 0 2.5 6h-1A1.5 1.5 0 0 0 0 7.5v1A1.5 1.5 0 0 0 1.5 10h1A1.5 1.5 0 0 0 4 8.5h2.025A5 5 0 0 0 11 13zm.5-7.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 1 0z" />
                    </svg>
                </button>

                <div v-for="(proyectos, index) in proyectsProps" :key="index"
                    class="my-4 mx-5 flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                        {{ proyectos.title }}
                    </h3>
                    <p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                        Inicio {{ proyectos.start_date }} hasta {{ proyectos.end_date }}
                    </p>
                    <p class="mt-2 text-gray-800 dark:text-gray-400">
                        {{ proyectos.description }}
                    </p>
                    <a class="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700"
                        href="#"
                        v-on:click="showTaskProyect(proyectos)"
                        >
                        Ver proyecto
                        <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </a>
                </div>

            </div>
            <div class="h-auto rounded-lg bg-gray-200 lg:col-span-2">

                <CreateProyectComponent v-if="viewCreateProyect" />
                <ShowtaskComponent v-if="showProyect" :proyect="proyectSelected" />
            </div>
        </div>

    </div>
</template>
<script lang="ts">

import { defineComponent, ref, type PropType } from 'vue';
import CreateProyectComponent from './CreateProyectComponent.vue';
import ShowtaskComponent from './ShowtaskComponent.vue';

export default defineComponent({
    name: 'ContentComponent',
    setup() {
        return {
            viewCreateProyect: ref(false),
            showProyect: ref(false),
            proyectSelected: ref()
        }
    },
    props: {
        proyectsProps:  {
            type: Array as PropType<any>, // Tipado para la prop 'items'
            required: true,
        },
    },
    methods: {
        createProyect() {
            this.showProyect = false;
            this.viewCreateProyect = !this.viewCreateProyect;
        },
        
        showTaskProyect(proyect: any){
            this.viewCreateProyect = false;
            this.showProyect =  true;
            this.proyectSelected = proyect;
        }

    },
    components: { CreateProyectComponent, ShowtaskComponent }
})
</script>