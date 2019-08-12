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
        <p class="text-blue-900 text-sm xl:text-base">
          集中力・計算能力・暗算力のＵＰ！
        </p>
        <div class="mt-6 flex justify-center">
          <nuxt-link class="btn btn-primary" to="/soroban">
            珠算詳細
            <img
              class="ml-4 w-4 h-4"
              src="~assets/icons/icon-arrow-right.svg"
              alt=""
            />
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
