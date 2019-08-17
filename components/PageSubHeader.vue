<template>
  <div
    class="flex items-center xl:py-2 bg-blue-100 xl:border-b-4 xl:border-blue-300"
  >
    <h3
      class="pl-4 py-2 xl:py-0 text-blue-700 font-bold xl:font-normal text-sm xl:pl-10 xl:text-xl xl:tracking-widest xl:text-grey-100"
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
