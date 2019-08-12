<template>
  <main class="bg-white text-gray-900 pb-32">
    <PageSubHeader>エラー</PageSubHeader>
    <div class="pt-16 flex justify-center">
      <div>
        <p
          v-if="error.statusCode === 404"
          class="mx-4 bg-orange-100 border-l-2 border-orange-500 text-orange-700 px-8 py-4 text-sm"
        >
          お探しのページは既に削除されたかURLが間違っている可能性があります。
        </p>
        <p
          v-else
          class="mx-4 bg-orange-100 border-l-2 border-orange-500 text-orange-700 px-8 py-4 text-sm"
        >
          エラーが発生しました。
        </p>
        <div class="mt-16 flex justify-center">
          <button class="btn btn-secondary text-center" @click="$router.go(-1)">
            戻る
          </button>
          <nuxt-link
            class="ml-4 btn btn-secondary bg-blue-700 text-white text-center capitalize hover:bg-blue-600 active:bg-blue-800"
            to="/"
          >
            Home
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PageSubHeader from '~/components/PageSubHeader.vue'

export default {
  components: {
    PageSubHeader
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head: {
    title: 'エラー'
  }
}
</script>

<style></style>
