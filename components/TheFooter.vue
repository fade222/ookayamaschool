<template>
  <footer class="mt-8 bg-blue-800 border-t-4 border-blue-300">
    <div class="flex justify-center pt-12 pb-8">
      <div>
        <div class="flex items-center mb-2">
          <div class="m-auto bg-yellow-100 rounded-full p-5">
            <img class="w-5 h-5" src="~assets/icons/icon-star.svg" alt />
          </div>
        </div>
        <nuxt-link
          class="text-white underline tracking-wider btn hover:text-blue-200"
          to="/news"
        >
          最新情報
        </nuxt-link>
      </div>
      <div class="ml-6 sm:ml-12">
        <div class="flex items-center mb-2">
          <div class="m-auto bg-yellow-100 rounded-full p-5">
            <img class="w-5 h-5" src="~assets/icons/icon-phone.svg" alt />
          </div>
        </div>
        <nuxt-link
          class="text-white underline tracking-wider btn hover:text-blue-200"
          to="/contact"
        >
          お問い合わせ
        </nuxt-link>
      </div>
      <div class="ml-6 sm:ml-12">
        <div class="flex items-center mb-2">
          <div class="m-auto bg-yellow-100 rounded-full p-5">
            <img class="w-5 h-5" src="~assets/icons/icon-company.svg" alt />
          </div>
        </div>
        <nuxt-link
          class="text-white underline tracking-wider btn hover:text-blue-200"
          to="/company"
        >
          会社概要
        </nuxt-link>
      </div>
    </div>
    <div
      class="py-2 flex justify-between border-t-2 border-blue-500 items-center text-blue-300 tracking-wider hover:text-blue-100"
    >
      <div class="mx-4"></div>
      <nuxt-link class="btn" to="/">
        大岡山スクール
      </nuxt-link>
      <a
        class="mx-4 p-2 border rounded-full border-blue-300 hover:border-blue-100 active:border-blue-500 focus:outline-none focus:shadow-outline"
        href="#top"
      >
        <img
          class="w-3 h-3"
          src="~assets/icons/icon-arrow-up.svg"
          alt="Back to top"
        />
      </a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
