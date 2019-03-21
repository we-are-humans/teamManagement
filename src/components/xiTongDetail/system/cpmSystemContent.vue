<template>
    <div>
      <cpm-system-name :data></cpm-system-name>
      <cpm-system-table></cpm-system-table>
    </div>
</template>

<script>
    import CpmSystemName from "./cpmSystemName";
    import CpmSystemTable from "./cpmSystemTable";
    export default {
        name: "cpmSystemContent",
      components: {CpmSystemTable, CpmSystemName},
      props:["data"]
    }
</script>

<style scoped>

</style>
