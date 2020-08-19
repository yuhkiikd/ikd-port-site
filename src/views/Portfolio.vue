<template>
  <div class="portfolio">
    <Header>Portfolio</Header>
    <b-container class="bv-example-row container-fluid">
      <b-row class="justify-content-md-center mb-md-5 mb-sm-3">
        <b-col cols="sm-3" class="label-title py-3 d-flex justify-content-center align-items-center"><a href="http://52.197.221.44/users/sign_in" target="_blank"><img src="../assets/timecard.jpg" width="100%"></a></b-col>
        <b-col cols="sm-9" class="label-content label-ribbon text-left py-2">
          <p class="mb-0">
            <ul class="mb-0 list-group list-group-flush">
              <li class="list-group-item">勤怠管理アプリ（Ruby on Rails、AWS）<br>【<a href="http://52.197.221.44/users/sign_in" target="_blank">リンク</a>】【<a href="https://github.com/yuhkiikd/timecard" target="_blank">github</a>】</li>
              <li class="list-group-item">【サンプル用アカウント】<br>メール：admin@example.com<br>パスワード：hogehoge</li>
              <li class="list-group-item">制作期間：約1ヶ月</li>
              <li class="list-group-item">Ruby on Railsを使用した勤怠管理webアプリです。出勤状態、残業時間をグラフで可視化する機能を付けて業務改善に役立てる形にしました。勉強も兼ねてデプロイ先はAWSを使用しています。</li>
            </ul>
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-3">
        <b-col cols="sm-3" class="label-title py-3 d-flex justify-content-center align-items-center"><a href="http://52.197.221.44/users/sign_in" target="_blank"><img src="../assets/timecard.jpg" width="100%"></a></b-col>
        <b-col cols="sm-9" class="label-content label-ribbon text-left py-2">
          <p class="mb-0">
            <ul class="mb-0 list-group list-group-flush" height="100%">
              <li class="list-group-item">ikeda-port-site（Vue.cli、heroku）<br>【<a href="https://ikd-port-site.herokuapp.com/" target="_blank">リンク</a>】【<a href="https://github.com/yuhkiikd/ikd-port-site" target="_blank">github</a>】</li>
              <li class="list-group-item">制作期間：約1週間</li>
              <li class="list-group-item">本サイトです。Qiitaの記事を参考に、Vue.cliの試用も兼ねて制作しました。<br>サクサク動くのが素晴らしい。</li>
            </ul>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "portfolio",
  components: {
    Header,
  },
};
</script>