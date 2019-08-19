<template>
  <main class="text-gray-900 bg-white pb-20">
    <PageSubHeader>無料体験</PageSubHeader>
    <div class="pt-16 ml-8 xl:ml-32">
      <p class="tracking-wide leading-relaxed">
        無料体験をご希望の方は、<br />
        お気軽にご連絡ください。
      </p>
      <ContactNumber />
    </div>
  </main>
</template>

<script>
import ContactNumber from '~/components/ContactNumber.vue'

export default {
  components: {
    ContactNumber
  },
  head: {
    title: '無料体験'
  }
}
</script>

<style></style>
