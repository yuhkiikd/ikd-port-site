<template>
  <div class="tools">
    <Header>Tools</Header>
    <b-container class="bv-example-row container-fluid">
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-3" class="label-title-psd py-1 d-flex justify-content-center align-items-center"><img src="https://img.icons8.com/color/48/000000/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></b-col>
        <b-col cols="sm-9" class="label-content label-ribbon text-left py-3">
          <p class="mb-0">
            ・年数：10年以上<br>
            ・使用内容：webサイトデザイン、web用写真加工、映像字幕制作<br>
            ・最大で縦8,000～10,000px程度の、web用画像パーツ制作に使用しております。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-3" class="label-title-ai py-1 d-flex justify-content-center align-items-center"><img src="https://img.icons8.com/color/48/000000/adobe-illustrator.png" alt="illustrator" title="illustrator"></b-col>
        <b-col cols="sm-9" class="label-content label-ribbon text-left py-3">
          <p class="mb-0">
            ・年数：5年<br>
            ・使用内容：アイコン制作、印字マーク制作（鉄製品）<br>
            ・Photoshopに必要なアイコンデータ等制作に、使用しております。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-3" class="label-title-fw py-1 d-flex justify-content-center align-items-center"><img src="https://img.icons8.com/color/48/000000/adobe-fireworks.png" alt="Fireworks" title="Fireworks"></b-col>
        <b-col cols="sm-9" class="label-content label-ribbon text-left py-3">
          <p class="mb-0">
            ・年数：1年<br>
            ・使用内容：バナー制作、画像下降<br>
            ・運用業務にて、バナー・webサイト用画像加工に使用しておりました。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-3" class="label-title-access py-1 d-flex justify-content-center align-items-center"><img src="https://img.icons8.com/color/48/000000/microsoft-access-2019.png" alt="Access" title="Access"></b-col>
        <b-col cols="sm-9" class="label-content label-ribbon text-left py-3">
          <p class="mb-0">
            ・年数：1年<br>
            ・使用内容：集計、集計用元データ作成<br>
            ・集計業務にて、10万件以上の集計データ加工・資料用データ作成をしておりました。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-3" class="label-title-excel py-1 d-flex justify-content-center align-items-center"><img src="https://img.icons8.com/color/48/000000/ms-excel.png" alt="Excel" title="Excel"></b-col>
        <b-col cols="sm-9" class="label-content label-ribbon text-left py-3">
          <p class="mb-0">
            ・年数：3年<br>
            ・使用内容：集計、集計データ作成<br>
            ・基本的な関数、簡易なVBAの使用可能です。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-3" class="label-title-x py-1 d-flex justify-content-center align-items-center"><img src="../assets/xmind.png" alt="XMind" title="XMind"></b-col>
        <b-col cols="sm-9" class="label-content label-ribbon text-left py-3">
          <p class="mb-0">
            ・年数：0.5年<br>
            ・使用内容：サイト分析<br>
            ・主に他サイトの調査、分析に使用しております。
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "tools",
  components: {
    Header,
  },
};
</script>