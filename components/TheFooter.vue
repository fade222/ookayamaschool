<template>
  <footer class="mt-8 text-sm bg-blue-800 border-t-4 border-blue-300">
    <div class="flex justify-center pt-12 pb-8">
      <div>
        <nuxt-link
          class="tracking-wider text-white border-b-2 border-transparent hover:text-blue-200"
          active-class="border-white"
          to="/company"
        >
          <div class="flex items-center mb-2">
            <div class="p-4 m-auto bg-yellow-100 rounded-full">
              <img class="w-5 h-5" src="~assets/icons/icon-company.svg" alt />
            </div>
          </div>
          会社概要
        </nuxt-link>
      </div>
      <div class="ml-6 sm:ml-12">
        <nuxt-link
          class="tracking-wider text-white border-b-2 border-transparent hover:text-blue-200"
          active-class="border-white"
          to="/contact"
        >
          <div class="flex items-center mb-2">
            <div class="p-4 m-auto bg-yellow-100 rounded-full">
              <img class="w-5 h-5" src="~assets/icons/icon-phone.svg" alt />
            </div>
          </div>
          お問い合わせ
        </nuxt-link>
      </div>
      <div class="ml-6 sm:ml-12">
        <nuxt-link
          class="tracking-wider text-white border-b-2 border-transparent hover:text-blue-200"
          active-class="border-white"
          to="/news"
        >
          <div class="flex items-center mb-2">
            <div class="p-4 m-auto bg-yellow-100 rounded-full">
              <img class="w-5 h-5" src="~assets/icons/icon-star.svg" alt />
            </div>
          </div>
          最新情報
        </nuxt-link>
      </div>
    </div>
    <div
      class="flex items-center justify-between py-2 tracking-wider text-blue-300 border-t-2 border-blue-500 hover:text-blue-100"
    >
      <div class="mx-4"></div>
      <nuxt-link to="/">
        大岡山スクール
      </nuxt-link>
      <a
        class="p-2 mx-4 text-blue-300 border border-blue-300 rounded-full hover:text-blue-100 hover:border-blue-100 active:border-blue-500 btn"
        href="#top"
      >
        <svg
          class="w-3 h-3 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 1l7.939 11H4.06L12 1zM10.167 12h3.667v11h-3.667z" />
        </svg>
        <span class="sr-only">Back to top</span>
      </a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
