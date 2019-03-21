<template>
    <div class="content">
      <cpm-content-top :item="data[4]" :isview="isview"></cpm-content-top>
      <div class="kong">
        <wyq-message-header class="pto"></wyq-message-header>
        <wyq-message-seaction></wyq-message-seaction>
        <wyq-message-footer></wyq-message-footer>
      </div>
    </div>
</template>

<script>
    import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
    import WyqMessageSeaction from "../../components/huiYuanDetail/message/WyqMessageSeaction";
    import WyqMessageFooter from "../../components/huiYuanDetail/message/WyqMessageFooter";
    import WyqMessageHeader from "../../components/huiYuanDetail/message/WyqMessageHeader";
     export default {
      name: "cpmRight40",
      components: {WyqMessageHeader, WyqMessageFooter, WyqMessageSeaction, CpmContentTop},
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
  .pto{
    margin-bottom: 20px;
  }
</style>
