<template>
    <div class="content-body">
      <cpm-content-input></cpm-content-input>
      <cpm-content-eacharts></cpm-content-eacharts>
    </div>
</template>

<script>
    import CpmContentInput from "./cpmContentInput";
    import CpmContentEacharts from "./cpmContentEcharts";
    export default {
        name: "cpmContentBody",
      components: {CpmContentEacharts, CpmContentInput}
    }
</script>

<style scoped>
  .content-body{
    min-width: 320px;
    padding: 0 10px;
    overflow-y: auto;
  }
</style>
