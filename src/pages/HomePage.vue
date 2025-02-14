<template>
  <section class="w-full bg-hero-background">
    <div
      class="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center space-x-6 mx-auto md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl"
    >
      <div class="flex flex-wrap space-y-3">
        <h1 class="font-bold text-8xl text-primary">Grind The Essentials</h1>
        <h3 class="font-medium text-2xl text-secondary">
          Made with Indonesia’s Finest Beans for your everyday modern coffee
          experience
        </h3>
      </div>
      <figure class="block w-full">
        <img
          src="/images/hero-1.png"
          alt="Coffee Picture"
          class="object-contain object-center w-full h-full"
        />
        <figcaption class="sr-only"></figcaption>
      </figure>
    </div>
  </section>
  <section
    class="grid grid-cols-1 w-full justify-center items-center mx-auto mt-6"
  >
    <div class="bg-[url('/images/our-story.png')] bg-repeat-x pt-10">
      <h1
        class="font-bold text-8xl text-primary mx-auto md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl"
      >
        Our Story
      </h1>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center space-x-6 mx-auto md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl"
    >
      <figure class="block w-full">
        <img
          src="/images/our-story-1.png"
          alt="Coffee Picture"
          class="object-contain object-center w-full h-full"
        />
        <figcaption class="sr-only"></figcaption>
      </figure>
      <div class="block">
        <p class="font-normal text-xl text-gray-800 text-justify leading-10">
          In the pursuit of brewing the perfect cup, Fore Coffee is bringing the
          Indonesian coffee lifestyle to Singapore. As the pioneer that seeks to
          introduce what it means to enjoy coffee the Indonesian way, we promise
          to deliver more than just taste, but also a collection of stories
          brewed together into a solid experience. With Fore Coffee, embrace the
          evolving coffee culture as we redefine what it means to enjoy a cup of
          coffee, delivering the best Indonesia has to offer with our signature
          creations and innovations.
        </p>
        <router-link
          to="#"
          class="group inline-flex items-center font-medium text-primary border-2 border-primary rounded-full px-6 py-2 mt-5 transition-all duration-100 ease-in hover:bg-primary hover:text-white"
          >Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 transition duration-200 ease-in group-hover:rotate-45 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>
