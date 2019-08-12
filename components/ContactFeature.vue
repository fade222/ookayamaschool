<template>
  <div class="bg-white pb-12 flex xl:px-32">
    <div class="md:w-1/2">
      <div class="pt-12 pl-4">
        <h6 class="ml-4 text-blue-900 tracking-wide">
          お気軽にご連絡ください。
        </h6>
      </div>
      <ContactNumber class="pl-8" />
      <div class="pt-12 px-8 sm:hidden">
        <img
          class="w-full h-full object-cover"
          src="~assets/images/map.svg"
          alt="大岡山駅から当塾の行き方の地図"
        />
      </div>
      <div class="pt-12 pl-8 text-blue-900 text-sm">
        <p>東急目黒線・大井町線 大岡山駅から徒歩３分</p>
        <p class="mt-2">
          北口商店街をまっすぐ、歯科クリニックの２階
        </p>
      </div>
      <div class="pt-12 flex justify-center sm:justify-start sm:pl-24">
        <a
          class="btn btn-secondary"
          href="https://goo.gl/maps/pmRWrutndk3uKLSc6"
        >
          Google マップで開く
        </a>
      </div>
    </div>
    <div class="hidden sm:pt-12 sm:block md:w-1/2 sm:px-24">
      <img
        class="w-full h-full object-cover"
        src="~assets/images/map.svg"
        alt="大岡山駅から当塾の行き方の地図"
      />
    </div>
  </div>
</template>

<script>
import ContactNumber from '~/components/ContactNumber.vue'

export default {
  components: {
    ContactNumber
  }
}
</script>
