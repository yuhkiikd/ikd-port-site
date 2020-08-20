<template>
  <div class="languages">
    <Header>Languages</Header>
    <b-container class="bv-example-row container-fluid">
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-4" class="label-title-html py-1 d-flex justify-content-center align-items-center"><img src="https://img.icons8.com/color/48/000000/html-filetype.png" alt="HTML" title="HTML"><img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5" title="HTML5"></b-col>
        <b-col cols="sm-8" class="label-content label-ribbon text-left py-3">
          <p class="mb-0">
            ・経験年数：10年以上<br>
            ・フレームワーク：Haml、Wordpress<br>
            ・ダンススタジオ、イベント、飲食店等のWebサイト制作の経験があります。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-4" class="label-title-css py-1 d-flex justify-content-center align-items-center"><img src="https://img.icons8.com/color/48/000000/css-filetype.png" alt="CSS" title="CSS"><img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" title="CSS3"><img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" title="Bootstrap"></b-col>
        <b-col cols="sm-8" class="label-content label-ribbon text-left py-3">
          <p class="mb-0">
            ・経験年数：10年以上<br>
            ・フレームワーク：Bootstrap4<br>
            ・ダンススタジオ、イベント、飲食店等のWebサイト制作の経験があります。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-4" class="label-title-js py-1 d-flex justify-content-center align-items-center"><img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" title="JavaScript"><img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="Vue.js" title="Vue.js"><img src="../assets/jq.png" alt="jQuery" title="jQuery"></b-col>
        <b-col cols="sm-8" class="label-content label-ribbon text-left py-4">
          <p class="mb-0">
            ・経験年数：1年<br>
            ・フレームワーク：Vue、jQuery<br>
            ・本サイトをVue.cliで制作しております。<br>
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col cols="sm-4" class="label-title-ruby py-1 d-flex justify-content-center align-items-center"><img src="https://img.icons8.com/color/48/000000/ruby-programming-language.png" alt="Ruby" title="Ruby"><img src="../assets/rails.png" alt="Ruby on Rails" title="Ruby on Rails"></b-col>
        <b-col cols="sm-8" class="label-content label-ribbon text-left py-4">
          <p class="mb-0">
            ・経験年数：1.5年<br>
            ・フレームワーク：Ruby on rails<br>
            ・スクール、動画教材から学習。基本的な仕組みは理解しております。
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