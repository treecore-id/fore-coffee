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
                price: 6.5,
            },
            {
                name: "Iced Pandan Oat Latte",
                description: "Latte with a unique taste and aroma from natural pandan extract with oatmilk. Special menu from Fore Coffee",
                image: "/images/menu/pandan-oat-latte.jpg",
                price: 6.5,
            },
            {
                name: "Hot Gula Aren Latte",
                description: "The taste of palm sugar blends with house blend. Fore Coffee's best-selling menu. 100% Indonesian coffee taste.",
                image: "/images/menu/gula-aren-latte-hot.jpg",
                price: 6.5,
            },
            {
                name: "Hot Pandan Oat Latte",
                description: "Latte with a unique taste and aroma from natural pandan extract with oatmilk. Special menu from Fore Coffee",
                image: "/images/menu/pandan-oat-latte-hot.jpg",
                price: 6.5,
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
            {
                name: "Iced Latte",
                description: "Espresso blend with milk with ice",
                image: "/images/menu/latte-ice.jpg",
                price: 6.0,
            },
            {
                name: "Iced Americano",
                description: "Fresh espresso shots topped with water",
                image: "/images/menu/Americano-Ice.jpg",
                price: 4.0,
            },
            {
                name: "Hot Flat White",
                description: "Fore Coffee's signature blend of espresso and milk with thin layer of foam.",
                image: "/images/menu/flat-white-hot.jpg",
                price: 6.0,
            },
            {
                name: "Hot Mocha",
                description: "A combination of chocolate and latte made with classic blend",
                image: "/images/menu/mocha-hot.jpg",
                price: 6.5,
            },
            {
                name: "Hot Cappuccino",
                description: "Espresso shots with warm milk and a thick layer of foam on top",
                image: "/images/menu/cappuccino-hot-sg.jpg",
                price: 6.0,
            },
            {
                name: "Hot Americano",
                description: "Fresh espresso shots topped with water",
                image: "/images/menu/americano-hot.jpg",
                price: 4.0,
            },
            {
                name: "Hot Espresso",
                description: "Classic blend with 100% Indonesian coffee beans extract",
                image: "/images/menu/espresso.jpg",
                price: 3.5,
            },
        ]
    },
    {
        type: "Indonesian Coffee of The Week",
        list: [
            {
                name: "Iced Bali Kintamani",
                description: "Aromatic coffee with fruity and citrus notes",
                image: "/images/menu/indonesia-coffee-cold.jpg",
                price: 5.0,
            },
            {
                name: "Iced Toraja Sapan",
                description: "Aromatic coffee with notes of citrus, spices, and molasses",
                image: "/images/menu/indonesia-coffee-cold.jpg",
                price: 5.0,
            },
            {
                name: "Iced Aceh Gayo",
                description: "Aromatic coffee with notes of chocolate, butterscotch, and spices",
                image: "/images/menu/indonesia-coffee-cold.jpg",
                price: 5.0,
            },
            {
                name: "Hot Bali Kintamani",
                description: "Aromatic coffee with fruity and citrus notes",
                image: "/images/menu/indonesia-coffee-hot.jpg",
                price: 5.0,
            },
            {
                name: "Hot Toraja Sapan",
                description: "Aromatic coffee with notes of citrus, spices, and molasses",
                image: "/images/menu/indonesia-coffee-hot.jpg",
                price: 5.0,
            },
            {
                name: "Hot Aceh Gayo",
                description: "Aromatic coffee with notes of chocolate, butterscotch, and spices",
                image: "/images/menu/indonesia-coffee-hot.jpg",
                price: 5.0,
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
                price: 6.0,
            },
            {
                name: "Iced Cranberricano",
                description: "Combination of coffee and cranberry juice in a glass full of freshness",
                image: "/images/menu/cranbericano.jpg",
                price: 6.0,
            },
        ]
    },
    {
        type: "Non-Coffee",
        list: [
            {
                name: "Iced Matcha Green Tea",
                description: "Made with high quality matcha and milk",
                image: "/images/menu/ice-matcha.jpg",
                price: 6.5,
            },
            {
                name: "Iced Dark Chocolate",
                description: "Made from 100% dark chocolate and milk",
                image: "/images/menu/ice-chocolate.jpg",
                price: 6.5,
            },
            {
                name: "Hot Matcha Green Tea",
                description: "Made with high quality matcha and milk",
                image: "/images/menu/hot-matcha.jpg",
                price: 6.5,
            },
            {
                name: "Hot Dark Chocolate",
                description: "Made from 100% dark chocolate and milk",
                image: "/images/menu/hot-chocolate.jpg",
                price: 6.5,
            },
        ]
    },
    {
        type: "Refreshers",
        list: [
            {
                name: "Iced Hibiscus Passion Fruit",
                description: "Refreshing blend of hibiscus tea with passion fruit and manuka honey",
                image: "/images/menu/ice-hibiscus-passionfruit.jpg",
                price: 6.0,
            },
            {
                name: "Iced Honey Citrus Jasmine",
                description: "A special blend of tropical fruit flavors, manuka honey, and jasmine that is both refreshing and aromatic",
                image: "/images/menu/honey-citrus-jasmine.jpg",
                price: 6.0,
            },
        ]
    },
    {
        type: "Tea",
        list: [
            {
                name: "Iced Fresh Hibiscus Tea",
                description: "Freshly brewed hibiscus tea",
                image: "/images/menu/ice-hibiscus-tea-sg.jpg",
                price: 4.5,
            },
            {
                name: "Iced English Breakfast",
                description: "Black tea with a light sweet notes",
                image: "/images/menu/ice-english-breakfast.jpg",
                price: 4.5,
            },
            {
                name: "Iced Peppermint",
                description: "Pure peppermint tea with aromatic and mint taste",
                image: "/images/menu/ice-peppermint.jpg",
                price: 4.5,
            },
            {
                name: "Iced Pure Chamomile",
                description: "Green tea with notes of chamomile flavor",
                image: "/images/menu/ice-chamomile.jpg",
                price: 4.5,
            },
            {
                name: "Hot Peppermint",
                description: "Pure peppermint tea with aromatic and mint taste",
                image: "/images/menu/hot-peppermint.jpg",
                price: 4.5,
            },
            {
                name: "Hot Pure Chamomile",
                description: "Green tea with notes of chamomile flavor",
                image: "/images/menu/hot-chamomile.jpg",
                price: 4.5,
            },
            {
                name: "Hot English Breakfast",
                description: "Black tea with a light sweet notes",
                image: "/images/menu/hot-english-breakfast.jpg",
                price: 4.5,
            },
        ]
    },
    {
        type: "Ice Frappe",
        list: [
            {
                name: "Iced Matcha Frappe",
                description: "Ice blended matcha",
                image: "/images/menu/matcha-frappe.jpg",
                price: 7.5,
            },
            {
                name: "Iced Salted Caramel Mocha Frappe",
                description: "Ice blended salted caramel mocha",
                image: "/images/menu/salted-caramel-mocha-frappucino.jpg",
                price: 7.5,
            },
            {
                name: "Iced Dark Chocolate Frappe",
                description: "Ice blended dark chocolate",
                image: "/images/menu/dark-chocolate-frappe.jpg",
                price: 7.5,
            },
        ]
    },
    {
        type: "Fore Deli",
        list: [
            {
                name: "Dark Chocolate Brownies",
                description: "Rich and fudgy brownies with intense chocolate flavour",
                image: "/images/menu/dark-choco-brownies.jpg",
                price: 5.0,
            },
            {
                name: "Almond Croissant",
                description: "Viennoiserie with almond filling and sliced almond topping",
                image: "/images/menu/almond-croissant-sg.jpg",
                price: 5.5
            },
            {
                name: "Butter Croissant",
                description: "Viennoiserie with taste and aroma of butter",
                image: "/images/menu/butter-croissant.jpg",
                price: 4.5,
            },
            {
                name: "Kouign Amann",
                description: "Viennoiserie with a layer of sugar in a circular shape",
                image: "/images/menu/kouig-amann.jpg",
                price: 5.0,
            },
            {
                name: "Pain Au Chocolat",
                description: "Viennoiserie with chocolate filling",
                image: "/images/menu/pain-au-chocolate.jpg",
                price: 5.0,
            },
            {
                name: "Mushroom Gruyère Danish",
                description: "Danish with shitake mushroom, onion, and Gruyère cheese.",
                image: "/images/menu/mushroom-gruyère-danish.jpg",
                price: 5.0,
            },
            {
                name: "Cempedak Crumble Tart",
                description: "Sweet and flavourful cempedak, top with lightly salted buttery crumble",
                image: "/images/menu/cempedak-crumble-tart.jpg",
                price: 5.5,
            },
            {
                name: "Creamy Chicken Pain Suisse",
                description: "Croissant-like-brioche bread with tender chicken, creamy sauce with rich flavors and textures",
                image: "/images/menu/creamy-chicken-pain-suisse.jpg",
                price: 6.0,
            },
            {
                name: "Ube Mochi Croissant",
                description: "Croissant dough with local dessert ‘Bo Bo Cha Cha’ sweet potato, yam and coconut mochi.",
                image: "/images/menu/ube-mochi-croissant.jpg",
                price: 6.0,
            },
        ]
    },
    {
        type: "Merchandise",
        list: [
            {
                name: "Single Origin Toraja Sapan Beans",
                description: "",
                image: "/images/menu/toraja-whole-beans.jpg",
                price: 15.0,
            },
            {
                name: "Single Origin Aceh Gayo Beans",
                description: "",
                image: "/images/menu/aceh-whole-beans.jpg",
                price: 15.0,
            },
        ]
    },
];
const menuActive = ref(null)

