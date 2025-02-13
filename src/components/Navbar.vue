<template>
  <header class="fixed w-full bg-white top-0 inset-x-0 py-5 z-50">
    <nav
      class="flex flex-row flex-wrap justify-between items-center mx-auto md:max-w-lg lg:max-w-3xl 2xl:max-w-7xl"
    >
      <figure class="h-8">
        <router-link to="/">
          <img
            src="/images/logo-2.png"
            alt="Logo Fore Coffee"
            class="object-contain object-center w-full h-full"
          />
        </router-link>
        <figcaption class="sr-only">Logo Fore Coffee</figcaption>
      </figure>
      <ul class="hidden md:inline-flex space-x-3">
        <li>
          <router-link
            to="/about"
            class="font-semibold text-primary px-3 py-1 transition-colors duration-100 ease-in hover:text-secondary"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            to="/menu"
            class="font-semibold text-primary px-3 py-1 transition-colors duration-100 ease-in hover:text-secondary"
            >Menu</router-link
          >
        </li>
        <li>
          <router-link
            to="/store"
            class="font-semibold text-primary px-3 py-1 transition-colors duration-100 ease-in hover:text-secondary"
            >Store</router-link
          >
        </li>
        <li>
          <router-link
            to="/career"
            class="font-semibold text-primary px-3 py-1 transition-colors duration-100 ease-in hover:text-secondary"
            >Career</router-link
          >
        </li>
        <li>
          <router-link
            to="/contact"
            class="font-semibold text-primary px-3 py-1 transition-colors duration-100 ease-in hover:text-secondary"
            >Contact Us</router-link
          >
        </li>
      </ul>
      <a href="#">Download App</a>
    </nav>
  </header>
</template>
