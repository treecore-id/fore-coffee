<template>
  <div class="grid h-screen place-content-center bg-white px-4">
    <div class="text-center">
      <h1 class="text-9xl font-black text-gray-200">404</h1>
      <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Uh-oh!
      </p>
      <p class="mt-4 text-gray-500">
        We can't find that
        <code class="text-red-600">{{ $route.params.notFound }}</code> page.
      </p>
      <router-link
        :to="{ name: 'home' }"
        class="mt-6 inline-block rounded bg-gray-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring"
      >
        Go Back Home
      </router-link>
    </div>
  </div>
</template>
