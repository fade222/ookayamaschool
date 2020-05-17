<template>
  <div class="bg-blue-800 border-t-4 border-blue-300">
    <div class="flex justify-center pt-10 xl:pt-16">
      <h5 class="text-lg tracking-wide text-white xl:text-xl">
        数字に強くなり、計算が楽になる。
      </h5>
    </div>
    <div class="sm:hidden">
      <img
        class="object-cover w-full h-full"
        src="~assets/images/soroban-30deg.svg"
        alt="Soroban"
      />
    </div>
    <div class="hidden sm:block">
      <img
        class="object-cover w-full h-full px-12 py-12 xl:px-48"
        src="~assets/images/soroban.svg"
        alt="Soroban"
      />
    </div>
    <div
      class="flex justify-center pt-24 pb-12 -mt-24 bg-gray-200 xl:-mt-48 xl:pt-48"
    >
      <div>
        <p class="text-lg text-center text-blue-800 md:text-xl xl:text-2xl">
          学童の帰り
          <span class="px-1 bg-blue-300 rounded-full">手</span>
          <span class="px-1 bg-blue-300 rounded-full">ぶ</span>
          <span class="px-1 bg-blue-300 rounded-full">ら</span>
          でそろばん
        </p>
        <div class="flex justify-center mt-6">
          <nuxt-link class="btn btn-primary" to="/soroban">
            珠算詳細
            <svg
              class="w-4 h-4 ml-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 12.167l-11 7.938V4.228l11 7.939zM12 10.333V14H1v-3.667z"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
