<template>
  <div class="contact">
    <Header>Contact</Header>
    <p>ご連絡頂く場合は、下記Twitterまでよろしくお願いいたします。</p>
    <p class="my-3">
      <a href="https://twitter.com/Ikeda11483669" target="_blank">
        <img src="https://img.icons8.com/color/48/000000/twitter-circled.png"><br>
        @Ikeda11483669
      </a>
    </p>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "contact",
  components: {
    Header,
  },
};
</script>