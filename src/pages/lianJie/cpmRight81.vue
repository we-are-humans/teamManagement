<template>
  <div class="content">
    <cpm-content-top :item="data[8]" :isview="isview"></cpm-content-top>
    <div class="add">
      <cpm-add-link></cpm-add-link>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmAddLink from "../../components/lianJieDetail/allList/cpmAddLink";
  export default {
    name: "cpmRight81",
    components: {CpmAddLink, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
  .add{
    margin:16px 24px 90px;
  }
</style>
