<template>
  <div class="pb-12 bg-white xl:hidden">
    <div class="flex items-center pt-6 pl-4 ">
      <img class="w-6 h-6" src="~assets/icons/icon-book.svg" alt="" />
      <p class="ml-4 text-lg tracking-wide text-blue-800 text-bold">
        授業の詳細
      </p>
    </div>
    <ul class="mt-6 ml-12 text-sm font-bold tracking-wide text-blue-700">
      <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
        <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
        <nuxt-link
          class="flex items-center ml-5 xl:ml-2 hover:text-blue-500"
          to="/soroban"
        >
          珠算科
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
      </li>
      <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
        <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
        <nuxt-link
          class="flex items-center ml-5 xl:ml-2 hover:text-blue-500"
          to="/study"
        >
          学習科
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
      </li>
      <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
        <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
        <nuxt-link
          class="flex items-center ml-5 xl:ml-2 hover:text-blue-500"
          to="/reading"
        >
          読書科
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
      </li>
    </ul>
  </div>
</template>
