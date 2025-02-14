<script setup>
import { ref } from 'vue';

const OpenMenu = ref(false)
</script>

<template>
    <header id="header" class="sticky bg-white w-full top-0 inset-x-0 py-5 z-50">
        <nav class="flex flex-row flex-wrap w-full justify-between items-center px-4 md:px-0 mx-auto max-w-sm md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl">
            <figure class="h-8">
                <router-link to="/">
                    <img src="/images/logo-2.png" alt="Logo Fore Coffee" class="object-contain object-center w-full h-full" />
                </router-link>
                <figcaption class="sr-only">Logo Fore Coffee</figcaption>
            </figure>
            <ul class="hidden md:inline-flex space-x-3">
                <li>
                    <router-link to="/about" class="font-medium text-primary px-3 py-2 transition-colors duration-100 ease-in hover:text-secondary">About</router-link>
                </li>
                <li>
                    <router-link to="/menu" class="font-medium text-primary px-3 py-2 transition-colors duration-100 ease-in hover:text-secondary">Menu</router-link>
                </li>
                <li>
                    <router-link to="/store" class="font-medium text-primary px-3 py-2 transition-colors duration-100 ease-in hover:text-secondary">Store</router-link>
                </li>
                <li>
                    <router-link to="/career" class="font-medium text-primary px-3 py-2 transition-colors duration-100 ease-in hover:text-secondary">Career</router-link>
                </li>
                <li>
                    <router-link to="/contact" class="font-medium text-primary px-3 py-2 transition-colors duration-100 ease-in hover:text-secondary">Contact Us</router-link>
                </li>
            </ul>
            <router-link to="#" class=" hidden md:block font-medium text-primary border-2 border-primary rounded-full px-6 py-2 transition-colors duration-100 ease-in hover:bg-primary hover:text-white">Download App</router-link>
            <button @click="OpenMenu = !OpenMenu" class="block">
                <svg v-if="!OpenMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="size-6 fill-gray-500">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>
                <svg v-if="OpenMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="size-6 fill-gray-500">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </button>
        </nav>
    </header>
</template>
