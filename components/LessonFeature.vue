<template>
  <div class="pb-12 bg-white xl:hidden">
    <div class="flex items-center pt-6 pl-4 ">
      <img class="w-6 h-6" src="~assets/icons/icon-book.svg" alt="" />
      <p class="ml-4 text-blue-900 text-lg text-bold tracking-wide">
        授業の詳細
      </p>
    </div>
    <MenuLinksList />
  </div>
</template>

<script>
import MenuLinksList from '~/components/MenuLinksList.vue'
export default {
  components: {
    MenuLinksList
  }
}
</script>

<style></style>
