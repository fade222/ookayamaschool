<template>
  <div>
    <main>
      <HeroFeature />
      <LessonFeature />
      <SecurityFeature />
      <SorobanFeature />
      <ContactFeature />
    </main>
  </div>
</template>

<script>
import HeroFeature from '~/components/HeroFeature.vue'
import LessonFeature from '~/components/LessonFeature.vue'
import SecurityFeature from '~/components/SecurityFeature.vue'
import SorobanFeature from '~/components/SorobanFeature.vue'
import ContactFeature from '~/components/ContactFeature.vue'

export default {
  components: {
    HeroFeature,
    LessonFeature,
    SecurityFeature,
    SorobanFeature,
    ContactFeature
  },
  head: {
    title: '大岡山スクール',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '♦大岡山駅から３分 ♦受験生の駆け込み塾 ♦学校の授業で苦手な所があっても、マンツーマンで克服し、学力を伸ばせます。♦短期集中１０ヶ月で偏差値２０ＵＰの実績あり。♦無料体験　⇨'
      }
    ]
  }
}
</script>

<style></style>
