<template>
  <div class="articleComment">
    <commentheader></commentheader>
    <commenttop></commenttop>
    <commenttable></commenttable>
    <commentfooter></commentfooter>
  </div>
</template>

<script>
  import commentheader from './commentheader'
  import commenttop from './commenttop'
  import commenttable from './commenttable'
  import commentfooter from './commentfooter'
export default {
  name: "cpmArticlecomment",
  components:{commentheader,commenttop,commenttable,commentfooter},
  data() {
    return {
    }
  }
}
</script>

<style>
  @import "../../../static/css/common.css";
  @import "../../../static/css/articleComment.css";
</style>
