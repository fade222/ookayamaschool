<template>
  <ul class="mt-6 font-bold text-sm text-blue-700 tracking-wide">
    <li
      class="flex items-center mt-8 xl:mt-0"
      active-class="border-b-4 border-blue-700"
    >
      <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
      <nuxt-link
        class="ml-5 mt-1 xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
        active-class="text-blue-800 border-b-4 border-blue-300"
        to="/soroban"
        @click.native="closeMenu"
      >
        珠算科
      </nuxt-link>
    </li>
    <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
      <img class="w-3 h-3" src="~assets/icons/icon-book.svg" alt="" />
      <nuxt-link
        class="ml-5 mt-1 xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
        active-class="text-blue-800 border-b-4 border-blue-300"
        to="/study"
        @click.native="closeMenu"
      >
        学習科
      </nuxt-link>
    </li>
    <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
      <img class="w-3 h-3" src="~assets/icons/icon-book.svg" alt="" />
      <nuxt-link
        class="ml-5 mt-1 xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
        active-class="text-blue-800 border-b-4 border-blue-300"
        to="/reading"
        @click.native="closeMenu"
      >
        読書科
      </nuxt-link>
    </li>
    <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
      <img class="w-3 h-3" src="~assets/icons/icon-book.svg" alt="" />
      <nuxt-link
        class="ml-5 mt-1 xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
        active-class="text-blue-800 border-b-4 border-blue-300"
        to="/privateTutoring"
        @click.native="closeMenu"
      >
        1対1の個人指導科
      </nuxt-link>
    </li>
    <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
      <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
      <nuxt-link
        class="ml-5 mt-1 xl:ml-2 border-b-4 border-transparent hover:text-blue-500"
        active-class="border-b-4 border-blue-300"
        to="/adultSoroban"
        @click.native="closeMenu"
      >
        大人のそろばん
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    }
  }
}
</script>
