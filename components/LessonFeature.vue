<template>
  <div class="pb-12 bg-white xl:hidden">
    <div class="flex items-center pt-6 pl-4 ">
      <img class="w-6 h-6" src="~assets/icons/icon-book.svg" alt="" />
      <p class="ml-4 text-blue-800 text-lg text-bold tracking-wide">
        授業の詳細
      </p>
    </div>
    <ul class="ml-12 mt-6 font-bold text-sm text-blue-700 tracking-wide">
      <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
        <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
        <nuxt-link
          class="ml-5 mt-1 flex items-center xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
          active-class="border-b-4 border-blue-300"
          to="/soroban"
        >
          珠算科
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
      </li>
      <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
        <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
        <nuxt-link
          class="ml-5 mt-1 flex items-center xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
          active-class="border-b-4 border-blue-300"
          to="/study"
        >
          学習科
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
      </li>
      <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
        <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
        <nuxt-link
          class="ml-5 mt-1 flex items-center xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
          active-class="border-b-4 border-blue-300"
          to="/reading"
        >
          読書科
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
      </li>
      <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
        <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
        <nuxt-link
          class="ml-5 mt-1 flex items-center xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
          active-class="border-b-4 border-blue-300"
          to="/privateTutoring"
        >
          1対1の個人指導科
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
      </li>
      <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
        <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
        <nuxt-link
          class="ml-5 mt-1 flex items-center xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
          active-class="border-b-4 border-blue-300"
          to="/adultSoroban"
        >
          大人のそろばん
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
      </li>
    </ul>
  </div>
</template>
