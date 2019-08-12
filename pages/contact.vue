<template>
  <main class="bg-white">
    <PageSubHeader>お問い合わせ</PageSubHeader>
    <ContactFeature />
  </main>
</template>

<script>
import ContactFeature from '~/components/ContactFeature.vue'
import PageSubHeader from '~/components/PageSubHeader.vue'

export default {
  components: {
    ContactFeature,
    PageSubHeader
  },
  head: {
    title: 'お問い合わせ'
  }
}
</script>

<style></style>
