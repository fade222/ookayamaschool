<template>
  <main class="bg-white">
    <PageSubHeader>お問い合わせ</PageSubHeader>
    <ContactFeature />
  </main>
</template>

<script>
import ContactFeature from '~/components/ContactFeature.vue'

export default {
  components: {
    ContactFeature
  },
  head: {
    title: 'お問い合わせ'
  }
}
</script>
