<template>
  <main class="pb-32 font-sans antialiased font-normal text-gray-900 bg-white">
    <PageSubHeader>エラー</PageSubHeader>
    <div class="flex justify-center pt-16">
      <div>
        <p
          v-if="error.statusCode === 404"
          class="px-8 py-4 mx-4 text-sm text-orange-700 bg-orange-100 border-l-2 border-orange-500"
        >
          お探しのページは既に削除されたかURLが間違っている可能性があります。
        </p>
        <p
          v-else
          class="px-8 py-4 mx-4 text-sm text-orange-700 bg-orange-100 border-l-2 border-orange-500"
        >
          エラーが発生しました。
        </p>
        <div class="flex justify-center mt-16">
          <button @click="$router.go(-1)" class="text-center btn btn-secondary">
            戻る
          </button>
          <nuxt-link
            class="ml-4 text-center text-white capitalize bg-blue-700 btn btn-secondary hover:bg-blue-600 active:bg-blue-800"
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
