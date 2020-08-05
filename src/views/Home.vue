<template>
  <div class="home">
    <Header>Home</Header>
    <p>これはtestコメントです。漢字</p>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Header,
  },
};
</script>