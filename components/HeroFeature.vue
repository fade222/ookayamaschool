<template>
  <div>
    <div class="flex justify-center bg-blue-100 xl:pl-4">
      <h3 class="py-2 text-xl tracking-widest text-blue-700 xl:pl-8 xl:mr-auto">
        受験生の駆け込み塾
      </h3>
      <MenuLinksList
        class="hidden xl:flex xl:ml-auto xl:mr-8 xl:mb-2 xl:mt-2"
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
            class="absolute inset-0 object-cover w-full h-full"
            src="~assets/photos/studying-girl_w_1600.jpg"
            alt="塾で勉強を頑張ている子供"
          />
        </picture>
        <svg
          class="hidden xl:block xl:absolute xl:inset-y-0 xl:h-full xl:w-32"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="text-blue-800 fill-current"
            points="0,0 0,100 100,0"
          />
        </svg>
      </div>
      <div class="z-10 px-4 xl:pl-12 xl:w-2/6">
        <p
          class="pt-12 text-lg font-light leading-loose tracking-wider text-white xl:pt-24"
        >
          学校の授業で苦手な所があっても、
          <br />マンツーマンで克服し <br class="xl:hidden" />学力を伸ばせます。
        </p>
        <p
          class="pt-12 pb-12 text-lg font-light leading-loose tracking-wider text-white xl:pt-16 xl:pb-0"
        >
          短期集中１０ヶ月で
          <br />偏差値２０ＵＰの実績あり。
        </p>
        <div
          class="flex justify-center pb-8 xl:justify-start xl:pt-16 xl:pb-24"
        >
          <nuxt-link class="btn btn-primary" to="/freeTrial">
            無料体験
            <svg
              class="w-4 h-4 ml-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 12.167l-11 7.938V4.228l11 7.939zM12 10.333V14H1v-3.667z"
              />
            </svg>
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
