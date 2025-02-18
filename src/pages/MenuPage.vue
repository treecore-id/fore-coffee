<script setup>
import { onMounted, ref } from 'vue';

const menu = [
    {
        type: "Fore Signature",
        list: [
            {
                name: "Iced Butterscotch Sea Salt Latte",
                description: "A blend of butterscotch and house blend topped with soft sea salt cream and caramel crumble",
                image: "/images/menu/butterscotch-sea-salt-latte.jpg",
                price: 6.5,
            },
            {
                name: "Iced Gula Aren Latte",
                description: "The taste of palm sugar blends with house blend. Fore Coffee's best-selling menu. 100% Indonesian coffee taste.",
                image: "/images/menu/gula-aren-latte.jpg",
                price: 6.0,
            },
            {
                name: "Iced Pandan Oat Latte",
                description: "Latte with a unique taste and aroma from natural pandan extract with oatmilk. Special menu from Fore Coffee",
                image: "/images/menu/pandan-oat-latte.jpg",
                price: 6.0,
            },
        ]
    },
    {
        type: "Coffee",
        list: [
            {
                name: "Iced Buttercream Tiramisu Latte",
                description: "Buttercream Tiramisu topping on praline latte",
                image: "/images/menu/buttercream-tiramisu.png",
                price: 6.5,
            },
            {
                name: "Iced Buttercream Latte",
                description: "Buttercream Coffee topping on caramel latte",
                image: "/images/menu/buttercream-latte.png",
                price: 6.5,
            },
            {
                name: "Iced Mocha",
                description: "A combination of chocolate and latte made with classic blend",
                image: "/images/menu/mocha-ice.jpg",
                price: 6.5,
            },
        ]
    },
    {
        type: "Americano Series",
        list: [
            {
                name: "Iced Berry Manuka Americano",
                description: "A blend of strawberry and manuka flavors with a refreshing classic blend",
                image: "/images/menu/berry-manuka-americano_sg.jpg",
                price: 6,
            },
            {
                name: "Iced Cranberricano",
                description: "Combination of coffee and cranberry juice in a glass full of freshness",
                image: "/images/menu/cranbericano.jpg",
                price: 6,
            },
        ]
    },
];
const menuActive = ref(null)

const ChangeMenu = (val) => {
    menuActive.value = val
};

onMounted(() => {
    menuActive.value = menu[0].type;
});
</script>
<template>
    <main class="flex flex-col mx-auto md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl">
        <section class="grid grid-cols-1 w-full justify-center items-center mx-auto mt-6">
            <div class="bg-[url('/images/our-story.png')] bg-repeat-x pt-10">
                <h1 class="font-bold text-8xl text-[#5C6336] text-center">
                    Menu
                </h1>
            </div>
            <p class="font-normal text-base text-center text-dark my-20">
                The price shown is applied to the Fore Coffee Application
            </p>
            <p class="w-full rounded-full border-dashed border-2 border-secondary p-3 font-normal text-2xl text-center tracking-wide text-secondary">
                TYPE OF SERVICES AVAILABLE | <span class="font-bold text-[#5C6336]"> Pick-up </span> &bull; <span class="font-semibold"> Delivery </span>
            </p>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-4 space-x-6">
            <div class="col-span-1 flex flex-col justify-between">
                <div class="px-4 py-6">
                    <ul class="space-y-3">
                        <li v-for="data in menu">
                            <button @click="ChangeMenu(data.type)" :class="menuActive == data.type ? 'bg-gray-100 text-gray-700' : ' text-gray-600 hover:bg-gray-100 hover:text-gray-700'" class="block w-full text-left cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                {{ data.type }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[0].type" class="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 w-full py-6 gap-3">
                    <div class="col-span-1 md:col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[0].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[0].list" class="flex w-full p-3">
                        <figure class="block flex-none w-48 h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md pl-6 space-y-1">
                            <h4 class="font-medium text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[1].type" class="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 w-full py-6 gap-3">
                    <div class="col-span-1 md:col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[1].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[1].list" class="flex w-full p-3">
                        <figure class="block flex-none w-48 h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md pl-6 space-y-1">
                            <h4 class="font-medium text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[2].type" class="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 w-full py-6 gap-3">
                    <div class="col-span-1 md:col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[2].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[2].list" class="flex w-full p-3">
                        <figure class="block flex-none w-48 h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md pl-6 space-y-1">
                            <h4 class="font-medium text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
        </section>
    </main>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
}
</style>
