<template>
  <div>
    <div class="flex justify-center bg-blue-100 xl:pl-4">
      <h3
        class="py-2 xl:pl-8 xl:mr-auto text-2xl text-blue-800 tracking-widest"
      >
        受験生の駆け込み塾
      </h3>
      <MenuLinksList
        class="hidden xl:block xl:flex xl:ml-auto xl:mr-8 xl:mb-2 xl:mt-2"
      />
    </div>
    <div
      class="relative flex justify-center bg-blue-800 border-t-4 border-blue-300 xl:justify-start"
    >
      <div class="xl:w-4/6 xl:relative xl:order-2">
        <picture>
          <source
            srcset="
              ~assets/photos/studying-girl_w_375.webp   375w,
              ~assets/photos/studying-girl_w_911.webp   911w,
              ~assets/photos/studying-girl_w_1600.webp 1600w
            "
            sizes="(max-width: 1280px) 100vw, 66.6vw"
            type="image/webp"
          />
          <source
            srcset="
              ~assets/photos/studying-girl_w_375.jpg   375w,
              ~assets/photos/studying-girl_w_911.jpg   911w,
              ~assets/photos/studying-girl_w_1600.jpg 1600w
            "
            sizes="(max-width: 1280px) 100vw, 66.6vw"
            type="image/jpeg"
          />
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src="~assets/photos/studying-girl_w_1600.jpg"
            alt="塾で勉強を頑張ている子供"
          />
        </picture>
        <svg
          class="hidden xl:block xl:absolute xl:inset-y-0 xl:h-full xl:w-32"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="text-blue-800"
            fill="currentColor"
            points="0,0 0,100 100,0"
          />
        </svg>
      </div>
      <div class="z-10 xl:pl-12 xl:w-2/6">
        <p
          class="pt-12 xl:pt-24 text-white text-lg tracking-wider leading-loose font-light"
        >
          学校の授業で苦手な所があっても、
          <br />マンツーマンで克服し <br class="xl:hidden" />学力を伸ばせます。
        </p>
        <p
          class="pt-12 pb-12 xl:pt-16 xl:pb-0 text-white text-lg tracking-wider leading-loose font-light"
        >
          短期集中１０ヶ月で
          <br />偏差値２０ＵＰの実績あり。
        </p>
        <div
          class="flex justify-center pb-8 xl:justify-start xl:pt-16 xl:pb-24"
        >
          <nuxt-link class="btn btn-primary" to="/freeTrail">
            無料体験
            <img
              class="ml-4 w-4 h-4"
              src="~assets/icons/icon-arrow-right.svg"
              alt
            />
          </nuxt-link>
        </div>
      </div>
    </div>
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
