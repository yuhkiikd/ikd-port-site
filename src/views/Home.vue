<template>
  <div class="home">
    <h1 class="mb-3">
      <span>H</span>ello
      <span>W</span>orld!
    </h1>
        <vue-loading type="spin" color="#333" :size="{ width: '50px', height: '50px' }"></vue-loading>
    <div class="home-image"><img src="@/assets/home-image.jpg" alt="smile"></div>
    <p>
      初めまして、Ikedaです。<br>
      ここはIkedaのポートフォリオサイトです。
    </p>
    <hr class="my-5">
    <h2 class="mt-5">Profile</h2>
    <img src="https://img.icons8.com/carbon-copy/100/000000/cafe.png" alt="profile_icon">
    <table class="table table-striped table-bordered col-8 mt-4 mx-auto border-1">
      <tbody>
        <tr>
          <td>Name</td>
          <td>Ikeda</td>
        </tr>
        <tr>
          <td>Birthday</td>
          <td>1984.02.26</td>
        </tr>
        <tr>
          <td>Github</td>
          <td><a href="https://github.com/yuhkiikd" target="_blank">yuhkiikd</a></td>
        </tr>
        <tr>
          <td>Twitter</td>
          <td><a href="https://twitter.com/Ikeda11483669" target="_blank">@Ikeda11483669</a></td>
        </tr>
        <tr>
          <td>Favorite</td>
          <td>Coffee</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>