<template>
  <ul
    class="mt-6 ml-12 xl:mt-0 underline xl:no-underline xl:font-bold text-sm text-blue-900 tracking-wide"
  >
    <li class="flex items-center mt-8 xl:mt-0">
      <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
      <nuxt-link
        class="btn ml-5 xl:ml-2 xl:text-blue-700 xl:hover:text-blue-600 hover:text-blue-700"
        to="/soroban"
        @click.native="closeMenu"
      >
        珠算科
      </nuxt-link>
    </li>
    <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
      <img class="w-3 h-3" src="~assets/icons/icon-book.svg" alt="" />
      <nuxt-link
        class="btn btn ml-5 xl:ml-2 xl:text-blue-700 xl:hover:text-blue-600 hover:text-blue-700"
        to="/study"
        @click.native="closeMenu"
      >
        学習科
      </nuxt-link>
    </li>
    <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
      <img class="w-3 h-3" src="~assets/icons/icon-book.svg" alt="" />
      <nuxt-link
        class="btn ml-5 xl:ml-2 xl:text-blue-700 xl:hover:text-blue-600 hover:text-blue-700"
        to="/reading"
        @click.native="closeMenu"
      >
        読書科
      </nuxt-link>
    </li>
    <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
      <img class="w-3 h-3" src="~assets/icons/icon-book.svg" alt="" />
      <nuxt-link
        class="btn ml-5 xl:ml-2 xl:text-blue-700 xl:hover:text-blue-600 hover:text-blue-700"
        to="/privateTutoring"
        @click.native="closeMenu"
      >
        1対1の個人指導科
      </nuxt-link>
    </li>
    <li class="flex items-center mt-8 xl:mt-0 xl:ml-12">
      <img class="w-3 h-3" src="~assets/icons/icon-koma.svg" alt="" />
      <nuxt-link
        class="btn ml-5 xl:ml-2 xl:text-blue-700 xl:hover:text-blue-600 hover:text-blue-700"
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

<style></style>
