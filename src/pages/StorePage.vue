<template>
    <main class="flex flex-col mx-auto md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl">
        <section class="grid grid-cols-1 w-full justify-center items-center mx-auto mt-6">
            <div class="bg-[url('/images/our-story.png')] bg-repeat-x pt-10">
                <h1 class="font-bold text-8xl text-[#5C6336] text-center">
                    Our Store
                </h1>
            </div>
            <p class="font-normal text-base text-center text-dark my-20">
                The price shown is applied to the Fore Coffee Application
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 w-full py-6 gap-3">
                <div class="flex w-full p-3 rounded-[18px] border border-gray-300">
                    <figure class="block flex-none w-48 h-48 rounded-md overflow-hidden">
                        <img src="/images/fore-coffee-store-sg.jpg" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                        <figcaption class="sr-only"></figcaption>
                    </figure>
                    <div class="flex flex-col rounded-md pl-6 space-y-3 overflow-hidden">
                        <h4 class="font-medium text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                            Fore Coffee Bugis Junction
                        </h4>
                        <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                            </svg>
                            <div class="flex flex-wrap gap-1">
                                <span>200 Victoria St 14/14A, Singapore 188021</span>
                                <a href="https://maps.app.goo.gl/a6mz6scMoYGcHU7U8" target="_blank" rel="noopener noreferrer" class="text-primary transition-colors duration-100 ease-in hover:text-secondary">See on Google Maps</a>
                            </div>
                        </h5>
                        <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                            </svg>
                            <div class="flex flex-wrap gap-1">
                                <span>07:00 - 22:00</span>
                            </div>
                        </h5>
                    </div>
                </div>
                <div class="flex w-full p-3 rounded-[18px] border border-gray-300">
                    <figure class="block flex-none w-48 h-48 rounded-md overflow-hidden">
                        <img src="/images/fore-coffee-store-sg.jpg" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                        <figcaption class="sr-only"></figcaption>
                    </figure>
                    <div class="flex flex-col rounded-md pl-6 space-y-3 overflow-hidden">
                        <h4 class="font-medium text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                            Fore Coffee Bugis Junction
                        </h4>
                        <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                            </svg>
                            <div class="flex flex-wrap gap-1">
                                <span>200 Victoria St 14/14A, Singapore 188021</span>
                                <a href="https://maps.app.goo.gl/a6mz6scMoYGcHU7U8" target="_blank" rel="noopener noreferrer" class="text-primary transition-colors duration-100 ease-in hover:text-secondary">See on Google Maps</a>
                            </div>
                        </h5>
                        <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                            </svg>
                            <div class="flex flex-wrap gap-1">
                                <span>07:00 - 22:00</span>
                            </div>
                        </h5>
                    </div>
                </div>
                <div class="flex w-full p-3 rounded-[18px] border border-gray-300">
                    <figure class="block flex-none w-48 h-48 rounded-md overflow-hidden">
                        <img src="/images/fore-coffee-store-sg.jpg" alt="Coffee Picture" class="object-cover object-center w-full h-full cursor-pointer transition duration-100 ease-in hover:scale-105" />
                        <figcaption class="sr-only"></figcaption>
                    </figure>
                    <div class="flex flex-col rounded-md pl-6 space-y-3 overflow-hidden">
                        <h4 class="font-medium text-xl text-gray-800 cursor-pointer transition duration-100 ease-in hover:text-primary">
                            Fore Coffee Bugis Junction
                        </h4>
                        <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                            </svg>
                            <div class="flex flex-wrap gap-1">
                                <span>200 Victoria St 14/14A, Singapore 188021</span>
                                <a href="https://maps.app.goo.gl/a6mz6scMoYGcHU7U8" target="_blank" rel="noopener noreferrer" class="text-primary transition-colors duration-100 ease-in hover:text-secondary">See on Google Maps</a>
                            </div>
                        </h5>
                        <h5 class="inline-flex gap-2 font-normal text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                            </svg>
                            <div class="flex flex-wrap gap-1">
                                <span>07:00 - 22:00</span>
                            </div>
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>