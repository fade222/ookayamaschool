<template>
  <main class="pb-20 text-gray-800 bg-white">
    <PageSubHeader>珠算科</PageSubHeader>
    <div class="mx-4 mt-8 md:px-16 md:mt-8">
      <h4 class="text-lg text-center text-blue-800 md:text-xl xl:text-2xl">
        学童の帰り
        <span class="px-1 bg-blue-300 rounded-full">手</span>
        <span class="px-1 bg-blue-300 rounded-full">ぶ</span>
        <span class="px-1 bg-blue-300 rounded-full">ら</span>
        でそろばん
      </h4>
      <div
        class="p-6 pb-8 mt-8 font-thin text-white bg-blue-700 rounded-lg xl:w-1/2 xl:mx-auto"
      >
        <h5 class="text-sm">
          授業内容
        </h5>

        <ul class="xl:ml-8">
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-koma.svg" alt />
            フラッシュ暗算
          </li>
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-koma.svg" alt />
            百マス計算
          </li>
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-koma.svg" alt />
            計算プリント
          </li>
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-koma.svg" alt />
            読み上げ算
          </li>
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-koma.svg" alt />
            読み上げ暗算
          </li>
          <li class="flex items-center mt-5">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-koma.svg" alt />
            ２桁✕２桁まで暗算強化
          </li>
        </ul>
      </div>
      <p class="mt-4 text-center text-blue-800 text md:text-xl">
        そろばんの授業は塾が開いてる時間なら
        <br class="md:hidden" />何回でも参加可能
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
              ６０分～９０分
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
              希望に合わせて
            </td>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              対象
            </td>
            <td class="text-right border-t border-gray-300">
              幼稚園児～
            </td>
          </tr>
          <tr>
            <th
              class="p-1 pt-8 font-bold text-blue-900 border-t border-gray-300"
            >
              料金
            </th>
            <th
              class="p-1 pt-8 font-bold text-right text-blue-900 border-t border-gray-300"
            >
              税込
            </th>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              入学金
            </td>
            <td class="text-right border-t border-gray-300">
              ７,７００円
            </td>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              維持費
              <span class="text-xs">（１ヶ月）</span>
            </td>
            <td class="text-right border-t border-gray-300">
              ６６０円
            </td>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              教材費
              <span class="text-xs">（１ヶ月）</span>
            </td>
            <td class="text-right border-t border-gray-300">
              ５５０円
            </td>
          </tr>
          <tr>
            <td class="p-1 text-blue-900 border-t border-gray-300">
              授業料
              <span class="text-xs">（１ヶ月）</span>
            </td>
            <td class="text-right border-t border-gray-300">
              ８,８００円
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
    title: '珠算科'
  }
}
</script>
