<template>
    <div class="h-screen">

        <div class="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
            <LoginComponent />
        </div>

    </div>
</template>

<script lang="ts">
import LoginComponent from '@/components/LoginComponent.vue';


export default {
    components: {
        LoginComponent,
    },
};
</script>






   