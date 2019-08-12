<template>
  <div class="flex xl:py-2 xl:bg-blue-100 xl:border-b-4 xl:border-blue-300">
    <h3
      class="pl-4 mt-2 xl:mt-0 text-gray-600 text-sm xl:pl-8 xl:text-2xl xl:tracking-widest xl:text-blue-800"
    >
      <slot></slot>
    </h3>
    <MenuLinksList
      class="hidden xl:block xl:flex xl:ml-auto xl:mr-8 xl:mt-2 xl:mb-2"
    />
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
