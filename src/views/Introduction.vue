<template>
  <div class="introduction">
    <Header>Intoroduction</Header>
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

<script>
import Header from "@/components/Header.vue";

export default {
  name: "introduction",
  components: {
    Header,
  },
};
</script>