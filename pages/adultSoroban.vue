<template>
  <main class="bg-white text-gray-800 pb-20">
    <PageSubHeader>大人のそろばん</PageSubHeader>
    <div class="mt-8 mx-4 md:px-16 md:mt-8">
      <h4 class="text-center text-xl xl:text-2xl text-blue-800">
        頭の体操に最適
      </h4>
      <div
        class="mt-8 p-6 pb-8 font-thin bg-blue-700 text-white rounded-lg xl:w-1/2 xl:mx-auto"
      >
        <h5 class="text-sm">
          授業内容
        </h5>
        <ul class="mt-5 xl:ml-8">
          <li class="flex items-center">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-koma.svg" alt />
            未経験者でも大歓迎
          </li>
          <li class="mt-5 flex items-center">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-koma.svg" alt />
            昔やった人は感は直ぐに戻ります。
          </li>
        </ul>
      </div>
      <div class="px-4 md:px-20 xl:px-0 xl:mt-4 xl:w-1/2 xl:mx-auto">
        <table class="mt-4 text-sm w-full table-collapse text-left">
          <tr>
            <th class="p-1 pt-8 font-bold text-blue-900">
              授業詳細
            </th>
            <th class="p-1 pt-8 font-bold text-blue-900"></th>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              授業時間
            </td>
            <td class="text-right border-t border-gray-300">
              ６０分
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              授業開始
            </td>
            <td class="text-right border-t border-gray-300">
              午後３：３０～
              <br />
              <span class="text-xs">（御相談下さい）</span>
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              授業日
            </td>
            <td class="text-right border-t border-gray-300">
              月～金
              <br />
              <span class="text-xs">（御相談下さい）</span>
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              授業回数
            </td>
            <td class="text-right border-t border-gray-300">
              週１～２回
              <br />
              <span class="text-xs">（御相談下さい）</span>
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              対象
            </td>
            <td class="text-right border-t border-gray-300">
              社会人～
            </td>
          </tr>
          <tr>
            <th
              class="p-1 border-t border-gray-300 text-blue-900 pt-8 font-bold"
            >
              料金
            </th>
            <th
              class="p-1 border-t border-gray-300 text-blue-900 pt-8 font-bold text-right"
            >
              税別
            </th>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              入学金
            </td>
            <td class="text-right border-t border-gray-300">
              ６,０００円
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              維持費
              <span class="text-xs">（１ヶ月）</span>
            </td>
            <td class="text-right border-t border-gray-300">
              ６００円
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              教材費
              <span class="text-xs">（１ヶ月）</span>
            </td>
            <td class="text-right border-t border-gray-300">
              ５００円
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              授業料
              <span class="text-xs">（１ヶ月）</span>
            </td>
            <td class="text-right border-t border-gray-300">
              ８,０００円
            </td>
          </tr>
        </table>
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
  head: {
    title: '大人のそろばん'
  }
}
</script>

<style></style>