const ChangeMenu = (val) => {
    menuActive.value = val
};
const SelectMenu = (event) => {
    menuActive.value = event.target.value
}

onMounted(() => {
    menuActive.value = menu[0].type;
});
</script>
<template>
    <main class="flex flex-col mx-auto md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl">
        <section class="grid grid-cols-1 w-full justify-center items-center mx-auto mt-18 px-6 md:px-0">
            <h1 class="font-bold text-5xl text-primary text-center">
                Menu
            </h1>
            <p class="font-normal text-lg text-center text-dark my-6">
                The price shown is applied to the Fore Coffee Application
            </p>
            <p class="w-full rounded-full border-dashed border-2 border-secondary p-3 font-normal text-2xl text-center tracking-wide text-secondary mt-12">
                TYPE OF SERVICES AVAILABLE | <span class="font-bold text-[#5C6336]"> Pick-up </span> &bull; <span class="font-semibold"> Delivery </span>
            </p>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-4 space-x-6 px-6 md:px-0">
            <div class="sm:hidden w-full mt-6">
                <label for="Tab" class="sr-only">Tab</label>
                <select id="Tab" @change="SelectMenu($event)" class="w-full rounded-md border border-gray-300 p-2">
                    <option v-for="data in menu" :value="data.type">{{ data.type }}</option>
                </select>
            </div>
            <div class="hidden md:flex col-span-1 flex-col justify-between">
                <div class="px-4 py-6">
                    <ul class="space-y-3">
                        <li v-for="data in menu">
                            <button @click="ChangeMenu(data.type)" :class="menuActive == data.type ? 'bg-gray-100 text-gray-700' : ' hover:bg-gray-100 hover:text-gray-700'" class="block w-full text-left cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                {{ data.type }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[0].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[0].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[0].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[1].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[1].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[1].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[2].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[2].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[2].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[3].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[3].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[3].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[4].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[4].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[4].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[5].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[5].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[5].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[6].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[6].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[6].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[7].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[7].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[7].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[8].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[8].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[8].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
                                {{ list.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == menu[9].type" class="col-span-1 md:col-span-3 grid grid-cols-2 w-full h-fit py-6 gap-3">
                    <div class="col-span-2 block w-full">
                        <h3 class="font-bold text-xl md:text-2xl text-gray-800">
                            {{ menu[9].type }}
                        </h3>
                    </div>
                    <div v-for="list in menu[9].list" class="flex flex-col 2xl:flex-row gap-3 2xl:gap-0 w-full p-3 rounded-xl border border-gray-200 md:border-0">
                        <figure class="block flex-none 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="list.image" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-1">
                            <h4 class="font-medium text-base md:text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ list.name }}
                            </h4>
                            <h5 class="inline-flex font-bold text-sm text-red-700">SGD${{ list.price }}</h5>
                            <p class="font-normal text-xs md:text-sm leading-loose text-gray-500">
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
