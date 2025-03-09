<script setup>
import { onMounted, ref } from 'vue';

const stores = [
    {
        type: "Indonesia",
        list: [
            {
                name: "Gandaria City",
                address: "Fore Coffee - Gandaria City Mall Lantai Upper Ground, Mainstreet Dining, Jl. Sultan Iskandar Muda, Kebayoran Lama, Jakarta Selatan (Di depan Tony Roma's)",
                opening_hours: "08:00 - 22:00 (WIB)",
                maps: "https://maps.app.goo.gl/7iRAyKcmepYQweYx6",
                image: "/images/store/gancitnew-jakarta-selatan.jpeg",
            },
            {
                name: "Grand Wisata",
                address: "Fore Coffee - Jl. Festive Garden Blok AA.16/26, Kel. Lambangsari, Kec. Tambun Selatan, Kab. Bekasi, Jawa Barat",
                opening_hours: "09:00 - 22:00 (WIB)",
                maps: "https://maps.app.goo.gl/us44ch9VBMeqb2qRA",
                image: "/images/store/grandwisata-bekasi.jpg",
            },
            {
                name: "Fore Coffee - Kaliurang, Yogyakarta",
                address: "Kaliurang St No.KM 5, Karang Wuni, Caturtunggal, Depok, Sleman Regency, Special Region of Yogyakarta 55153",
                opening_hours: "08:00 - 23:00 (WIB)",
                maps: "https://maps.app.goo.gl/acvWwe8ekrZthFMo7",
                image: "/images/store/kaliurang-yogyakarta.jpg",
            },
            {
                name: "Fore Coffee - Setiabudi Semarang",
                address: "Jl. Setia Budi No.58, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50234",
                opening_hours: "08:00 - 23:00 (WIB)",
                maps: "https://maps.app.goo.gl/TBhkoi3Bo1VyfEE47",
                image: "/images/store/setiabudi-semarang.jpeg",
            },
            {
                name: "Fore Coffee - Semeru",
                address: "Jl. Semeru No.72, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65115",
                opening_hours: "07:00 - 22:00 (WIB)",
                maps: "https://maps.app.goo.gl/5Yo8Q8fNqATRSeyS8",
                image: "/images/store/semeru-malang.jpeg",
            },
            {
                name: "Fore Coffee - Indragiri, Surabaya",
                address: "Jl. Indragiri 9 RT 006/RW 01, Kel. Darmo, Kec. Wonokromo, Surabaya",
                opening_hours: "07:00 - 23:00 (WIB)",
                maps: "https://maps.app.goo.gl/HtgrTqP3wa3GMMKv9",
                image: "/images/store/indragiri-surabaya.jpg",
            },
        ],
    },{
        type: "Singapore",
        list: [
            {
                name: "Fore Coffee Bugis Junction",
                address: "200 Victoria St 14/14A, Singapore 188021",
                opening_hours: "07:00 – 22:00 (SST)",
                maps: "https://maps.app.goo.gl/GA84B9WVFK1Y4D8c7",
                image: "/images/store/fore-coffee-store-sg.jpg",
            },
        ],
    }
]
const menuActive = ref(null)

const ChangeMenu = (val) => {
    menuActive.value = val
};
const SelectMenu = (event) => {
    menuActive.value = event.target.value
}

onMounted(() => {
    menuActive.value = stores[0].type;
});
</script>
<template>
    <main class="flex flex-col mx-auto md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl">
        <section class="grid grid-cols-1 w-full justify-center items-center mx-auto mt-18 px-6 md:px-0">
            <h1 class="font-bold text-5xl text-primary text-center">
                Store
            </h1>
            <p class="font-normal text-lg text-center text-dark my-6">
                Find our store outlet near you!
            </p>
            <div>
                <div class="sm:hidden">
                    <label for="Tab" class="sr-only">Tab</label>
                    <select id="Tab" @change="SelectMenu($event)" class="w-full rounded-md border border-gray-300 p-2">
                        <option value="Indonesia">Indonesia</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </div>
                <div class="hidden sm:block sm:w-fit mx-auto mt-12">
                    <div class="border-b border-gray-200 px-6">
                        <nav class="-mb-px flex gap-12" aria-label="Tabs">
                            <button @click="ChangeMenu(stores[0].type)" :class="menuActive == stores[0].type ? 'text-gray-700' : ' hover:text-gray-700'" class="block w-full text-left cursor-pointer px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300">
                                Indonesia
                            </button>
                            <button @click="ChangeMenu(stores[1].type)" :class="menuActive == stores[1].type ? 'text-gray-700' : ' hover:text-gray-700'" class="block w-full text-left cursor-pointer px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300">
                                Singapore
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == stores[0].type" class="grid grid-cols-1 md:grid-cols-2 w-full py-6 gap-3">
                    <div v-for="(data, index) in stores[0].list" :key="index" class="flex flex-col md:flex-row w-full p-3 rounded-[18px] border border-gray-300">
                        <figure class="block flex-none h-52 md:w-32 md:h-full 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="data.image" :alt="data.name" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-3 overflow-hidden">
                            <h4 class="font-medium text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ data.name }}
                            </h4>
                            <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 flex-none">
                                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                </svg>
                                <div class="flex flex-wrap gap-2">
                                    <span>{{ data.address }}</span>
                                    <a :href="data.maps" target="_blank" rel="noopener noreferrer" class="text-primary transition-colors duration-100 ease-in hover:text-secondary">See on Google Maps</a>
                                </div>
                            </h5>
                            <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 flex-none">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                                </svg>
                                <div class="flex flex-wrap gap-1">
                                    <span>{{ data.opening_hours }}</span>
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div v-if="menuActive == stores[1].type" class="grid grid-cols-1 md:grid-cols-2 w-full py-6 gap-3">
                    <div v-for="(data, index) in stores[1].list" :key="index" class="flex flex-col md:flex-row w-full p-3 rounded-[18px] border border-gray-300">
                        <figure class="block flex-none h-52 md:w-32 md:h-full 2xl:w-48 2xl:h-48 rounded-md overflow-hidden">
                            <img :src="data.image" :alt="data.name" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                            <figcaption class="sr-only"></figcaption>
                        </figure>
                        <div class="flex flex-col rounded-md p-3 2xl:pl-6 space-y-3 overflow-hidden">
                            <h4 class="font-medium text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                                {{ data.name }}
                            </h4>
                            <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 flex-none">
                                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                </svg>
                                <div class="flex flex-wrap gap-2">
                                    <span>{{ data.address }}</span>
                                    <a :href="data.maps" target="_blank" rel="noopener noreferrer" class="text-primary transition-colors duration-100 ease-in hover:text-secondary">See on Google Maps</a>
                                </div>
                            </h5>
                            <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 flex-none">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                                </svg>
                                <div class="flex flex-wrap gap-1">
                                    <span>{{ data.opening_hours }}</span>
                                </div>
                            </h5>
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
