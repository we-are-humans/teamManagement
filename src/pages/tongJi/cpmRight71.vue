<template>
  <div class="content">
    <cpm-content-top :item="data[7]" :isview="isview"></cpm-content-top>
    <cpm-content-body2></cpm-content-body2>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmContentBody2 from "../../components/tongJiDetail/cpmContentBody2";
  export default {
    name: "cpmRight",
    components: {CpmContentBody2, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
    overflow-y: auto;
  }
</style>
