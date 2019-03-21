<template>
    <div class="content-body">
      <cpm-content-input2></cpm-content-input2>
      <cpm-content-eacharts></cpm-content-eacharts>
    </div>
</template>

<script>
    import CpmContentInput2 from "./cpmContentInput2";
    import CpmContentEacharts from "./cpmContentEcharts";
    export default {
        name: "cpmContentBody",
      components: {CpmContentEacharts, CpmContentInput2}
    }
</script>

<style scoped>
  .content-body{
    min-width: 320px;
    padding: 0 10px;
    overflow-y: auto;
  }
</style>
