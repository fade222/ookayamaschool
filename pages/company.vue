<template>
  <main class="text-gray-900 bg-white pb-20">
    <PageSubHeader>会社概要</PageSubHeader>
    <div class="pt-8 ml-8 xl:pl-32 xl:pt-16 text-sm md:text-base">
      <table class="tracking-wide text-left">
        <tr>
          <th class="text-blue-800">
            掲載名
          </th>
        </tr>
        <tr>
          <td>大岡山スクール</td>
        </tr>
        <tr>
          <th class="pt-4 text-blue-800">
            フリガナ
          </th>
        </tr>
        <tr>
          <td>オオオカヤマスクウル</td>
        </tr>
        <tr>
          <th class="pt-4 text-blue-800">
            フリガナ
          </th>
        </tr>
        <tr>
          <td>学習塾、そろばん教室</td>
        </tr>
        <tr>
          <th class="pt-4 text-blue-800">
            住所
          </th>
        </tr>
        <tr>
          <td>
            〒１４５－００６２
            <br />東京都大田区北千束１丁目３９－１ <br />大丸ビル２０２
          </td>
        </tr>
        <tr>
          <th class="pt-4 text-blue-800">
            営業時間
          </th>
        </tr>
        <tr>
          <td>
            珠算科（月～金） １５：３０～
            <br />学習科（月～金） １５：３０～
          </td>
        </tr>
        <tr>
          <th class="pt-4 text-blue-800">
            事業内容
          </th>
        </tr>
        <tr>
          <td>珠算科・学習科・読書科・個人指導科・受験科</td>
        </tr>
      </table>
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
    title: '会社概要'
  }
}
</script>

<style></style>
//
