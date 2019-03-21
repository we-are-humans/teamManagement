<template>
  <div class="content">
    <cpm-content-top :item="data[6]" :isview="isview"></cpm-content-top>
    <cpm-new-active-edit></cpm-new-active-edit>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmNewActiveEdit from "../../components/zhaunTiDetail/cpmNewActiveEdit";
  export default {
    name: "cpmRight61",
    components: {CpmNewActiveEdit, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
