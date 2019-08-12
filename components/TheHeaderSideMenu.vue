<template>
  <transition name="slide-fade">
    <nav v-if="sideMenuOpen" class="relative z-30">
      <button
        type="button"
        class="fixed bg-blue-900 opacity-50 inset-0 h-full w-full"
        @click="$emit('closeSideMenu')"
      ></button>
      <div class="absolute right-0 top-0 w-64 bg-white">
        <div class="flex items-center">
          <div class="flex items-center">
            <div class="ml-3">
              <img class="w-5 h-5" src="~assets/icons/icon-home.svg" alt />
            </div>
            <nuxt-link
              class="ml-2 capitalize text-sm font-bold text-blue-800 tracking-wider hover:text-blue-700 underline btn"
              to="/"
              @click.native="closeMenu"
            >
              Home
            </nuxt-link>
          </div>
          <button
            type="button"
            class="ml-auto p-1 m-2 btn"
            @click="$emit('closeSideMenu')"
          >
            <svg
              class="w-6 h-6 stroke-current text-blue-800 hover:text-blue-700"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4l18 16M3 20L21 4"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
            <span class="sr-only">Settings</span>
          </button>
        </div>
        <div class="mx-3 border border-bottom border-blue-300 rounded" />
        <div class="ml-4">
          <div class="flex items-center mt-6 pl-4">
            <img class="w-6 h-6" src="~assets/icons/icon-book.svg" alt />
            <h3 class="ml-4 text-blue-900 text-bold tracking-wide">
              授業の詳細
            </h3>
          </div>
          <MenuLinksList @closeMenu="closeMenu" />
          <div class="mt-12 flex items-center">
            <div class="flex items-center pl-4">
              <img class="w-6 h-6" src="~assets/icons/icon-star.svg" alt />
              <nuxt-link
                class="ml-4 text-blue-900 text-bold tracking-wide underline hover:text-blue-700 btn"
                to="/news"
                @click.native="closeMenu"
              >
                最新情報
              </nuxt-link>
            </div>
          </div>
          <div class="mt-12 flex items-center">
            <div class="flex items-center pl-4">
              <img class="w-6 h-6" src="~assets/icons/icon-company.svg" alt />
              <nuxt-link
                class="ml-4 text-blue-900 text-bold tracking-wide underline hover:text-blue-700 btn"
                to="/company"
                @click.native="closeMenu"
              >
                会社概要
              </nuxt-link>
            </div>
          </div>
          <div class="mt-12 flex items-center">
            <div class="flex items-center pl-4">
              <img class="w-6 h-6" src="~assets/icons/icon-phone.svg" alt />
              <nuxt-link
                class="ml-4 text-blue-900 text-bold tracking-wide underline hover:text-blue-700 btn"
                to="/contact"
                @click.native="closeMenu"
              >
                お問い合わせ
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="mt-12 h-12 bg-gray-200 flex">
          <img
            class="ml-auto mr-6 -mt-16 w-24 h-24"
            src="~assets/images/corner-deco.svg"
          />
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
import MenuLinksList from '~/components/MenuLinksList.vue'

export default {
  components: {
    MenuLinksList
  },
  props: {
    sideMenuOpen: Boolean
  },
  mounted() {
    const onEscape = (e) => {
      if (!this.sideMenuOpen || e.key !== 'Escape') {
        return
      }
      this.$emit('closeSideMenu')
    }
    document.addEventListener('keydown', onEscape)
    this.$on('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },
  methods: {
    closeMenu() {
      this.$emit('closeSideMenu')
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter {
  transform: translateX(16rem);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(16rem);
}
</style>
