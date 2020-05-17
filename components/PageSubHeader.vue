<template>
  <div
    class="flex items-center bg-blue-100 xl:py-2 xl:border-b-4 xl:border-blue-300"
  >
    <h3
      class="py-2 pl-4 text-sm font-bold text-blue-700 xl:py-0 xl:font-normal xl:pl-10 xl:text-xl xl:tracking-widest xl:text-grey-100"
    >
      <slot></slot>
    </h3>
    <MenuLinksList
      class="hidden xl:block xl:flex xl:ml-auto xl:mr-8 xl:mt-0 xl:mb-0"
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
