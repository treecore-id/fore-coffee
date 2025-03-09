<template>
    <main class="flex flex-col mx-auto md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl">
        <section class="grid grid-cols-1 w-full justify-center items-center mx-auto mt-18 px-6 md:px-0">
            <h1 class="font-bold text-5xl text-primary text-center">
                Contact Us
            </h1>
            <p class="font-normal text-lg text-center text-dark my-6">
                Any question or remarks? Just write us a message!
            </p>
            <div class="flex sm:flex-nowrap flex-wrap w-full p-5 mt-12 mx-auto">
                <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4743.499753867467!2d103.85397959495414!3d1.2996451817414785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da198f7dda4a4d%3A0xf5eb0229fe9e7ccf!2sFore%20Coffee%20-%20Bugis%20Junction!5e0!3m2!1sen!2sid!4v1741459295886!5m2!1sen!2sid" style="filter: contrast(1.2) opacity(0.7);" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1">200 Victoria St 14/14A, Singapore 188021</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a href="mailto:hello@fore.coffee" class="text-primary leading-relaxed transition-colors duration-100 ease-in hover:text-secondary">hello@fore.coffee</a>
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <a href="https://api.whatsapp.com/send/?phone=081211118456&text=Hi%2C%20is%20there%20anything%20we%20can%20do%3F&type=phone_number&app_absent=0" target="_blank" ref="nofollow, " class="text-primary leading-relaxed transition-colors duration-100 ease-in hover:text-secondary">0812-1111-8456</a>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Send Us Message!</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">Any question or remarks? Just write us a message!</p>
                    <div class="relative mb-4">
                        <label for="name" class="text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="phone" class="text-sm text-gray-600">Phone Number</label>
                        <input type="text" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secondary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button class="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
    </main>
</template>  