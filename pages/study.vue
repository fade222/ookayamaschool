<template>
  <main class="pb-20 text-gray-800 bg-white">
    <PageSubHeader>学習科</PageSubHeader>
    <div class="mx-4 mt-8 md:px-16 md:mt-8">
      <h4 class="text-xl text-center text-blue-800 xl:text-2xl">
        勉強の仕方で成績ＵＰ
      </h4>
      <div
        class="p-6 pb-8 mt-8 font-thin text-white bg-blue-700 rounded-lg xl:w-1/2 xl:mx-auto"
      >
        <h5 class="text-sm">
          授業内容
        </h5>
        <ul class="mt-5 xl:ml-8">
          <li class="flex items-center">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-book.svg" alt />
            １人１人に合わせて勉強を個人指導
          </li>
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-book.svg" alt />
            進路の相談と指導
          </li>
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-book.svg" alt />
            中間・期末テストの試験対策で
            <br class="sm:hidden" />成績ＵＰ
          </li>
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-book.svg" alt />
            学校の宿題も合わせてサポート
          </li>
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-book.svg" alt />
            いつでもオンライン授業に振り替え可能
          </li>
        </ul>
      </div>
      <p class="mt-4 text-center text-blue-800 text md:text-xl">
        理科や社会、英検や漢検対策も
        <br class="md:hidden" />様々な要望に対応
      </p>
      <div class="px-4 md:px-20 xl:px-0 xl:mt-4 xl:w-1/2 xl:mx-auto">
        <table class="w-full mt-4 text-sm text-left table-collapse">
          <tr>
            <th class="p-1 pt-8 font-bold text-blue-900">
              授業詳細
            </th>
            <th class="p-1 pt-8 font-bold text-blue-900"></th>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              授業時間
            </td>
            <td class="text-right border-t border-gray-300">
              ９０分～１２０分
            </td>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              授業開始
            </td>
            <td class="text-right border-t border-gray-300">
              午後３：４５～
              <br />
              <span class="text-xs">（御相談下さい）</span>
            </td>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              授業日
            </td>
            <td class="text-right border-t border-gray-300">
              月・火・木・金
            </td>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              授業回数
            </td>
            <td class="text-right border-t border-gray-300">
              週１～３
            </td>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              対象
            </td>
            <td class="text-right border-t border-gray-300">
              幼稚園児～大学受験生まで
            </td>
          </tr>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head: {
    title: '学習科'
  },
  data() {
    return {
      selected: '学年を選択',
      options: [
        {
          id: 1,
          name: '幼稚園児',
          time: '９０分',
          frequencyOne: '―',
          frequencyTwo: '１３,２００円',
          frequencyThree: '―'
        },
        {
          id: 2,
          name: '小学１・２年生',
          time: '９０分',
          frequencyOne: '―',
          frequencyTwo: '１４,３００円',
          frequencyThree: '―'
        },
        {
          id: 3,
          name: '小学３年生',
          time: '１２０分',
          frequencyOne: '―',
          frequencyTwo: '１８,７００円',
          frequencyThree: '―'
        },
        {
          id: 4,
          name: '小学４・５年生',
          time: '１２０分',
          frequencyOne: '―',
          frequencyTwo: '２０,９００円',
          frequencyThree: '２８,６００円'
        },
        {
          id: 5,
          name: '小学６年生',
          time: '１２０分',
          frequencyOne: '―',
          frequencyTwo: '―',
          frequencyThree: '３０,８００円'
        },
        {
          id: 6,
          name: '中学受験',
          time: '１２０分',
          frequencyOne: '―',
          frequencyTwo: '―',
          frequencyThree: '３８,５００円'
        },
        {
          id: 6,
          name: '中学１・２年生',
          time: '１２０分',
          frequencyOne: '―',
          frequencyTwo: '―',
          frequencyThree: '３３,０００円'
        },
        {
          id: 7,
          name: '中学３年生',
          time: '１２０分',
          frequencyOne: '―',
          frequencyTwo: '―',
          frequencyThree: '３８,５００円'
        },
        {
          id: 8,
          name: '高学１・２年生',
          time: '１２０分',
          frequencyOne: '１７,６００円 ',
          frequencyTwo: '―',
          frequencyThree: '―'
        },
        {
          id: 9,
          name: '高学３年生・既卒',
          time: '１２０分',
          frequencyOne: '２２,０００円 ',
          frequencyTwo: '―',
          frequencyThree: '―'
        }
      ]
    }
  }
}
</script>

<style></style>
