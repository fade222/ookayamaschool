<template>
  <transition name="slide-fade">
    <nav v-if="sideMenuOpen" class="relative z-30">
      <button
        @click="$emit('closeSideMenu')"
        type="button"
        class="fixed inset-0 w-full h-full bg-blue-900 opacity-50"
      ></button>
      <div class="absolute top-0 right-0 w-64 bg-white">
        <div class="flex items-center">
          <div class="flex items-center">
            <div class="ml-3">
              <img class="w-4 h-4" src="~assets/icons/icon-home.svg" alt />
            </div>
            <nuxt-link
              @click.native="closeMenu"
              class="mt-1 ml-3 text-sm font-bold tracking-wider text-blue-700 capitalize border-b-4 border-transparent hover:text-blue-500"
              exact-active-class="text-blue-800 border-b-4 border-blue-300"
              to="/"
            >
              Home
            </nuxt-link>
          </div>
          <button
            @click="$emit('closeSideMenu')"
            type="button"
            class="p-2 m-2 ml-auto btn"
          >
            <svg
              class="w-4 h-4 text-blue-800 stroke-current hover:text-blue-700"
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
            <span class="sr-only">Close</span>
          </button>
        </div>
        <div class="mx-3 border border-blue-300 rounded border-bottom" />
        <div class="ml-6">
          <MenuLinksList @closeMenu="closeMenu" />
          <div class="flex items-center mt-8">
            <div class="flex items-center">
              <img class="w-4 h-4" src="~assets/icons/icon-star.svg" alt />
              <nuxt-link
                @click.native="closeMenu"
                class="mt-1 ml-3 text-sm font-bold tracking-wider text-blue-700 capitalize border-b-4 border-transparent hover:text-blue-500"
                active-class="text-blue-800 border-b-4 border-blue-300"
                to="/news"
              >
                最新情報
              </nuxt-link>
            </div>
          </div>
          <div class="flex items-center mt-8">
            <div class="flex items-center">
              <img class="w-4 h-4" src="~assets/icons/icon-company.svg" alt />
              <nuxt-link
                @click.native="closeMenu"
                class="mt-1 ml-3 text-sm font-bold tracking-wider text-blue-700 capitalize border-b-4 border-transparent hover:text-blue-500"
                active-class="text-blue-800 border-b-4 border-blue-300"
                to="/company"
              >
                会社概要
              </nuxt-link>
            </div>
          </div>
          <div class="flex items-center mt-8">
            <div class="flex items-center">
              <img class="w-4 h-4" src="~assets/icons/icon-phone.svg" alt />
              <nuxt-link
                @click.native="closeMenu"
                class="mt-1 ml-3 text-sm font-bold tracking-wider text-blue-700 capitalize border-b-4 border-transparent hover:text-blue-500"
                active-class="text-blue-800 border-b-4 border-blue-300"
                to="/contact"
              >
                お問い合わせ
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex h-12 mt-8 bg-gray-200"></div>
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
