<template>
  <main class="bg-white text-gray-800 pb-20">
    <PageSubHeader>1対1の個人指導科</PageSubHeader>
    <div class="mt-8 mx-4 md:px-16 md:mt-8">
      <h4 class="text-center text-xl xl:text-2xl text-blue-800">
        受験の準備に最適
      </h4>
      <div
        class="mt-8 p-6 pb-8 font-thin bg-blue-700 text-white rounded-lg xl:w-1/2 xl:mx-auto"
      >
        <h5 class="text-sm">
          授業内容
        </h5>
        <ul class="mt-5 xl:ml-8">
          <li class="flex items-center">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-book.svg" alt />
            完全な1対1で指導
          </li>
          <li class="mt-5 flex items-center">
            <img class="w-3 h-3 mr-2" src="~assets/icons/icon-book.svg" alt />
            反復練習により克服
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
              １２０分
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
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              授業回数
            </td>
            <td class="text-right border-t border-gray-300">
              週１回
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              対象
            </td>
            <td class="text-right border-t border-gray-300">
              小学１年～大学受験生まで
            </td>
          </tr>
          <tr>
            <th
              class="p-1 border-t border-b border-gray-300 text-blue-900 pt-8 font-bold"
            >
              料金
            </th>
            <th
              class="p-1 border-t border-b border-gray-300 text-blue-900 pt-8 font-bold text-right"
            >
              税別
            </th>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              入学金
              <span class="text-xs">（１ヶ月）</span>
            </td>
            <td class="text-right border-t border-gray-300">
              １５,０００円
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
            <td class="p-1 border-t border-b border-gray-300 text-blue-900">
              維持費
              <span class="text-xs">（１ヶ月）</span>
            </td>
            <td class="text-right border-t border-b border-gray-300">
              ６００円
            </td>
          </tr>
          <tr>
            <td class="p-1 text-blue-900">
              授業料
            </td>
            <td class="p-1 inline-block relative flex text-right">
              <div class="ml-auto">
                <select
                  v-model="selected"
                  class="block appearance-none w-full border border-gray-500 hover:bg-gray-300 btn pr-8 btn"
                >
                  <option disabled>
                    学年を選択
                  </option>
                  <option
                    v-for="(option, id) in options"
                    :key="id"
                    :value="option"
                  >
                    {{ option.name }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="p-1 border-t border-gray-300 text-blue-900">
              月４回
            </td>
            <td class="text-right border-t border-gray-300">
              {{ selected.frequencyFour }}
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
    title: '1対1の個人指導科'
  },
  data() {
    return {
      selected: '学年を選択',
      options: [
        {
          id: 1,
          name: '小学１・３年生',
          time: '１２０分',
          frequencyFour: '２８,０００円'
        },
        {
          id: 4,
          name: '小学４・６年生',
          time: '１２０分',
          frequencyFour: '３６,０００円'
        },
        {
          id: 6,
          name: '中学１・２年生',
          time: '１２０分',
          frequencyFour: '４４,０００円'
        },
        {
          id: 7,
          name: '中学３年生',
          time: '１２０分',
          frequencyFour: '４４,０００円'
        },
        {
          id: 8,
          name: '高学１・２年生',
          time: '１２０分',
          frequencyFour: '４０,０００円'
        },
        {
          id: 9,
          name: '高学３年生',
          time: '１２０分',
          frequencyFour: '４５,０００円'
        }
      ]
    }
  }
}
</script>

<style></style>
