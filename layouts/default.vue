<template>
  <div class="bg-white">
    <div class="font-sans font-normal antialiased bg-gray-100 mx-auto shadow">
      <TheHeader />
      <nuxt />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
