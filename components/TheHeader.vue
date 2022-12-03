<template>
  <header class="relative z-20 bg-white">
    <TheHeaderSideMenu
      :side-menu-open="sideMenuOpen"
      @closeSideMenu="sideMenuOpen = !sideMenuOpen"
      class="xl:hidden"
    />
    <div class="z-0 flex items-center xl:px-4">
      <nuxt-link class="z-20 flex items-center ml-2" to="/">
        <div class="pl-1">
          <img class="w-6 h-6" src="~assets/icons/icon-koma.svg" alt />
        </div>
        <h1 class="pr-1 ml-2 text-lg font-bold tracking-wide text-blue-800">
          大岡山スクール
        </h1>
      </nuxt-link>
      <SubHeader class="hidden xl:block xl:pt-1 xl:pl-4" />
      <button
        @click="toggleSideMenu"
        class="px-1 py-1 mt-2 mb-2 ml-auto mr-2 text-blue-800 hover:text-blue-700 btn xl:hidden"
        type="button"
      >
        <svg
          class="w-6 h-6 stroke-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12.353h18M3 18.706h18M3 6h18"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <span class="sr-only">Open nav</span>
      </button>
      <div class="hidden xl:flex xl:ml-auto xl:mr-5 xl:text-sm">
        <div class="flex items-center pl-12 mt-12 xl:mt-0">
          <div class="flex items-center">
            <img class="w-6 h-6" src="~assets/icons/icon-phone.svg" alt />
            <nuxt-link
              class="mt-1 ml-4 tracking-wide text-blue-700 border-b-4 border-transparent xl:font-bold hover:text-blue-500"
              active-class="border-b-4 border-blue-300"
              to="/contact"
            >
              お問い合わせ
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-3 border border-blue-300 rounded border-bottom xl:mx-0" />
    <SubHeader class="xl:hidden" />
  </header>
</template>

<script>
import SubHeader from '~/components/SubHeader.vue'
import TheHeaderSideMenu from '~/components/TheHeaderSideMenu.vue'

export default {
  components: {
    TheHeaderSideMenu,
    SubHeader
  },
  data() {
    return {
      sideMenuOpen: false
    }
  },
  methods: {
    toggleSideMenu() {
      this.sideMenuOpen = !this.sideMenuOpen
    }
  }
}
</script>

<style></style>
