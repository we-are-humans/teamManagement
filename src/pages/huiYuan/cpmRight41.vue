<template>
  <div class="content">
    <cpm-content-top :item="data[4]" :isview="isview"></cpm-content-top>
    <div class="kong">
      <wyq-members-header></wyq-members-header>
      <wyq-members-section></wyq-members-section>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import WyqMembersHeader from "../../components/huiYuanDetail/members/WyqMembersHeader";
  import WyqMembersSection from "../../components/huiYuanDetail/members/WyqMembersSection";
  export default {
    name: "cpmRight41",
    components: {WyqMembersSection, WyqMembersHeader, CpmContentTop},
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
</style>
