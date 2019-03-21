<template>
  <div class="content">
    <cpm-content-top :item="data[4]" :isview="isview"></cpm-content-top>
    <div class="kong">
      <wyq-words-header></wyq-words-header>
      <wyq-words-section class="foo"></wyq-words-section>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import WyqWordsHeader from "../../components/huiYuanDetail/words/WyqWordsHeader";
  import WyqWordsSection from "../../components/huiYuanDetail/words/WyqWordsSection";
  export default {
    name: "cpmRight42",
    components: {WyqWordsSection, WyqWordsHeader, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
  .kong{
    padding: 20px 15px;
  }
  .foo{
    margin-top: 20px;
  }
</style>
