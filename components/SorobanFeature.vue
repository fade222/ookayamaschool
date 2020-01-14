<template>
  <div class="bg-blue-800 border-t-4 border-blue-300">
    <div class="pt-10 xl:pt-16 flex justify-center">
      <h5 class="text-lg xl:text-xl text-white tracking-wide">
        数字に強くなり、計算が楽になる。
      </h5>
    </div>
    <div class="sm:hidden">
      <img
        class="h-full w-full object-cover"
        src="~assets/images/soroban-30deg.svg"
        alt="Soroban"
      />
    </div>
    <div class="hidden sm:block">
      <img
        class="px-12 py-12 xl:px-48 h-full w-full object-cover"
        src="~assets/images/soroban.svg"
        alt="Soroban"
      />
    </div>
    <div
      class="-mt-24 pt-24 xl:-mt-48 xl:pt-48 pb-12 flex justify-center bg-gray-200"
    >
      <div>
        <p class="text-center text-lg md:text-xl xl:text-2xl text-blue-800">
          学童の帰り
          <span class="px-1 bg-blue-300 rounded-full">手</span>
          <span class="px-1 bg-blue-300 rounded-full">ぶ</span>
          <span class="px-1 bg-blue-300 rounded-full">ら</span>
          でそろばん
        </p>
        <div class="mt-6 flex justify-center">
          <nuxt-link class="btn btn-primary" to="/soroban">
            珠算詳細
            <svg
              class="ml-4 w-4 h-4 fill-current"
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
