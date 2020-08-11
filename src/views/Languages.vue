<template>
  <div class="languages">
    <Header>Languages</Header>
    <b-container class="bv-example-row container-fluid">
      <b-row class="justify-content-md-center mb-2 text-white">
        <b-col cols="sm-3" class="label-title-html py-3 d-flex justify-content-center align-items-center">Html</b-col>
        <b-col cols="sm-9" class="label-content-html label-ribbon text-left py-3">
          <p class="mb-0">
            ・経験年数：10年以上<br>
            ・フレームワーク：Haml、Bootstrap3、Bootstrap4、Wordpress<br>
            ・ダンススタジオ、イベント、飲食店等のWebサイト制作の経験があります。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-2 text-white">
        <b-col cols="sm-3" class="label-title-css py-3 d-flex justify-content-center align-items-center">CSS</b-col>
        <b-col cols="sm-9" class="label-content-css label-ribbon text-left py-3">
          <p class="mb-0">
            ・経験年数：10年以上<br>
            ・フレームワーク：Bootstrap4<br>
            ・ダンススタジオ、イベント、飲食店等のWebサイト制作の経験があります。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-2">
        <b-col cols="sm-3" class="label-title-js py-3 d-flex justify-content-center align-items-center">JavaScript</b-col>
        <b-col cols="sm-9" class="label-content-js label-ribbon text-left py-4">
          <p class="mb-0">
            ・経験年数：1.5年<br>
            ・フレームワーク：Ruby on rails<br>
            ・DIVE INTO CODEというスクールでご教示頂きました。基本的な仕組みは理解しております。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center text-white">
        <b-col cols="sm-3" class="label-title-ruby py-3 d-flex justify-content-center align-items-center">Ruby</b-col>
        <b-col cols="sm-9" class="label-content-ruby label-ribbon text-left py-4">
          <p class="mb-0">
            ・経験年数：1年<br>
            ・フレームワーク：Vue、jQuery<br>
            ・本サイトをVue.cliで制作しております。<br>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "languages",
  components: {
    Header,
  },
};
</script>