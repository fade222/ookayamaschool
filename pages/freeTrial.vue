<template>
  <main class="pb-20 text-gray-900 bg-white">
    <PageSubHeader>無料体験</PageSubHeader>
    <div class="pt-16 ml-8 xl:ml-32">
      <p class="leading-relaxed tracking-wide">
        そろばんも学習も<br />
        無料体験できます。
      </p>
      <p class="pt-8 leading-relaxed tracking-wide">
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
