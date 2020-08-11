<template>
  <div class="languages">
    <Header>Languages</Header>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center mb-2 text-white">
        <b-col cols="sm-3" class="label-title-html py-4">Html</b-col>
        <b-col cols="sm-9" class="label-content-html label-ribbon py-4">説明</b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-2 text-white">
        <b-col cols="sm-3" class="label-title-css py-4 text-white">CSS</b-col>
        <b-col cols="sm-9" class="label-content-css label-ribbon py-4">説明</b-col>
      </b-row>
      <b-row class="justify-content-md-center mb-2">
        <b-col cols="sm-3" class="label-title-js py-4">JavaScript</b-col>
        <b-col cols="sm-9" class="label-content-js label-ribbon py-4">説明</b-col>
      </b-row>
      <b-row class="justify-content-md-center text-white">
        <b-col cols="sm-3" class="label-title-ruby py-4 text-white">Ruby</b-col>
        <b-col cols="sm-9" class="label-content-ruby label-ribbon py-4">説明</b-col>
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