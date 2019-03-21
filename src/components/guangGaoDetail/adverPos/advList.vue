<template>
  <div>
    <form-table></form-table>
    <list-page></list-page>
  </div>
</template>

<script>
  import  formTable from "../../../components/common/formTable/formTable"
  import  listPage from "../../../components/common/listPage/listPage"
  export default {
        name: "advList",
      components:{
        formTable,
        listPage
      }
    }
</script>

<style lang="scss" scoped>
 @import "../../../.././static/scss/adverContent";
</style>
