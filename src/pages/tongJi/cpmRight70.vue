<template>
    <div class="content">
      <cpm-content-top :item="data[7]" :isview="isview"></cpm-content-top>
      <cpm-content-body></cpm-content-body>
    </div>
</template>

<script>
    import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
    import CpmContentBody from "../../components/tongJiDetail/cpmContentBody";
    export default {
        name: "cpmRight",
      components: {CpmContentBody, CpmContentTop},
      props: ["data","isview"]
    }
</script>

<style scoped>
  .content{
    flex: 1;
    overflow-y: auto;
  }
</style>
